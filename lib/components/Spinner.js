import React from "react";
import classnames from "classnames";

const Spinner = ({ className, size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(["animate-spin", className])}
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill={color || "#5469D4"}
        d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"
      />
    </svg>
  );
};

export default Spinner;
