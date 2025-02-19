import React from "react";

interface mapItem {
  title: string;
  desc: string;
  icon: JSX.Element;
  date: string;
}

interface RoadmapType {
  title: string;
  desc: string;
  mapItems: mapItem[];
}

const Roadmap = ({ title, desc, mapItems }: RoadmapType) => {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-32">
      <h1 className="font-bold text-3xl">{title}</h1>
      <h3 className="font-semibold text-xl text-gray-600">{desc}</h3>
      <div className="mt-8">
        {mapItems.map((item, index) => {
          return (
            <div className="flex flex-row mt-4">
              <div className="my-auto mr-4">{item.icon}</div>
              <div className="flex flex-col">
                <h1 className="font-semibold">{item.title}</h1>
                <h2 className="font-semibold text-gray-600">{item.desc}</h2>
                <h4 className="text-gray-600 text-sm">{item.date}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
