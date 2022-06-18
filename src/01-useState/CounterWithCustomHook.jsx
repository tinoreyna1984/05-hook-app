import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const initialValue = 10;
    const [counter, handleAdd, handleSubtract, handleReset] = useCounter(initialValue);
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
  )
}
