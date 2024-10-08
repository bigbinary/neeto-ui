import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import HelpContent from "./HelpContent";

import Button from "../Button";
import Tooltip from "../Tooltip";

const Label = ({
  children,
  className = "",
  required = false,
  helpIconProps = null,
  ...props
}) => (
  <label
    className={classnames(
      "neeto-ui-label neeto-ui-flex neeto-ui-items-center",
      className
    )}
    {...props}
  >
    {children}
    {required && <span aria-hidden>*</span>}
    {helpIconProps && <HelpContent {...{ helpIconProps }} />}
  </label>
);

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
    popoverProps: PropTypes.shape({
      title: PropTypes.node,
      description: PropTypes.node,
      helpLinkProps: PropTypes.shape({ ...Button.propTypes }),
    }),
    className: PropTypes.string,
  }),
};

export default Label;
