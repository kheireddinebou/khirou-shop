import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { AiFillDelete } from "react-icons/ai";
import {
  Container,
  CartItemImg,
  CartItemDesc,
  CartItemRight,
  ItemsNum,
  CartItemPrice,
  DeleteBtn,
} from "./cartItem-styles";

const CartItem = ({ p }) => {
  const [quantity, setQuantity] = useState(p.quantity || 1);
  const { dispatch } = useContext(CartContext);

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: {
        id: p._id,
        price: p.price,
        quantity: p.quantity,
      },
    });
  };

  const changeQuantity = type => {
    if (type === "add") {
      setQuantity(prev => (prev < 9 ? prev + 1 : 9));
    } else {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }
  };

  useEffect(() => {
    if (quantity !== p.quantity) {
      dispatch({
        type: "CHANGE_PRODUCT_QUANTITY",
        payload: {
          id: p._id,
          quantity: quantity,
          diff: quantity - p.quantity,
          price: p.price,
        },
      });
    }
  }, [quantity]);

  return (
    <Container>
      <CartItemImg src={p.img} alt={p.title} />
      <CartItemDesc>
        <span>
          <b>Product:</b>
          {p.title}
        </span>
        <span>
          <b>ID:</b>
          {p._id}
        </span>{" "}
        <span style={{ textTransform: "capitalize" }}>
          <b>Size:</b>
          {p.size}
        </span>
      </CartItemDesc>
      <CartItemRight>
        <ItemsNum>
          <button onClick={() => changeQuantity("add")}>+</button>
          <span>{quantity}</span>
          <button onClick={() => changeQuantity("subt")}>-</button>
        </ItemsNum>

        <CartItemPrice>$ {p.price * p.quantity}</CartItemPrice>
        <DeleteBtn onClick={handleDelete}>
          <AiFillDelete />
        </DeleteBtn>
      </CartItemRight>
    </Container>
  );
};

export default CartItem;
