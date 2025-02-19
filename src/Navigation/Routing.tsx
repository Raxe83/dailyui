import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import About from "../About";

const Routing = () => {
  return (
    <div lang="de" className="h-full">
      <div className={` flex flex-col min-h-full bg-gray-100`}>
        <BrowserRouter>
          <Header />
          <main className="flex-grow mt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Service" element={<About />} />
              <Route path="/Reviews" element={<About />} />
              <Route path="/Contact" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Routing;
