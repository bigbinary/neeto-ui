import React from "react";
import classnames from "classnames";
import { Tooltip as BlueprintTooltip } from "@blueprintjs/core";

const Tooltip = ({
  children,
  className = "",
  size,
  ...otherProps
}) => {
  return (
    <BlueprintTooltip
      className={classnames([
        "flex flex-row items-center justify-center",
        className
      ])}
      targetClassName="flex flex-row justify-center items-center",
      popoverClassName={classnames({
        [`bp3-tooltip--${size}`]: size
      })}
      {...otherProps}
    >
      {children}
    </BlueprintTooltip>
  );
};

export default Tooltip;