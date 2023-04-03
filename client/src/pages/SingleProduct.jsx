import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { BASE_URL } from "../config";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";
import useCart from "../hooks/useCart";

function SingleProductPage() {
  const { addToCart } = useCart();
  const { productId, categoryId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      if (error) setError(false);
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/api/products/${productId}`);
        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <Layout>
      {error && (
        <span style={{ color: "red" }}>
          There was an error fetching the product
        </span>
      )}
      {loading ? (
        <Loading title="product" />
      ) : (
        <>
          <BackButton path={`/categories/${categoryId}`} title="PRODUCTS" />
          <article
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "10px",
                }}
                src={singleProduct.image}
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
              <h2>{singleProduct.title}</h2>
              <p style={{ maxWidth: "300px" }}>{singleProduct.description}</p>
              <p
                style={{
                  color: "lightgreen",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                }}
              >
                Rs. {singleProduct.price}
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <button
                  style={{ backgroundColor: "hotpink", color: "white" }}
                  onClick={() => addToCart(singleProduct)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </article>
        </>
      )}
    </Layout>
  );
}

export default SingleProductPage;
