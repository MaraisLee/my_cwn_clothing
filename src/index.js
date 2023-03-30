import React from "react";
import "./index.scss";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// context

import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CartProvider } from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </Provider>
  </BrowserRouter>
);
