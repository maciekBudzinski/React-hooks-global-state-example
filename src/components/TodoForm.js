import React, { useContext } from "react";
import GlobalContext from "../state/globalState";
import useFormInput from "../hooks/useFormInput";

const TodoForm = () => {
  const {
    todo: [{ todos }, { addTodo }]
  } = useContext(GlobalContext);

  const todo = useFormInput("");

  return (
    <>
      <h3 className="mt-4">Todos</h3>
      <div className="form-inline">
        <div className="form-group my-1">
          <input className="form-control mr-2" {...todo} />
          <input
            type="button"
            disabled={todo.value.length === 0}
            value="add todo"
            className="btn btn-primary"
            onClick={() => addTodo({ id: todos.length + 1, text: todo.value })}
          />
        </div>
      </div>
    </>
  );
};

export default TodoForm;
