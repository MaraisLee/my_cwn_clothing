import { useContext } from "react";
import CheckoutItem from "../../components/checkout-Item/CheckoutItem";
import { CartContext } from "../../contexts/CartContext";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderName,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderName>
          <span>product</span>
        </HeaderName>
        <HeaderName>
          <span>description</span>
        </HeaderName>
        <HeaderName>
          <span>quantity</span>
        </HeaderName>
        <HeaderName>
          <span>price</span>
        </HeaderName>
        <HeaderName>
          <span>remove</span>
        </HeaderName>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total : ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
