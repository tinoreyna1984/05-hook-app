import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { UserProvider } from './context/UserContext';

export const Main = () => {
  return (
    <UserProvider>
      <h1>Main</h1>
      <hr />
      <Navbar />
      <hr />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </UserProvider>
  );
};
