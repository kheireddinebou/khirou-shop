import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  ${md({
    padding: "5px",
  })}
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 2rem;
  text-transform: capitalize;
  margin-bottom: 30px;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${md({
    gap: "5px",
  })}

  span {
    font-size: 1.5rem;
    font-weight: 600;
    ${md({
      fontSize: "1rem",
    })}
  }
`;

export const Select = styled.select`
  padding: 10px;
  cursor: pointer;
  ${md({
    padding: "3px",
  })}
`;
