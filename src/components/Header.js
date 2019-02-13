import React, { useContext } from "react";
import GlobalContext from "../state/globalState";

const Header = () => {
  const {
    user: [{ name }, {}]
  } = useContext(GlobalContext);

  return (
    <nav>
      <p>{name}</p>
    </nav>
  );
};

export default Header;
