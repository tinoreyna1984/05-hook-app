import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { values, handleInputChange, reset, username, email, password } =
    useForm({ username: "", email: "", password: "" });

  useEffect(() => {
    console.log("useEffect");
    console.log(values);
  }, []);

  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInputChange}
        className="form-control"
        placeholder="Username"
        autoComplete="off"
      />
      <input
        type="text"
        value={email}
        name="email"
        onChange={handleInputChange}
        className="form-control"
        placeholder="Email"
        autoComplete="off"
      />
      <input
        type="text"
        value={password}
        name="password"
        onChange={handleInputChange}
        className="form-control"
        placeholder="Password"
        autoComplete="off"
      />
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
    </>
  );
};
