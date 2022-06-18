import React from "react";
import { useFetch } from "../hooks/useFetch";
import { LoadingIcon } from "./LoadingIcon";
import { useCounter } from "../hooks/useCounter";
import { Quote } from "./Quote";
import { ErrorMessage } from "./ErrorMessage";

export const MultipleCustomHooks = () => {
  const [counter, handleAdd, handleSubtract] = useCounter(1, 1, 102);

  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote, series } = !!data && data[0];

  //console.log(author, quote, series);

  return (
    <div className="container">
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <LoadingIcon />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <Quote quote={quote} author={author} series={series} />
      )}
      <button className="btn btn-dark" onClick={handleSubtract}>Previous quote</button>
      <button className="btn btn-dark" onClick={handleAdd}>Next quote</button>
    </div>
  );
};
