import React from "react";
import KontaktFormularPrivacy from "../Components/privacy/KontaktFormularPrivacy";
import LucideLicense from "../Components/privacy/LucideLicense";

const Datenschutz = () => {
  return (
    <div className="container mx-auto px-4 my-8 content-center flex flex-col items-center justify-center  mb-36">
      <div className="font-semibold text-md mt-4 mb-8">
        <KontaktFormularPrivacy />
        <h1 className="text-3xl font-bold text-center mb-6">Lizenzen</h1>
        <LucideLicense />
      </div>
    </div>
  );
};

export default Datenschutz;
