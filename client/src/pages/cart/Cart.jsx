import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem";
import { CartContext } from "../../context/CartContext/CartContext";
import {
  Container,
  Title,
  TopRow,
  Bottom,
  CartItems,
  CheckoutCard,
  PriceRow,
  CheckoutBtn,
} from "./cart-styles";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";

const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const { products, quantity, total, dispatch } = useContext(CartContext);
  const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;
  const navigate = useNavigate();

  const onToken = token => {
    setStripeToken(token);
  };

  const makeRequest = async () => {
    try {
      const res = await userRequest.post("checkout/payment", {
        tokenId: stripeToken.id,
        amount: total * 100,
      });
      navigate("/success", {
        state: { data: res.data, products, amount: total },
      });

      dispatch({ type: "RESET" });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <Container>
      <Title>your bag</Title>
      <TopRow>
        <button>
          <Link to="/">continue shopping</Link>
        </button>
        <span>shopping bag({quantity})</span>
      </TopRow>
      <Bottom>
        <CartItems>
          {products?.map((p, i) => (
            <CartItem key={i} p={p} />
          ))}
        </CartItems>
        <CheckoutCard>
          <p>order summary</p>
          <PriceRow>
            <span>Subtotal</span>
            <span>${total}</span>
          </PriceRow>
          <PriceRow>
            <span>Estimated shipping</span>
            <span>$6.9</span>
          </PriceRow>
          <PriceRow>
            <span>shipping discount</span>
            <span>$-6.9</span>
          </PriceRow>
          <PriceRow type="total">
            <span>total</span>
            <span>${total}</span>
          </PriceRow>
          <StripeCheckout
            name="Khirou."
            amount={total * 100} // cents
            stripeKey={STRIPE_KEY}
            shippingAddress
            billingAddress
            token={onToken}
          >
            <CheckoutBtn disabled={total === 0}>checkout now</CheckoutBtn>
          </StripeCheckout>
        </CheckoutCard>
      </Bottom>
    </Container>
  );
};

export default Cart;
