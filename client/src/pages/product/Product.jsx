import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import { UserContext } from "../../context/UserContext/UserContext";
import { publicRequest } from "../../requestMethods";
import Login from "../login/Login";
import {
  AddBtn,
  Container,
  Filter,
  Info,
  ItemsNum,
  Price,
  ProductImg,
  ProductName,
  Row,
  SizeSelect,
  ColorFilter,
  Color,
} from "./product.styles";

const Product = () => {
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState(0);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showLogin, setShowLogin] = useState(false);
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const getProduct = async () => {
    try {
      const res = await publicRequest.get(`product/find/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = () => {
    if (currentUser) {
      dispatch({
        type: "ADD_PRODUCT",
        payload: {
          ...product,
          color: product.color[selectedColor],
          size: size || product.size[0],
          quantity,
        },
      });
    } else {
      setShowLogin(true);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Container>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <ProductImg src={product.img} alt={product.title} />
      <Info>
        <ProductName>{product.title}</ProductName>
        <p>{product.ddesc}</p>
        <Price>${product.price}</Price>
        <Filter>
          <span>Size</span>

          <SizeSelect onChange={e => setSize(e.target.value)}>
            {product.size?.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </SizeSelect>
        </Filter>
        <ColorFilter>
          {product.color?.map((c, i) => (
            <Color
              className={i === selectedColor ? "selectedColor" : ""}
              onClick={() => setSelectedColor(i)}
              bg={c}
              key={i}
            />
          ))}
        </ColorFilter>
        <Row>
          <ItemsNum>
            <button
              onClick={() =>
                setQuantity(quantity > 2 ? Number(quantity) - 1 : 1)
              }
            >
              -
            </button>
            <input
              onChange={e => setQuantity(e.target.value)}
              value={quantity}
              min="1"
              max="9"
              type="number"
            />
            <button
              onClick={() =>
                setQuantity(quantity < 9 ? Number(quantity) + 1 : 9)
              }
            >
              +
            </button>
          </ItemsNum>
          <AddBtn onClick={addToCart}>Add To cart</AddBtn>
        </Row>
      </Info>
    </Container>
  );
};

export default Product;
