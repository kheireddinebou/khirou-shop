import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Container = styled.div`
  background-color: #028082;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    border-radius: 50%;
    padding: 6px;
    border: 1px solid white;
    transition: 0.2s all ease-in-out;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: white;
      color: #028082;
    }
  }
`;

const Rights = styled.span`
  font-size: 0.8rem;
`;

const SocielMediaLinks = () => {
  return (
    <Container>
      <Title>Khirou.</Title>
      <Links>
        <Link to="/">
          <FaFacebookF />
        </Link>
        <Link to="/">
          <FaInstagram />
        </Link>{" "}
        <Link to="/">
          <FaPinterestP />
        </Link>{" "}
        <Link to="/">
          <FaTwitter />
        </Link>
      </Links>
      <Rights>© KHEIEREDDIN All rights reserved</Rights>
    </Container>
  );
};

export default SocielMediaLinks;
