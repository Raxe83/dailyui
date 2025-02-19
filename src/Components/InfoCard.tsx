import React from "react";
import { getLastWordsToRecolor } from "./HeroSection";

interface cardProps {
  header: string;
  desc: string;
  icon: JSX.Element;
  alt?: string;
}
interface props {
  cardProp: cardProps[];
}

const InfoCard = ({ cardProp }: props) => {
  return (
    <div>
      <h1 className="font-bold text-4xl mx-auto text-center mt-16 justify-center">
      {getLastWordsToRecolor("Warum eine professionelle Webseite?", 1)}
      </h1>
      <div className="w-full space-x-4 py-12 px-24 mt-8 flex flex-row justify-around">
        {cardProp.map((card, index) => {
          return (
            <div
              key={index}
              className="flex cursor-default  bg-gray-50 flex-col min-w-80 items-center rounded-3xl justify-center py-2 px-8 shadow-md"
            >
              <div className={`relative -top-11 bg-gray-50 rounded-full p-2`}>
                {card.icon}
              </div>
              <div className="flex flex-col items-center relative -top-10">
                <div className="font-semibold text-xl">{card.header}</div>
                <div className="font-medium text-lg max-w-96 text-center text-gray-700 mt-4">
                  {card.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoCard;
