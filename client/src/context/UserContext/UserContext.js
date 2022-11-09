import { createContext, useEffect, useReducer } from "react";
import { userReducer } from "./UserReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  isFatching: false,
  error: null,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
  }, [state]);

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        isFatching: state.isFatching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
