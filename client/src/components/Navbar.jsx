import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    borderBottom: "1px solid gray",
    marginBottom: "50px",
  };
  return (
    <div style={styles}>
      <Link to="/">Ecommerce App</Link> - Home | About | Contact Us
    </div>
  );
};

export default Navbar;
