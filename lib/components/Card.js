import React, { useState } from "react";
import classnames from "classnames";
import Button from "./Button";
import Collapse from "./Collapse";

const Card = ({ children, className = "", rows = null }) => {
  const [viewMore, setViewMore] = useState(false);
  const reactChildren = [children[0], children.slice(1)];
  const shouldCollapse = rows || rows === 0;

  const renderChildren = () => {
    if (shouldCollapse) {
      const nonCollapsibleItems = reactChildren[1].slice(0, rows);
      const collapsibleItems = reactChildren[1].slice(rows);
      return (
        <>
          {/* Card title */}
          {reactChildren[0]}

          {/* Pre loaded items */}
          {nonCollapsibleItems.map((child, index) => (
            <React.Fragment key={index}>{child}</React.Fragment>
          ))}

          {/* Items loaded on view more */}
          <Collapse open={viewMore}>
            {collapsibleItems.map((child, index) => (
              <React.Fragment key={index}>{child}</React.Fragment>
            ))}
          </Collapse>
        </>
      );
    } else return reactChildren;
  };

  return (
    <div className={classnames(["p-5 bg-white rounded-md shadow", className])}>
      {renderChildren()}
      {shouldCollapse && (
        <div className="flex flex-row items-center justify-start mt-5">
          <Button
            style="link"
            label={viewMore ? "View Less" : "View More"}
            onClick={() => setViewMore(!viewMore)}
          />
        </div>
      )}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <p className="mb-5 text-xs font-bold tracking-wider text-gray-400 uppercase">
      {children}
    </p>
  );
};

Card.Title = Title;

export default Card;
