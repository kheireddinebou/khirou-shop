import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.8s ease-in-out;
  transform: translateX(${props => props.sliderIndex * -100}vw);
`;

export const Slide = styled.div`
  min-width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

export const Img = styled.img`
  height: 100%;
  width: 50%;
  object-fit: contain;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  ${md({
    gap: "0",
  })}

  span {
    font-size: 3.6rem;
    font-weight: 800;
    ${md({
    fontSize: "2rem",
  })}
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    ${md({
    fontSize: "1.2rem",
  })}
  }
`;

export const ShowNowBtn = styled.button`
  background-color: transparent;
  border: 1.5px solid black;
  font-size: 2rem;
  width: fit-content;
  text-transform: capitalize;
  padding: 10px;

  &:hover {
    border: 1.5px solid transparent;
    transition: all 0.2s ease-in-out;
  }
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  font-size: 7rem;
  color: gray;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: lightgray;
  }
`;
