import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import Category from "./Category";
import Loading from "./Loading";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/categories`);
      const data = await response.json();
      setCategories(data);
      setTimeout(() => setLoading(false), 200);
    }
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading title="categoires" />
      ) : (
        categories.map((category) => (
          <Category category={category} key={category.id} />
        ))
      )}
    </>
  );
}

export default Categories;
