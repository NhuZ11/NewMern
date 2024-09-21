import React, { useContext, useEffect, useState } from "react";
import blogcontext from "../context/blogs/BlogContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditProductModel from "./EditProductModel";
const Allproduct = () => {
  const context = useContext(blogcontext);
  // const { product, fetchProduct } = context;
  const {
    state: { cart, products },
    dispatch, product, fetchProduct
  } = context;

  //for toggle menu in product
  const[menuVisibile, setMenuVisible] = useState(false);
  const [modalVisibile, setModalVisible] = useState(false)

  const toggleMenu = ()=>{
    setMenuVisible(!menuVisibile)
  }

  const openEditModal = ()=>{
    setModalVisible(true)
  }

  const closeEditModal = ()=>{
    setModalVisible(false)
  }

  const saveEdit = (updateData) =>{
    editProduct(_id, updateData)
    closeEditModal()
  }

  console.log(product);
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="container py-4">
      <h1 className="d-flex justify-content-center fw-bold my-2" >All available cars</h1>
      <div className="row">
        {product &&
          product.map((e, index) => {
            return (
              <div className="col-md-3" >
                <div className="card m-2">
                  <img
                    src={`http://localhost:5000/uploads/${e.images[0]}`} // Use your correct base URL
                    className="card-img-top"
                    alt={`Image of ${e.title}`}
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-5">
                    <h5 className="card-title">{e.title}</h5>
                    <BsThreeDotsVertical onClick={toggleMenu}/>
                    {
                      menuVisibile && (
                        <div className="menu-options">
                          <button onClick={openEditModal}Edit></button>
                          <button onClick={()=>deleteWork(_id)}>Delete</button>
                        </div>
                      )
                    }
                    </div>
                    <p className="card-text">{e.description}</p>
                    <p className="card-text">Price: ${e.price}</p>
                    {cart && cart.some((p) => p._id == e._id) ? (
                      <button className="btn btn-danger" onClick={()=>{
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: e
                        })
                      }}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={()=>{
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: e
                        })
                      }}>Add to cart</button>
                    )}
                  </div>
                </div>
              </div>
            );
            {
              modalVisibile && (
                <EditProductModel
                product={props.product}
                 />
              )
            }
          })}
      </div>
    </div>
  );
};

export default Allproduct;
