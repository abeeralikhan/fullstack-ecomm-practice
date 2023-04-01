import { useState, useEffect } from "react";
import { BASE_URL } from "../config";
import { useParams } from "react-router-dom";

const useProduct = () => {
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

  return [products, loading, error];
};

export default useProduct;
