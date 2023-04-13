import React from "react";
import { Link, useParams } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";

function Product({ product }) {
  const { categoryId } = useParams();
  const { addToCart } = useCart();
  const { addToFavorite } = useProduct();
  console.log("Single Product");

  return (
    <article
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #444",
        borderRadius: "10px",
        padding: "1rem",
        color: "white",
      }}
    >
      <div>
        <img
          style={{ height: "250px", width: "250px", borderRadius: "10px" }}
          src={product.image}
          alt="product image"
        />
      </div>
      <div
        style={{
          marginLeft: "2rem",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
        }}
      >
        <h2>{product.title}</h2>
        <p style={{ maxWidth: "300px" }}>{product.description}</p>
        <p
          style={{
            color: "lightgreen",
            fontWeight: "bold",
            fontSize: "1.8rem",
          }}
        >
          Rs. {product.price}
          <i
            className="fas fa-heart"
            style={{
              cursor: "pointer",
              marginLeft: "2rem",
              fontSize: "20px",
              color: product.isFavourite ? "red" : "white",
            }}
            onClick={() => addToFavorite(product.id)}
          ></i>
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Link to={`/categories/${categoryId}/product/${product.id}`}>
            <button>VIEW</button>
          </Link>
          <button
            style={{ backgroundColor: "hotpink", color: "white" }}
            onClick={() => addToCart(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}

export default Product;
