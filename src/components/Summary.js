import React, { useContext } from "react";
import GlobalContext from "../state/globalState";

function Summary() {
  const {
    user: [{ name, surname }]
  } = useContext(GlobalContext);

  return (
    <div>
      <p>
        {name} {surname}
      </p>
    </div>
  );
}

export default Summary;
