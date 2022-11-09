import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartContextProvider } from "./context/CartContext/CartContext";
import { UserContextProvider } from "./context/UserContext/UserContext";
import GlobalStyles from "./global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <CartContextProvider>
      <GlobalStyles />
      <App />
    </CartContextProvider>
  </UserContextProvider>
);
