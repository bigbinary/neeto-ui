import React from "react";
import { BeatLoader } from "react-spinners";

const PageLoader = ({ color = "#252f3f", ...otherProps }) => {
  return (
    <div className="relative w-full h-full" data-test-id="nitrohelp-page-loader" {...otherProps}>
      <div className="absolute top-0 left-0 flex flex-row items-center justify-center w-full h-full">
        <BeatLoader size={16} color={color} />
      </div>
    </div>
  );
};

export default PageLoader;
