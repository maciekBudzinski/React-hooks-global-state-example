import React, { useContext } from "react";
import GlobalContext from "../state/globalState";
import useFormInput from "../hooks/useFormInput";

const Form = () => {
  const {
    user: [{ name, surname }, { setName, setSurname }]
  } = useContext(GlobalContext);

  const nameInput = useFormInput(name);
  const surnameInput = useFormInput(surname);

  return (
    <div>
      <input {...nameInput} />
      <button onClick={() => setName(nameInput.value)}>update name</button>
      <input {...surnameInput} />
      <button onClick={() => setSurname(surnameInput.value)}>
        change surname
      </button>
    </div>
  );
};

export default Form;
