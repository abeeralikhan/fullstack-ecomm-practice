import CartItem from "./CartItem";

function Cart({ cart }) {
  return (
    <>
      <h1 style={{ marginBottom: "2rem" }}>Cart</h1>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        {cart.length ? (
          cart.map((item) => <CartItem item={item} />)
        ) : (
          <span style={{ fontSize: "1.5rem" }}>Your cart is empty!</span>
        )}
      </section>
    </>
  );
}

export default Cart;
