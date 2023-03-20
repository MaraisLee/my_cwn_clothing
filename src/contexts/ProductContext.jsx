import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.js';

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
