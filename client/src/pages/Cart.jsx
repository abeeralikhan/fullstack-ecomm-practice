import Layout from "../components/Layout";
import useCart from "../hooks/useCart";

function CartPage() {
  const { cart } = useCart();
  return (
    <Layout>
      {cart.length ? (
        cart.map((item) => (
          <h2>
            {item.title} - {item.quantity}
          </h2>
        ))
      ) : (
        <h2>Your cart is empty!</h2>
      )}
    </Layout>
  );
}

export default CartPage;
