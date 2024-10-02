import { useReducer, useState } from "react";
import blogcontext from "./BlogContext";
import { cartReducer } from "./Reducer";
import axios from 'axios'
import Allproduct from "../../Components/Allproduct";
import BlackCar from "../../assets/Car1.png";
import Car2 from "../../assets/Car2.png";

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

    const products = [
        {
          id: 101,
          title: "Lamborghini",
          description: "Super fast and slick",
          price: 150000,
          instock: 2,
          images: BlackCar,
        },
        {
          id: 102,
          title: "Ferrari",
          description: "Red and slick",
          price: 50000,
          instock: 2,
          images: Car2,
        },
      ];

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

    const editProduct = async (selectedProduct, updateData) => {
        console.log(`Editing product with id: ${selectedProduct}`);
    
        const { title, description, price, instock } = updateData;
    
        try {
            const response = await fetch(`http://localhost:5000/api/product/updateproduct/${selectedProduct}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token') 
                },
                body: JSON.stringify({ title, description, price, instock }) 
            });
            if (!response.ok) {
                throw new Error(`Failed to update product. Status code: ${response.status}`);
            }
            const json = await response.json();
            console.log('Product updated successfully:', json);
    
        } catch (error) {
            console.error('Error updating product:', error.message || error);
        }
    };


    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/product/deleteproduct/${id}`, {
                method: 'DELETE',

                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },
            });

            if (response.ok) {
                console.log("Work item deleted successfully.");
                // Update the state to remove the deleted item from the UI
                fetchProduct(); // Fetch the updated list of products
            } else {
                console.error("Failed to delete the work item.");
            }
        } catch (error) {
            console.error("An error occurred while deleting the work item:", error);
        }
    };

    
  
    

    return(
        <blogcontext.Provider value={{state, dispatch ,article, fetchData, product, fetchProduct, editProduct, deleteProduct}}>
            {props.children}
        </blogcontext.Provider>

        
    )
}


export default BlogState;