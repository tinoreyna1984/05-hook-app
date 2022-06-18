import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((count = 1) => {
    setCounter(value => value + count);
  }, []);

  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
