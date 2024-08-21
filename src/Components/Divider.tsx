import React from "react";

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-4 text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Divider;
