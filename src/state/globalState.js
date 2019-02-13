import React, { createContext } from "react";
import useUserReducer from "../state/userReducer";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const store = {
    user: useUserReducer()
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
