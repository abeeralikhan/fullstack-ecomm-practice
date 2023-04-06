import { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart({ cart }) {
  const [total, setTotal] = useState(0);
  const calculateTotal = () => {
    let total = 0;
    for (let product of cart) {
      total += product.price * product.quantity;
    }
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <>
      <h1 style={{ marginBottom: "2rem" }}>Cart</h1>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
      >
        {cart.length ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span style={{ fontSize: "1.5rem" }}>Your cart is empty!</span>
        )}
      </section>
      {!!cart.length && (
        <div
          style={{
            fontSize: "1.6rem",
            fontWeight: "600",
            marginTop: "1.75rem",
            textAlign: "right",
            width: "95%",
          }}
        >
          Total: {total}
        </div>
      )}
    </>
  );
}

export default Cart;
