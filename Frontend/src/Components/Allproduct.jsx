import React, { useContext, useEffect, useState } from "react";
import blogcontext from "../context/blogs/BlogContext";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditProductModel from "./EditProductModel";

const Allproduct = () => {
  const context = useContext(blogcontext);
  const {
    state: { cart, products },
    dispatch,
    product,
    fetchProduct,
    editProduct,
    deleteProduct
  } = context;

  const [menuVisibile, setMenuVisible] = useState({});
  const [modalVisibile, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleMenu = (id) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the visibility of the specific product menu
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const saveEdit = (updateData) => {
    editProduct(selectedProduct._id, updateData);
    closeEditModal();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProduct(); // Refresh the product list after deletion
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container py-4">
      <div className="row">
        {product &&
          product.map((e) => (
            <div className="col-md-3" key={e._id}>
              <div className="card m-2">
                <img
                  src={`http://localhost:5000/uploads/${e.images[0]}`} // Use your correct base URL
                  className="card-img-top"
                  alt={`Image of ${e.title}`}
                />
                <div className="card-body">
                  <div className="d-flex align-items-center gap-5">
                    <h5 className="card-title">{e.title}</h5>
                    <BsThreeDotsVertical onClick={() => toggleMenu(e._id)} />
                    {menuVisibile[e._id] && (
                      <div className="menu-options">
                        <button onClick={() => openEditModal(e)}>Edit</button>
                        <button onClick={() => handleDelete(e._id)}>Delete</button>
                      </div>
                    )}
                  </div>
                  <p className="card-text">{e.description}</p>
                  <p className="card-text">Price: ${e.price}</p>
                  {cart && cart.some((p) => p._id === e._id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: e,
                        });
                      }}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: e,
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
              {modalVisibile && selectedProduct && selectedProduct._id === e._id && (
                <EditProductModel
                  product={selectedProduct}
                  onClose={closeEditModal}
                  onSave={saveEdit}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Allproduct;
