import React from "react";
import { BeatLoader } from "react-spinners";

const PageLoader = ({ text = null, color = "#252f3f", ...otherProps }) => {
  return (
    <div className="relative w-full h-full" {...otherProps}>
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
        {text && <h2 className="mb-4 text-xl text-center text-gray-800">{text}</h2>}
        <BeatLoader size={16} color={color} />
      </div>
    </div>
  );
};

export default PageLoader;
