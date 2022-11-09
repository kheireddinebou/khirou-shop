import { css } from "styled-components";

export const md = props => {
  return css`
    @media screen and (max-width: 768px) {
      ${props}
    }
  `;
};
