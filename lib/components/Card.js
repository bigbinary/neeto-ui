import React, { useState } from "react";
import classnames from "classnames";
import Button from "./Button";
import Collapse from "./Collapse";

const Card = ({ children, className = "", rows = null }) => {
  const [viewMore, setViewMore] = useState(false);
  const slidedChildren = children[1].slice ? children[1] : children.slice(1);
  const reactChildren = [children[0], slidedChildren];
  const shouldCollapse = rows || rows === 0;
  const renderChildren = () => {
    if (shouldCollapse) {
      const nonCollapsibleItems = reactChildren[1].slice(0, rows);
      const collapsibleItems = reactChildren[1].slice(rows);
      return (
        <>
          {/* Card title */}
          {children[0]}

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
    } else return children;
  };

  return (
    <div data-cy="card-container" className={classnames(["p-5 bg-white rounded-md shadow", className])}>
      {renderChildren()}
      {shouldCollapse && (
        <div className="flex flex-row items-center justify-start mt-5" data-cy="card-collapsible-container">
          <Button
            style="link"
            label={viewMore ? "View Less" : "View More"}
            onClick={() => setViewMore(!viewMore)}
            data-cy="card-collapse-button"
          />
        </div>
      )}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <div className="mb-5 text-xs font-bold tracking-wider text-gray-400 uppercase" data-cy="card-title">
      {children}
    </div>
  );
};

Card.Title = Title;

export default Card;
