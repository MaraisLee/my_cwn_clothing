import "./cardIcon.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shoppingBag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
