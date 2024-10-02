import React, { useState } from 'react';
import axios from 'axios';

const Addproduct = (props) => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        instock: "",
        image: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', product.title);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('instock', product.instock);
        if (product.image) {
            formData.append('myfile', product.image);
        }
        try {
            const response = await axios.post('http://localhost:5000/api/product/addproduct', formData, {
                headers: {
                    "auth-token": localStorage.getItem('token'),
                },
            });
            console.log(response.data);
            props.alertShow("Added successfully", "success");
            setProduct({
                title: "",
                description: "",
                price: "",
                instock: "",
                image: ""
            });
        } catch (error) {
            console.error(error);
            props.alertShow("Failed to add product", "danger");
        }
    };

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setProduct({
                ...product,
                [e.target.name]: e.target.files[0]
            });
            console.log(e.target.files[0]);
        } else {
            setProduct({
                ...product,
                [e.target.name]: e.target.value
            });
        }
    };

    return (
        <div className="add-product-background">
            <div className="container d-flex justify-content-center mt-5">
                <div className="card p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%', backgroundColor: '#2C2C2C', color: '#E0E0E0' }}>
                    <h2 className="text-center mb-4">Add Product</h2>
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                type="text" 
                                className="form-control bg-dark text-light border-0" 
                                id="title" 
                                name="title" 
                                value={product.title} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input 
                                type="text" 
                                className="form-control bg-dark text-light border-0" 
                                name="description" 
                                value={product.description} 
                                onChange={handleChange} 
                                id="description" 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input 
                                type="number" 
                                name="price" 
                                value={product.price} 
                                onChange={handleChange} 
                                className="form-control bg-dark text-light border-0" 
                                id="price" 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="instock" className="form-label">In Stock</label>
                            <input 
                                type="number" 
                                name="instock" 
                                value={product.instock} 
                                onChange={handleChange} 
                                className="form-control bg-dark text-light border-0" 
                                id="instock" 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Choose Image</label>
                            <input 
                                type="file" 
                                name="image" 
                                onChange={handleChange} 
                                className="form-control bg-dark text-light border-0" 
                                id="image" 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addproduct;
