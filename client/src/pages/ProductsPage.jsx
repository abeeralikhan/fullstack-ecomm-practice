import Layout from "../components/Layout";
import Products from "../components/Products/Products";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";
import useProduct from "../hooks/useProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";

function ProductsPage() {
  const { products, loading, error } = useProduct();
  console.log("Products Page", products);

  return (
    <Layout>
      <BackButton path={`/`} title="CATEGORIES" />
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
