import React from "react";

import classnames from "classnames";
import { Help } from "neetoicons";
import PropTypes from "prop-types";

import "styles/common";
import "styles/components/_label";

import Tooltip from "./Tooltip";

const Label = ({
  children,
  className = "",
  required = false,
  helpIconProps = null,
  ...otherProps
}) => {
  const {
    onClick,
    icon,
    tooltipProps,
    className: helpIconClassName,
    ...otherHelpIconProps
  } = helpIconProps || {};

  const HelpIcon = icon || Help;

  return (
    <label
      className={classnames(
        "neeto-ui-label neeto-ui-flex neeto-ui-items-center",
        className
      )}
      {...otherProps}
    >
      {children}
      {required && <span aria-hidden>*</span>}
      {helpIconProps && (
        <Tooltip {...tooltipProps} disabled={!tooltipProps}>
          <span
            {...{ onClick }}
            className={classnames("neeto-ui-label__help-icon-wrap", {
              [helpIconClassName]: helpIconClassName,
            })}
          >
            <HelpIcon size={16} {...otherHelpIconProps} />
          </span>
        </Tooltip>
      )}
    </label>
  );
};

Label.propTypes = {
  /**
   * To specify the content to be rendered inside the Label.
   */
  children: PropTypes.node,
  /**
   * Provide external classnames to Label component.
   */
  className: PropTypes.string,
  /**
   * To specify whether to show the required asterisk.
   */
  required: PropTypes.bool,
  /**
   * Props for the help icon
   */
  helpIconProps: PropTypes.shape({
    onClick: PropTypes.func,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    tooltipProps: PropTypes.shape({ ...Tooltip.propTypes }),
  }),
};

export default Label;
