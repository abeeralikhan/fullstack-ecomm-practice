const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

const PORT = 8001;

const getData = async (filepath) => {
  const data = await fs.promises.readFile(filepath, "utf8");

  return JSON.parse(data);
};

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

// Get all categories
app.get("/api/categories", async (req, res) => {
  const categories = await getData("./categories.json");
  res.json(categories);
});

// Get all products for that category
app.get("/api/categories/:categoryId", async (req, res) => {
  const categoryId = +req.params.categoryId;
  let products = await getData("./products.json");
  products = products.filter((product) => product.categoryId === categoryId);
  if (!products.length) return res.json({ error: "Category does not exist!" });

  res.json(products);
});

// Get a single product
app.get("/api/products/:productId", async (req, res) => {
  const productId = +req.params.productId;
  const products = await getData("./products.json");
  const product = products.find((product) => product.id === productId);

  if (!product) return res.json({ error: "Product does not exist!" });

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
