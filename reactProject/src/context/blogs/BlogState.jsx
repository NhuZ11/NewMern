import { useState } from "react";
import blogcontext from "./BlogContext";

const BlogState = (props)=>{
    const user={
        name: "ramesh",
        age: 20
    }

    const [state, setState] = useState(user)
    const updateValue = ()=>{
        setTimeout(()=>{
            setState({
                name: "dinesh",
                age: 22
            })
        },2000)
    }

    const [article, setArticle] = useState([]);
    const fetchData = async() => {
      let url =`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${props.apiKey}`;
      let data = await fetch(url)
      let parseDate =  await data.json()
      console.log(parseDate)
      setArticle(parseDate.articles)
    };
  
  

    return(
        <blogcontext.Provider value={{state, updateValue, article, fetchData}}>
            {props.children}
        </blogcontext.Provider>
    )
}


export default BlogState;