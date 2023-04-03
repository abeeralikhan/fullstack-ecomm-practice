import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProduct";
import "./index.css";
import CartPage from "./pages/Cart";
import { CartContextProvider } from "./context/cartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories/:categoryId",
    element: <ProductsPage />,
  },
  {
    path: "/categories/:categoryId/product/:productId",
    element: <SingleProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
