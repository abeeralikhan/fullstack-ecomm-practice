import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import Loading from "../components/Loading";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { categoryId } = useParams();
  useEffect(() => {
    async function fetchProducts() {
      if (error) setError(false);
      setLoading(true);

      try {
        const response = await fetch(
          `${BASE_URL}/api/categories/${categoryId}`
        );
        console.log(response);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);
  return (
    <Layout>
      <h1 style={{ marginBottom: "2rem" }}>Products</h1>
      {error && (
        <span style={{ color: "red" }}>
          There was an error fetching the products
        </span>
      )}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
      >
        {loading ? (
          <Loading title="products" />
        ) : (
          <Products products={products} />
        )}
      </section>
    </Layout>
  );
}

export default ProductsPage;
