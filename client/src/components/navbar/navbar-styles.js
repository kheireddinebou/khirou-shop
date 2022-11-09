import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 50px;
  ${md({
    padding: "10px",
  })}
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 50%;
  padding: 10px;
  border: 1px solid darkgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  ${md({
    display: "none",
  })}

  input {
    border: none;
    outline: none;
    width: 90%;
  }
`;

export const Logo = styled.div`
  flex: 1;
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Reight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  ${md({
    gap: "8px",
    flex: 4,
  })}

  a {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const Cart = styled.div`
  position: relative;
  font-size: 2rem;
`;
export const Badge = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4550b6;
  color: white;
  border-radius: 50%;
  font-size: 14px;
`;

export const UserName = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

//  for medium screens

export const SearchBtn = styled.button`
  display: none;
  background-color: transparent;
  font-size: 2rem;
  ${md({ display: "block" })}
`;

export const SearchInput = styled.div`
  ${md({ opacity: 1 })}
  opacity: 0;
  width: 92%;
  padding: 5px;
  font-size: 1.2rem;
  border: 1px solid darkgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: white;
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 5;

  button {
    font-size: 2rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    border: none;
    outline: none;
    width: 90%;
  }
`;
