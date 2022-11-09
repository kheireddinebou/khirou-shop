import React from "react";
import { Link } from "react-router-dom";
import { Center, Container, Left, Right, Row,Payment } from "./footer-styles";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <Container>
      <Left>
        <span>KHIROU.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          eligendi porro doloremque dicta, repellat culpa at accusantium quidem
          a quas ea, accusamus delectus laborum, nesciunt voluptate veniam
          distinctio veritatis non.
        </p>
      </Left>
      <Center>
        <span>Useful Links</span>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">Man Fashion</Link>
          </li>
          <li>
            <Link to="/">Women Fashion</Link>
          </li>
          <li>
            <Link to="/">Accessories</Link>
          </li>
          <li>
            <Link to="/">Order Tracking</Link>
          </li>
          <li>
            <Link to="/">Wishlist</Link>
          </li>
          <li>
            <Link to="/">Terms</Link>
          </li>
          <li>
            <Link to="/">MyAccount</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
        </ul>
      </Center>

      <Right>
        <span>contact</span>
        <Row>
          <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
          <p>48005 Djdiouia, Algeria</p>
        </Row>
        <Row>
          <BsTelephone style={{ fontSize: "1.5rem" }} />
          <p>+1 234 56 78</p>
        </Row>
        <Row>
          <HiOutlineMail style={{ fontSize: "2rem" }} />
          <p>contact@khirou.dev</p>
        </Row>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt='payment methods' />
      </Right>
    </Container>
  );
};

export default Footer;
