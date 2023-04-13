import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../config";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const useProduct = () => {
  const { products, setProducts } = useContext(ProductContext);
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

  const addToFavorite = (productId) => {
    setProducts((current) =>
      current.map((item) => {
        if (item.id === productId) {
          item.isFavourite = !item.isFavourite;
          console.log(item);
        }
        return item;
      })
    );
  };

  return { products, loading, error, addToFavorite };
};

export default useProduct;
