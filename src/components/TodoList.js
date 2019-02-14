import React, { useContext } from "react";
import GlobalContext from "../state/globalState";

const TodoList = () => {
  const {
    todo: [{ todos }, { removeTodo }]
  } = useContext(GlobalContext);

  return (
    <ol class="list-group">
      {todos.map(({ id, text }) => (
        <li
          className="list-item d-flex justify-content-between align-items-center my-1"
          key={id}
        >
          <span>{text}</span>
          <button
            onClick={() => removeTodo(id)}
            className="btn btn-danger btn-sm"
          >
            delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
