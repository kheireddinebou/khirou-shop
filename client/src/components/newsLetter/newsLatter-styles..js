import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  background-color: #fdf5f6;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 4rem;
  font-weight: 800;
`;

export const SubTitle = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 40px;
  border: 1px solid gray;
  ${md({
    width: "90%",
  })}

  input {
    width: 90%;
    outline: none;
    height: 100%;
    border: none;
  }

  button {
    background-color: teal;
    color: white;
    font-size: 2rem;
    height: 100%;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #033b3b;
      transition: all 0.2s ease-out;
    }
  }
`;
