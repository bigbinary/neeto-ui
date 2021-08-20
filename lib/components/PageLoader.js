import React from "react";
import { BeatLoader } from "react-spinners";

const PageLoader = ({ text = null, color = "#252f3f", ...otherProps }) => {
  return (
    <div className="nui-pageloader__wrapper" {...otherProps}>
      <div className="nui-pageloader">
        {text && <h2 className="nui-pageloader__text">{text}</h2>}
        <BeatLoader size={16} color={color} />
      </div>
    </div>
  );
};

export default PageLoader;
