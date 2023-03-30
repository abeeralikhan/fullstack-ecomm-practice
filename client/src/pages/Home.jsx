import "../App.css";
import Categories from "../components/Categories";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <h1>Categories</h1>
      <Categories />
    </Layout>
  );
}

export default HomePage;
