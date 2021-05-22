import React from "react";
import classnames from "classnames";
import { Tooltip as BlueprintTooltip } from "@blueprintjs/core";

const Tooltip = ({
  size,
  theme = "dark",
  minimal = false,
  children,
  className = "",
  ...otherProps
}) => {
  return (
    <BlueprintTooltip
      className={classnames([
        "flex flex-row items-center justify-center",
        className
      ])}
      targetClassName="flex flex-row justify-center items-center"
      popoverClassName={classnames(
        [`bp3-tooltip bp3-tooltip--${theme}`],
        {
          [`bp3-tooltip--${size}`]: size
        }
      )}
      openOnTargetFocus={false}
      minimal={minimal}
      modifiers={{
        offset: {
          enabled: minimal,
          offset: "0, 8"
        }
      }}
      {...otherProps}
    >
      {children}
    </BlueprintTooltip>
  );
};

export default Tooltip;