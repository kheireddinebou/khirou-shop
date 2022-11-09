import styled from "styled-components";
import { md } from "../../responsive";

export const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;

export const ProductContainer = styled.div`
  background-color: #eef3f5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 550px;
  cursor: pointer;
  &:hover ${Info} {
    opacity: 1;
  }

  ${md({
    height: "300px",
  })}
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  height: 400px;
  width: 95%;
  object-fit: contain;
`;

export const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 200px;
  width: 200px;
`;

export const Icon = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  &:hover {
    background-color: transparent;
    transition: all 0.5s ease-in-out;
  }
`;
