import Category from "./Category";
import Loading from "../Loading";
import useCategory from "../../hooks/useCategory";

function Categories() {
  const [categories, loading, error] = useCategory();

  return (
    <>
      {error && (
        <span style={{ color: "red" }}>
          There was an error fetching the categorires
        </span>
      )}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
      >
        {loading ? (
          <Loading title="categoires" />
        ) : (
          categories.map((category) => (
            <Category category={category} key={category.categoryId} />
          ))
        )}
      </section>
    </>
  );
}

export default Categories;
