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

  const removeSingleItem = (productId) => {
    const updatedCart = [...cart];
    const product = updatedCart.find((item) => item.id === productId);
    const itemIdx = updatedCart.findIndex((item) => item.id === productId);

    // When quantity > 1
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      updatedCart[itemIdx] = product;
      setCart(updatedCart);
      return;
    }

    // When quantity === 1
    removeItem(productId);
  };

  const removeItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return { cart, addToCart, removeSingleItem, removeItem };
};

export default useCart;
