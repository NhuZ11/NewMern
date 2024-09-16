import { useReducer, useState } from "react";
import blogcontext from "./BlogContext";
import { cartReducer } from "./Reducer";
import axios from 'axios'

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
            "instock": 2
 

        },
        {
            "id": 102,
            "title": "Ferrari",
            "description": "Red and slick",
            "price": 50000,
            "instock": 2
 

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

    
   
    // const fetchProduct = async()=>{
    //     const response = await axios.get('http://localhost:5000/api/product/getallproducts', {
    //         headers: {
    //             "auth-token": localStorage.getItem('token') // Added headers object for the token
    //         }
    //     });
    //     let parseData = await fetchProduct.json()
    //     console.log(parseData)
    //     setProduct(parseData)
    // }
    const [product, setProduct] = useState([]);
    const fetchProduct = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/product/getallproducts', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                }
            });
            const parseData = await response.json();
            console.log(parseData);  // Ensure this logs the correct product data
            setProduct(parseData);   // Update product state
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    
  
    

    return(
        <blogcontext.Provider value={{state, dispatch ,article, fetchData, product, fetchProduct}}>
            {props.children}
        </blogcontext.Provider>

        
    )
}


export default BlogState;