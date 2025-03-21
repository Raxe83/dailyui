import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomePage from "../sites/HomePage";
import Datenschutz from "../sites/Datenschutz";
import Contact from "../Components/Contact";
import { ScrollToSection } from "../Components/ScrollToSection";

const Routing = () => {
  return (
    <div lang="de" className="h-full">
      <div className={` flex flex-col min-h-full bg-gray-100`}>
        <BrowserRouter>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 mt-12">
            <ScrollToSection />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<Datenschutz />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Routing;
