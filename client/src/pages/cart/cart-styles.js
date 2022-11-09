import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  border-top: 1px solid black;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.span`
  font-size: 3rem;
  text-transform: uppercase;
`;
export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    text-transform: capitalize;
    text-decoration: underline;
    font-size: 1.7rem;
    ${md({
      fontSize: "1.2rem",
    })}
  }

  button {
    text-transform: uppercase;
    border: 2px solid black;
    font-weight: 500;
    font-size: 1.2rem;
    background-color: transparent;
    padding: 9px;
    ${md({
      fontSize: "1rem",
      padding: "7px",
    })}
  }
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  ${md({
    flexDirection: "column-reverse",
  })}
`;

export const CartItems = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const CheckoutCard = styled.div`
  border: 1px solid gray;
  width: 400px;
  max-width: 100vw;
  min-width: 25vw;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  p {
    font-size: 2.7rem;
    margin: 0;
    text-transform: uppercase;
  }
`;
export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-transform: capitalize;
  font-size: ${props => (props.type === "total" ? 2 : 1.4)}rem;
  font-weight: ${props => (props.type === "total" ? 600 : 400)};
`;

export const CheckoutBtn = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  margin-top: 10px;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: all 0.2s ease-in-out;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
