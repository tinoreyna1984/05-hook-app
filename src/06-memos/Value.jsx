import React, { memo } from "react";

export const Value = memo(({ value }) => {
  console.log("Renderizado otra vez...");
  return <small>{value}</small>;
});
