import React, { useContext } from "react";
import GlobalContext from "../state/globalState";

const Header = () => {
  const {
    user: [{ name, surname }, {}],
    todo: [{ todos }, {}]
  } = useContext(GlobalContext);

  return (
    <div class="nav">
      <p className="mr-3">
        {name} {surname}
      </p>
      <span>You have {todos.length} todos</span>
    </div>
  );
};

export default Header;
