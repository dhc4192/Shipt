import React from "react";
import { Link } from "react-router-dom";
import "./SmallProduct.css";

export default function SmallProduct({ product }) {
  return (
    <Link className="SmallProduct-link" to={"/products/" + product._id}>
      <div className="SmallProduct-container">
        <div className="SmallProduct-image-container">
          <img className="SmallProduct-image" src={product.imgURL} alt="product image"></img>
          <img
            className="SmallProduct-add-image"
            src="/Images/Group 79.png"
          ></img>
        </div>
        <div className="SmallProduct-price">
          <p>$ {product.price}</p>
        </div>
        <div className="SmallProduct-name">
          <p>{product.name}</p>
        </div>
        <div className="SmallProduct-measurement">
          <p>{product.measurement}</p>
        </div>
      </div>
    </Link>
  );
}
