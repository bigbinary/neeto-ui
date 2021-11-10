import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Info } from "@bigbinary/neeto-icons";

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
  const HelpIcon = icon || Info;
  return (
    <label
      className={classnames("neeto-ui-label flex items-center", className)}
      {...otherProps}
    >
      {children}
      {required && <span aria-hidden>*</span>}
      {helpIconProps && (
        <Tooltip {...tooltipProps} disabled={!tooltipProps}>
          <span
            className={classnames("ml-1", {
              [helpIconClassName]: helpIconClassName,
            })}
            onClick={onClick}
          >
            <HelpIcon size={16} {...otherHelpIconProps} />
          </span>
        </Tooltip>
      )}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  /**
   * Props for the help icon
   */
  helpIconProps: PropTypes.shape({
    onClick: PropTypes.func,
    icon: PropTypes.element,
    tooltipProps: PropTypes.shape({
      ...Tooltip.propTypes,
    }),
  }),
};

export default Label;
