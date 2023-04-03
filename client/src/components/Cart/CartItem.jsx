function CartItem({ item }) {
  const btnStyles = {
    padding: "2px 8px",
    fontSize: "1.1rem",
    fontWeight: 600,
    backgroundColor: "#444",
  };
  return (
    <article style={{ display: "flex" }}>
      <div>
        <img
          src={item.image}
          alt="product image"
          style={{ width: "150px", height: "150px", borderRadius: "10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "2rem",
          marginRight: "1rem",
          width: "400px",
        }}
      >
        <div>
          <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            {item.title}
          </div>
          <div
            style={{
              display: "flex",
              gap: "9px",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "1.3rem",
                color: "seagreen",
                fontWeight: "600",
                marginRight: "1rem",
              }}
            >
              Rs. {item.price}
            </span>
            <button style={btnStyles}>-</button>
            <span style={{ fontWeight: "600" }}>{item.quantity}</span>
            <button style={btnStyles}>+</button>
          </div>
        </div>
        <div
          style={{
            fontSize: "1.3rem",
          }}
        >
          <span style={{ fontSize: "1.4rem", fontWeight: 600 }}>
            Rs. {item.price * item.quantity}
          </span>
        </div>
      </div>
      <button style={{ backgroundColor: "crimson" }}>X</button>
    </article>
  );
}

export default CartItem;
