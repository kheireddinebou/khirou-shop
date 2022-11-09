import { createContext, useEffect, useReducer } from "react";
import { userReducer } from "./UserReducer";

const INITIAL_STATE = {
  adminUser: JSON.parse(localStorage.getItem("adminUser")) || null,
  isFatching: false,
  error: null,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("adminUser", JSON.stringify(state.adminUser));
  }, [state]);

  return (
    <UserContext.Provider
      value={{
        adminUser: state.adminUser,
        isFatching: state.isFatching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
