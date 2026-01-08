import React from "react";
import "./ProductCard.css";

import laptopImg from "../images/laptop.jpg";
import phoneImg from "../images/mobile.jpg";
import cameraImg from "../images/camera.jpg";
import headphoneImg from "../images/headphones.jpg";

function ProductCard({ id, name, price, description, onDelete }) {

  const getProductImage = (productName = "") => {
    const key = productName.toLowerCase();

    if (key.includes("laptop")) return laptopImg;

    if (key.includes("phone") || key.includes("mobile")) {
      return phoneImg;
    }

    if (
      key.includes("camera") ||
      key.includes("dslr") ||
      key.includes("canon") ||
      key.includes("nikon")
    ) {
      return cameraImg;
    }

    if (
      key.includes("headphone") ||
      key.includes("headphones") ||
      key.includes("earphone") ||
      key.includes("earphones")
    ) {
      return headphoneImg;
    }

    // ❌ No image available
    return null;
  };

  const imageSrc = getProductImage(name);

  return (
    <div className="product-card">

      {/* DELETE ICON */}
      <span
        className="delete-icon"
        onClick={() => onDelete(id)}
        title="Delete Product"
      >
        🗑️
      </span>

      {/* IMAGE OR PLACEHOLDER */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          className="product-image"
        />
      ) : (
        <div className="no-image">
          No Preview Available
        </div>
      )}

      <h3>{name}</h3>
      <p>{description}</p>
      <strong>₹{price}</strong>

      <button className="product-button">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
