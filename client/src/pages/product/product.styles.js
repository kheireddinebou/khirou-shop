import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  ${md({
    flexDirection: "column",
  })}
`;

export const ProductImg = styled.img`
  min-width: 50%;
  max-height: calc(90vh - 90px);
  object-fit: contain;
  ${md({
    maxWidth: "100%",
    height: "350px",
  })}
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 1.2rem;
  }
`;
export const ProductName = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
`;

export const Price = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 20px 0;

  span {
    font-size: 2rem;
    margin-right: 10px;
  }
`;

export const ColorFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Color = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${props => props.bg};
  cursor: pointer;
  border: 0.1px solid black;

  &.selectedColor {
    box-shadow: 0px 0px 4px 2px #000;
  }

  &:hover {
    box-shadow: 0px 0px 6px #000;
    transition: all 0.2s ease-out;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const SizeSelect = styled.select`
  padding: 10px;
  text-transform: uppercase;
`;
export const ItemsNum = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  input {
    padding: 7px;
    border: 1px solid teal;
    border-radius: 8px;
    font-size: 1rem;
    width: 35px;
  }

  button {
    font-size: 1.5rem;
    background-color: transparent;
    &:hover {
      background-color: lightgray;
      transition: all 0.2s ease-in-out;
      border-radius: 7px;
    }
  }
`;
export const AddBtn = styled.button`
  padding: 12px;
  border: 2px solid teal;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  background-color: transparent;

  &:hover {
    border: 2px solid transparent;
  }
`;
