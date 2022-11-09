import { Link } from "react-router-dom";
import { BsSearch, BsCart3, BsHeart } from "react-icons/bs";
import { Circle, Icon, Img, ProductContainer, Info } from "./product-styles";

const Product = ({ item }) => {
  return (
    <ProductContainer>
      <Circle />
      <Img src={item.img} alt="" />
      <Info>
        <Link to={`/product/${item._id}`}>
          <Icon>
            <BsCart3 />
          </Icon>
        </Link>
        <Link to={`/product/${item._id}`}>
          <Icon>
            <BsSearch />
          </Icon>
        </Link>
        <Link to={`/product/${item._id}`}>
          <Icon>
            <BsHeart />
          </Icon>
        </Link>
      </Info>
    </ProductContainer>
  );
};

export default Product;
