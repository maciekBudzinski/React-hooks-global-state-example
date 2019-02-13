import React, { useContext } from "react";
import GlobalContext from "../state/globalState";

const TodoList = () => {
  const {
    todo: [{ todos }, { removeTodo }]
  } = useContext(GlobalContext);

  return (
    <ol>
      {todos.map(({ id, text }) => (
        <li key={id} onClick={() => removeTodo(id)}>
          {text}
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
