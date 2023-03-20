import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.js";
export const ProductContext = createContext({
  product: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
