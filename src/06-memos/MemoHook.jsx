import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const reventarProcesador = (loop = 1000) => {
    for(let i = 0; i < loop; i++) {
        console.log("Procesando...");
    }
    return `Procesado ${loop} veces`;
}

export const MemoHook = () => {
  const [show, setShow] = useState(false);
  const initialValue = 1000;
  const [counter, handleAdd] = useCounter(initialValue, 1, 10000);

  /**
   * useMemo: Este Hook nos permite memorizar un valor,
   * para que no se ejecute una función que no se necesita.
   * Por ejemplo, si no se necesita el valor de la función
   * reventarProcesador, no se ejecuta.
   */
  const memorizedValue = useMemo(() => reventarProcesador(counter), [counter]);

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h2>{memorizedValue}</h2>
      <h3>
        Counter: <small>{counter}</small>
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
