import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Value } from "./Value";

export const Memorize = () => {
  const [show, setShow] = useState(false);
  const initialValue = 10;
  const [counter, handleAdd] = useCounter(initialValue);

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h3>
        Counter: <Value value={counter} />{" "}
      </h3>
      <button className="btn btn-dark" onClick={handleAdd}>
        +
      </button>
      <button className="btn btn-dark" onClick={() => setShow(!show)}>
        Show/hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
