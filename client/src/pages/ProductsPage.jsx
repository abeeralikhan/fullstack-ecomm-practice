import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import Loading from "../components/Loading";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/categories/${categoryId}`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);
  return (
    <Layout>
      <h1 style={{ marginBottom: "2rem" }}>Products</h1>
      {loading ? (
        <Loading title="products" />
      ) : (
        <Products products={products} />
      )}
    </Layout>
  );
}

export default ProductsPage;
