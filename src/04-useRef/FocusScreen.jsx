import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        name="ingreso"
        placeholder="Ingrese su nombre"
        ref={inputRef}
      />
      <button className="btn btn-dark mt-2" onClick={handleClick}>
        Fijar foco
      </button>
    </>
  );
};
