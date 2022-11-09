import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;

}

button{
    border: none;
    outline: none;
    cursor: pointer;
}

a{
    text-decoration: none;
    color: inherit;
}

.error{
  color: red,
  
}

`;

export default GlobalStyles;
