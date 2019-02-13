import React, { useContext } from "react";
import GlobalContext from "../state/globalState";
import useFormInput from "../hooks/useFormInput";

const TodoForm = () => {
  const {
    todo: [{ todos }, { addTodo }]
  } = useContext(GlobalContext);

  const todo = useFormInput("");

  return (
    <div>
      <input {...todo} />
      <button
        onClick={() => addTodo({ id: todos.length + 1, text: todo.value })}
      >
        Add todo
      </button>
    </div>
  );
};

export default TodoForm;
