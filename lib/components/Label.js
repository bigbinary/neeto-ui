import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Info } from "@bigbinary/neeto-icons";

import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

const Label = ({
  children,
  className = "",
  required = false,
  helpIconProps = null,
  ...otherProps
}) => {
  const { onClick, icon, href, to, tooltipProps, className: helpIconClassName, ...otherHelpIconProps } =
    helpIconProps || {};
  let Parent, elementSpecificProps;
  if (href) {
    Parent = "a";
    elementSpecificProps = { href };
  } else if (to) {
    Parent = Link;
    elementSpecificProps = { to };
  } else {
    Parent = "span";
  }
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
          <Parent {...elementSpecificProps}>
            <HelpIcon
              className={classnames("ml-1", {
                [helpIconClassName]: helpIconClassName,
              })}
              onClick={onClick}
              size={16}
              {...otherHelpIconProps}
            />
          </Parent>
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
    href: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.element,
    tooltipProps: PropTypes.shape({
      ...Tooltip.propTypes,
    })
  }),
};

export default Label;
