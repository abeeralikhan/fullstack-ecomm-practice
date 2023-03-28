import { useEffect, useState } from "react";
import Category from "./Category";

const BASE_URL = "http://localhost:8000";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${BASE_URL}/api/categories`);
      const data = await response.json();
      setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </>
  );
}

export default Categories;
