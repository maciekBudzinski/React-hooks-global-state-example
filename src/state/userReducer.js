import { useReducer } from "react";

const useUserReducer = () => {
  const initialState = { name: "Maciej", surname: "Budzinski" };

  const SET_NAME = "SET_NAME";
  const SET_SURNAME = "SET_SURNAME";

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_NAME:
        return { ...state, name: action.payload };
      case SET_SURNAME:
        return { ...state, surname: action.payload };
      default:
        return state;
    }
  }, initialState);

  const setName = name => dispatch({ type: SET_NAME, payload: name });
  const setSurname = surname =>
    dispatch({ type: SET_SURNAME, payload: surname });

  const actions = {
    setName,
    setSurname
  };

  return [state, actions];
};

export default useUserReducer;
