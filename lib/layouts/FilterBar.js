import React, { useEffect } from "react";
import classnames from "classnames";

const FilterBar = ({ children, showFilter, onClose }) => {
  useEffect(() => {
    if (!showFilter) {
      onClose && onClose();
    }
  }, [showFilter]);

  return (
    <div
      className={classnames(["nui-filterbar--wrapper"], {
        "nui-filterbar--hide": !showFilter
      })}
    >
      {showFilter && <div className="nui-filterbar--container">{children}</div>}
    </div>
  );
};

export default FilterBar;
