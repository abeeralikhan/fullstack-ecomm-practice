import { Link } from "react-router-dom";

function BackButton({ path, title }) {
  return (
    <Link to={path}>
      <button style={{ color: "red", marginBottom: "1rem" }}>
        BACK TO {title}
      </button>
    </Link>
  );
}

export default BackButton;
