import styled from "styled-components";
import { md } from "../../responsive";

export const Container = styled.div`
  padding: 30px 10px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }

  ${md({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}
`;
