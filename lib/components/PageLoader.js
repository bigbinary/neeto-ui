import React from "react";
import { BeatLoader } from "react-spinners";

const PageLoader = ({ spinnerColor = "#252f3f" }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 flex flex-row items-center justify-center w-full h-full">
        <BeatLoader size={16} color={spinnerColor} />
      </div>
    </div>
  );
};

export default PageLoader;
