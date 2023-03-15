import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {}
        <CartItem />
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
