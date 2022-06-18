import React from "react";

export const ShowIncrement = React.memo( ({ increment }) => {
  console.log("Incrementando nuevamente...");
  return (
    <button className="btn btn-dark" onClick={() => increment()}>
      Incrementar
    </button>
  );
} );
