import React, { useContext } from "react";
import GlobalContext from "../state/globalState";

const Header = () => {
  const {
    user: [{ name }, {}],
    todo: [{ todos }, {}]
  } = useContext(GlobalContext);

  return (
    <nav>
      <p>{name}</p>
      <span>{todos.length}</span>
    </nav>
  );
};

export default Header;
