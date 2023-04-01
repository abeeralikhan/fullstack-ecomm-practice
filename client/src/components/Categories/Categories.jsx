import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import Category from "./Category";
import Loading from "../Loading";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      if (error) setError(false);
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {error && (
        <span style={{ color: "red" }}>
          There was an error fetching the categorires
        </span>
      )}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
      >
        {loading ? (
          <Loading title="categoires" />
        ) : (
          categories.map((category) => (
            <Category category={category} key={category.id} />
          ))
        )}
      </section>
    </>
  );
}

export default Categories;
