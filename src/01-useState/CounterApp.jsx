import React from "react";
import { useState } from "react";

export const CounterApp = () => {
  const initialValue = 10;
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button className="btn btn-dark" onClick={handleAdd}>
        +1
      </button>
      <button className="btn btn-dark" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-dark" onClick={handleSubtract}>
        -1
      </button>
    </>
  );
};
