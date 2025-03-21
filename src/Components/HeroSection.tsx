import React from "react";

export const getLastWordsToRecolor = (
  text: string,
  wordsToRecolor: number = 2,
  wordsToHighlight?: string[]
) => {
  const words = text.split(" ");
  if (words.length < 3) {
    return (
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text">
        {text}
      </span>
    );
  }

  // Falls wordsToRecolor 0 ist, bleibt der gesamte Text unverändert
  const lastWordsCount = Math.max(0, wordsToRecolor);
  const lastWords = lastWordsCount > 0 ? words.slice(-lastWordsCount).join(" ") : "";
  const remainingWords = lastWordsCount > 0 ? words.slice(0, -lastWordsCount) : words;

  // Text mit hervorgehobenen Wörtern erstellen
  const highlightedText = remainingWords.map((word, index) => {
    if (wordsToHighlight?.includes(word)) {
      return (
        <span
          key={index}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text"
        >
          {word}{" "}
        </span>
      );
    }
    return <span key={index}>{word} </span>;
  });

  return (
    <span>
      {highlightedText}
      {lastWords && (
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text">
          {` ${lastWords}`}
        </span>
      )}
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
      className={`flex border w-[300px] lg:w-[600px] justify-center shadow-xl rounded-3xl`}
    >
      <img className="border rounded-3xl" src={img} alt={alt} />
    </div>
  );
  return (
    <div
      id="HeroSection"
      className="w-full py-12 px-0 lg:px-24  text-black"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className={`${imgPos === "left" ? "hidden" : "block"}`}>
            {imgComponent}
          </div>
          <div className="w-full  lg:w-3/6 flex flex-col justify-center ml-8 pr-12">
            <div className="font-bold text-2xl lg:text-4xl">
              {getLastWordsToRecolor(header, 3)}
            </div>
            <div className="font-semibold text-md lg:text-xl mt-4">{desc}</div>
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
