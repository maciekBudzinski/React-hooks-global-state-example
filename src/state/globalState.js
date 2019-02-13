import React, { createContext } from "react";
import useUserReducer from "../state/userReducer";
import useTodoReducer from "../state/todoReducer";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const store = {
    user: useUserReducer(),
    todo: useTodoReducer()
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
