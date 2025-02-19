import React from "react";

export const getLastWordsToRecolor = (text: string, wordsToRecolor?: number) => {
  const words = text.split(" ");
  if (words.length < 3) {
    return (
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text">
        {text}
      </span>
    );
  }
  const lastTwoWords = words.slice(-(wordsToRecolor ?? 2)).join(" ");
  const remainingText = words.slice(0, -(wordsToRecolor ?? 2)).join(" ");

  return (
    <span>
      {remainingText}{" "}
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text">
        {lastTwoWords}
      </span>
    </span>
  );
};

interface props {
  header: string;
  desc: string;
  buttons?: JSX.Element[];
  imgSrc: string;
  alt: string;
  imgPos: "left" | "right";
}
/**
 * HeroSection component
 * @param buttons - The buttons to be displayed
 * @param imgSrc - The image source | best size 600x600
 * @param alt - The alt text for the image
 * @param imgPos - The position of the image
 */
const HeroSection = ({ header, desc, buttons, imgSrc, alt, imgPos }: props) => {
  const img = require(`../assets/img/${imgSrc}`);

  const imgComponent = (
    <div
      className={`flex border justify-center shadow-xl rounded-3xl bg-gray-200/50`}
      style={{ width: 640, height: 545 }}
    >
      <img className="border rounded-3xl" src={img} alt={alt} />
    </div>
  );
  return (
    <div className="w-full py-12 px-24 bg-gray-50 text-black">
      <div className="flex flex-col items-center justify-center">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className={`${imgPos === "left" ? "hidden" : "block"}`}>
            {imgComponent}
          </div>
          <div className="w-3/6 flex flex-col justify-center ml-8 pr-2">
            <div className="font-bold text-4xl">
              {getLastWordsToRecolor(header, 3)}
            </div>
            <div className="font-semibold text-xl mt-4">{desc}</div>
            <div className="mt-8">{buttons}</div>
          </div>
          <div className={`${imgPos === "left" ? "block" : "hidden"}`}>
            {imgComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
