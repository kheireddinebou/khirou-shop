import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  display: flex;
  padding: 30px;
  padding-left: 40px;
  justify-content: space-between;
  gap: 20px;
  ${md({
    flexDirection: "column",
  })}
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  span {
    font-weight: 700;
    font-size: 2.4rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  span {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7px;
    padding: 0;

    li {
      text-transform: capitalize;
      list-style: none;
      font-size: 1.1rem;
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const Payment = styled.img`
  width: 60%;
`;
