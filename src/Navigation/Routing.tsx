import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomePage from "../sites/HomePage";
import Datenschutz from "../sites/Datenschutz";

const Routing = () => {
  return (
    <div lang="de" className="h-full">
      <div className={` flex flex-col min-h-full bg-gray-100`}>
        <BrowserRouter>
          <Header />
          <main className="flex-grow mt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Privacy" element={<Datenschutz />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Routing;
