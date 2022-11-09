import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  padding: 30px 20px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  ${md({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

export const Category = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const Desc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  span {
    font-size: 2.2rem;
    font-weight: 700;
    color: white;
    text-align: center;
    width: 100%;
  }

  button {
    color: black;
    background-color: white;
    font-size: 1.2rem;
    padding: 9px;
    border: 2px solid transparent;
    text-transform: uppercase;

    &:hover {
      transition: all 0.2s ease-in-out;
      border: 2px solid black;
    }
  }
`;
