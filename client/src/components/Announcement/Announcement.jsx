import React from "react";
import styled  from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: #028082;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

const Announcement = () => {
  return (
    <Container>
      <span>Super deal| free shipping on orders over $50</span>
    </Container>
  );
};

export default Announcement;
