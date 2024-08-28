import { useReducer, useState } from "react";
import blogcontext from "./BlogContext";
import { cartReducer } from "./Reducer";

const BlogState = (props)=>{
    // const user={
    //     name: "ramesh",
    //     age: 20
    // }

    // const [state, setState] = useState(user)
    // const updateValue = ()=>{
    //     setTimeout(()=>{
    //         setState({
    //             name: "dinesh",
    //             age: 22
    //         })
    //     },2000)
    // }

    const products=[
        {
            "id": 101,
            "title": "Lamborghini",
            "description": "Super fast and slick",
            "price": 150000,
            "instock": 5
 

        },
        {
            "id": 102,
            "title": "Ferrari",
            "description": "Red and slick",
            "price": 50000,
            "instock": 5
 

        }
    ]

    const [state, dispatch] = useReducer(cartReducer,
        {
            products: products,
            cart: []
        }

    )

    
    const [article, setArticle] = useState([]);
    const fetchData = async() => {
      let url =`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${props.apiKey}`;
      let data = await fetch(url)
      let parseDate =  await data.json()
      console.log(parseDate)
      setArticle(parseDate.articles)
    };
  
    

    return(
        <blogcontext.Provider value={{state, dispatch ,article, fetchData}}>
            {props.children}
        </blogcontext.Provider>

        
    )
}


export default BlogState;