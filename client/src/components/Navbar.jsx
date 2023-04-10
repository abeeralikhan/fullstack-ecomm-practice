import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { cart } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getQuantity();
  }, [cart]);

  const getQuantity = () => {
    if (!cart.length) return 0;

    setQuantity(
      cart.reduce((curr, item) => {
        return curr + item.quantity;
      }, 0)
    );
  };

  const styles = {
    borderBottom: "1px solid gray",
    marginBottom: "50px",
    color: "white",
  };
  return (
    <div style={styles}>
      <Link to="/">Ecommerce App</Link> - Home | About | Contact Us -{" "}
      <Link to="/cart">Cart ({quantity})</Link> |
      <Link to="/Likes"> Favourites({quantity})</Link>
    </div>
  );
};

export default Navbar;
