import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  width: 600px;
  max-width: 75vw;
  position: relative;
`;
export const Title = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 20px 10px;
  grid-template-columns: repeat(2, 1fr);
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid gray;
  font-size: 1.1rem;
  ${md({
    padding: "10px",
    width: "95%",
  })}
`;

export const CreateBtn = styled.button`
  padding: 14px;
  width: 220px;
  background-color: teal;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;

  &:hover {
    background-color: gray;
    color: black;
    transition: all 0.2s ease-in-out;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 50px;
  border-radius: 50%;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 2rem;
`;

export const ErrorText = styled.span`
  color: red;
  text-transform: capitalize;
  margin-top: -15px;
  height: fit-content;
`;
