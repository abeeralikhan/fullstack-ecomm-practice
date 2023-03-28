import { Link } from "react-router-dom";

function Category({ category }) {
  return (
    <Link to={`/categories/${category.categoryId}`}>
      <article
        style={{ display: "flex", marginBottom: "3rem", cursor: "pointer" }}
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
          <h2>{category.categoryName}</h2>
        </div>
      </article>
    </Link>
  );
}

export default Category;
