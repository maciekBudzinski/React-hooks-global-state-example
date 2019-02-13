import { useReducer } from "react";

const useTodoReducer = () => {
  const initialState = { todos: [{ id: 0, text: "Make up the room" }] };

  const ADD_TODO = "ADD_TODO";
  const REMOVE_TODO = "REMOVE_TODO";

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { ...state, todos: action.payload };
      case REMOVE_TODO:
        return { ...state, todos: action.payload };
      default:
        return state;
    }
  }, initialState);

  const addTodo = todo => {
    const { todos } = state;
    dispatch({ type: ADD_TODO, payload: [...todos, todo] });
  };
  const removeTodo = todoId => {
    const { todos } = state;
    dispatch({
      type: REMOVE_TODO,
      payload: todos.filter(({ id }) => id !== todoId)
    });
  };
  const actions = {
    addTodo,
    removeTodo
  };

  return [state, actions];
};

export default useTodoReducer;
