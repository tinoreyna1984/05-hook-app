import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const Login = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre> {JSON.stringify(user, null, 3)} </pre>
      <button className="btn btn-dark"
        onClick={() =>
          setUser({ id: 123, name: "Tino", email: "tino@gmail.com" })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
