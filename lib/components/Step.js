import React from "react";
import classnames from "classnames";

const Step = ({ isActive, ...props }) => {
  return (
    <div className="relative flex items-center justify-center mx-2" {...props}>
      {isActive && (
        <span className="absolute flex w-5 h-5 p-px">
          <span className="w-full h-full bg-purple-200 rounded-full"></span>
        </span>
      )}
      <span
        className={classnames(
          [
            "relative block w-2.5 h-2.5 bg-gray-400 hover:bg-purple-500 rounded-full cursor-pointer transition ease-in-out duration-150"
          ],
          { "bg-purple-500": isActive }
        )}
      ></span>
    </div>
  );
};

export default Step;
