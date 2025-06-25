import React, { forwardRef } from "react";

import classNames from "classnames";
import { Help } from "neetoicons";

const HelpIcon = forwardRef(
  ({ onClick, className, icon, ...otherProps }, ref) => {
    const HelpIcon = icon || Help;

    return (
      <span
        {...{ onClick, ref }}
        className={classNames("neeto-ui-label__help-icon-wrap", {
          [className]: className,
        })}
      >
        <HelpIcon size={16} {...otherProps} />
      </span>
    );
  }
);

HelpIcon.displayName = "HelpIcon";

export default HelpIcon;
