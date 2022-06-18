import React, { useLayoutEffect, useRef } from "react";

export const Quote = ({ quote, author, series }) => {

  const pRef = useRef();

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    //console.log({height, width})
    alert(`The quote is ${height}px tall and ${width}px wide`);
  }, [quote]);

  return (
    <>
      <figure>
        <blockquote className="blockquote">
          <p ref={pRef}>{quote}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {author} in <cite title="Source Title">{series}</cite>
        </figcaption>
      </figure>
    </>
  );
};
