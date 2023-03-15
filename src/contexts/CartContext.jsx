import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //지금 장바구니에 있는지없는지
  //있으면 수량 증가
  //없으면 새로 생성
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  // 장바구니 클릭시 보이는 제품들
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
