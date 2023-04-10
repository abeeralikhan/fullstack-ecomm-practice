import { createContext, useState } from "react";
export const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  return (
    <ProductContextProvider value={{ product, setProduct }}>
      {children}
    </ProductContextProvider>
  );
};
