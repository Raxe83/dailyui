import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Sign Up/Login";
import Register from "../Sign Up/Register";
import { NavItem } from "./NavItem";

const Routing = () => {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <nav>
          <ul className="flex-row flex py-2 px-8">
            <NavItem location={"Login"} locationTitle={"Login"} />
            <NavItem location={"Register"} locationTitle={"Register"} />
          </ul>
        </nav>

        <main
          className={`flex-1 overflow-auto transition-all border dark:border-darkmode-200 duration-300 ease-in-out `}
        >
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
