import styled from "styled-components";

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
  width: 450px;
  max-width: 95vw;
  position: relative;
  max-width: 75vw;

  b {
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
  }
`;
export const Title = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid gray;
  font-size: 1.1rem;
`;

export const LoginBtn = styled.button`
  padding: 14px;
  width: 220px;
  background-color: teal;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover {
    background-color: gray;
    color: black;
    transition: all 0.2s ease-in-out;
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
`;
