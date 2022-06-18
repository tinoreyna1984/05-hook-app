import React, { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    //console.log({name, value})
  };

  // el arreglo de dependencias queda vacío para controlar el cambio de estado
  // en tal caso, se renderiza una sola vez
  useEffect(() => {
    console.log("useEffect");
  }, []);

  /* useEffect(() => {
    console.log("cambio en formState");
  }, [formState]); */

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInputChange}
        className="form-control"
        placeholder="Username"
      />
      <input
        type="text"
        value={email}
        name="email"
        onChange={handleInputChange}
        className="form-control"
        placeholder="Email"
      />
    </>
  );
};
