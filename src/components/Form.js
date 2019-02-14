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
    <>
      <h3 className="mb-2">User info</h3>
      <div class="form-inline">
        <div className="form-group">
          <input className="form-control mr-2" {...nameInput} />
          <input
            type="button"
            value="update name"
            className="btn btn-primary"
            onClick={() => setName(nameInput.value)}
          />
        </div>
        <div className="form-group my-1">
          <input className="form-control mr-2" {...surnameInput} />
          <input
            type="button"
            value="update surname"
            className="btn btn-primary"
            onClick={() => setSurname(surnameInput.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
