import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  display: flex;
  height: 200px;
  padding: 10px;
  border-bottom: 1px solid gray;
  width: 100%;
`;

export const CartItemImg = styled.img`
  width: 30%;
  object-fit: contain;
  margin-right: 10px;
`;

export const CartItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;

  span {
    font-size: 1.5rem;
  }

  b {
    margin-right: 5px;
  }
`;

export const CartItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  align-items: flex-end;
  margin-right: 10%;
  ${md({
    marginRight: "5px",
  })}
`;

export const DeleteBtn = styled.button`
  font-size: 2rem;
  background-color: transparent;

  &:hover {
    color: red;
    transition: all 0.2s ease-in-out;
  }
`;

export const ItemsNum = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    font-size: 1.5rem;
    margin: 05px;
    ${md({
      margin: "0 2px",
    })}
  }

  button {
    font-size: 1.8rem;
    background-color: transparent;
    &:hover {
      background-color: lightgray;
      transition: all 0.2s ease-in-out;
      border-radius: 7px;
    }
  }
`;

export const CartItemPrice = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
  ${md({
    fontSize: "2.3rem",
  })}
`;
