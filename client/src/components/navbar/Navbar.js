import { Link } from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {
  Container,
  Logo,
  Wrapper,
  Left,
  Reight,
  Cart,
  Badge,
  InputWrapper,
  SearchBtn,
  SearchInput,
  UserName,
} from "./navbar-styles";
import { useContext, useState } from "react";
import Register from "../../pages/register/Register";
import Login from "../../pages/login/Login";
import { CartContext } from "../../context/CartContext/CartContext";
import { UserContext } from "../../context/UserContext/UserContext";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const { quantity } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showLogin && (
        <Login setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
      )}

      <Container>
        {showSearch && (
          <SearchInput>
            <BsSearch />
            <input type="text" placeholder="Search fo pruduct...." />
            <button onClick={() => setShowSearch(false)}>
              <AiOutlineClose />
            </button>
          </SearchInput>
        )}
        <Wrapper>
          <SearchBtn onClick={() => setShowSearch(true)}>
            <BsSearch />
          </SearchBtn>
          <Left>
            <InputWrapper>
              <input type="text" placeholder="Search fo pruduct...." />
              <BsSearch />
            </InputWrapper>
          </Left>

          <Logo>
            <Link to="/">khirou.</Link>
          </Logo>

          <Reight>
            {currentUser ? (
              <UserName>{currentUser.username}</UserName>
            ) : (
              <>
                <Link onClick={() => setShowRegister(true)}>register</Link>
                <Link onClick={() => setShowLogin(true)}>Sign in</Link>{" "}
              </>
            )}

            <Link to="/cart">
              <Cart>
                <BsCart3 />
                <Badge>{quantity}</Badge>
              </Cart>
            </Link>
          </Reight>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
