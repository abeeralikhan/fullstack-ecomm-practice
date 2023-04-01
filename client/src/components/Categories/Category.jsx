import { Link } from "react-router-dom";

function Category({ category }) {
  return (
    <Link to={`/categories/${category.categoryId}`}>
      <article
        style={{
          display: "flex",

          cursor: "pointer",
          alignItems: "center",
          border: "1px solid #444",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <div>
          <img
            style={{
              display: "block",
              width: "250px",
              height: "250px",
              borderRadius: "10px",
            }}
            src={category.categoryImage}
            alt="category image"
          />
        </div>
        <div style={{ marginLeft: "2rem" }}>
          <h2 style={{ color: "white" }}>{category.categoryName}</h2>
        </div>
      </article>
    </Link>
  );
}

export default Category;
