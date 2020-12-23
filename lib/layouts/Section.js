import React from "react";

import classnames from "classnames";

const Section = ({ className, children, noBorder }) => {
  return (
    <div
      className={classnames(["py-8 border-gray-200", className], {
        "border-b": !noBorder
      })}
    >
      {children}
    </div>
  );
};
const Title = ({ className, children }) => (
  <h4
    className={classnames([
      "mb-1 text-base font-semibold text-gray-700",
      className
    ])}
  >
    {children}
  </h4>
);
const Description = ({ className, children }) => (
  <p
    className={classnames([
      "mb-6 text-sm leading-relaxed text-gray-500",
      className
    ])}
  >
    {children}
  </p>
);
Section.Title = Title;
Section.Description = Description;
export default Section;
