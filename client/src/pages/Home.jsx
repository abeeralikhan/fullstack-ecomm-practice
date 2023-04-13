import "../App.css";
import Categories from "../components/Categories/Categories";
import Counter from "../components/Counter";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      {/* <Counter /> */}
      <h1 style={{ marginBottom: "2rem", color: "white" }}>Categories</h1>
      <Categories />
    </Layout>
  );
}

export default HomePage;
