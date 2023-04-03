import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout";
import useCart from "../hooks/useCart";

function CartPage() {
  const { cart } = useCart();
  return (
    <Layout>
      <Cart cart={cart} />
    </Layout>
  );
}

export default CartPage;
