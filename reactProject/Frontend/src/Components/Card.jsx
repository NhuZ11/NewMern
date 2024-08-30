import React, { useContext, useEffect, useState } from "react";
import BlackCar from "../assets/blackcar.png";
import blogcontext from "../context/blogs/BlogContext";
const Card = () => {
  const context = useContext(blogcontext)
  const {article, fetchData}= context
 

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="container py-4">
      <div className="row">
        {article && article.map((e,index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={BlackCar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.author}</p>
                  <a href={e.url} target="blank" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
