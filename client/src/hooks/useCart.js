import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (newProduct) => {
    const product = cart.find((item) => item.id === newProduct.id);

    // Does not exist
    if (!product) {
      newProduct.quantity = 1;
      setCart((prev) => [...prev, newProduct]);
      return;
    }

    // Already exist
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== newProduct.id) return item;
        return { ...item, quantity: item.quantity + 1 };
      })
    );
  };

  return { cart, addToCart };
};

export default useCart;
