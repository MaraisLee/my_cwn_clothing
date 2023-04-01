import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-Item/CheckoutItem';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderName,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
