import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const useCategory = () => {
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

  return [categories, loading, error];
};

export default useCategory;
