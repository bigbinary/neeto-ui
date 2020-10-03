import React from "react";
import classnames from "classnames";

const Card = ({ children, className }) => {
  return (
    <div className={classnames(["p-5 bg-white rounded shadow", className])}>
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <p className="mb-3 text-xs font-bold text-gray-500 uppercase">{children}</p>
  );
};

Card.Title = Title;

export default Card;
