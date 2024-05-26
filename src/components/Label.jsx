import React, { useRef } from "react";

import classnames from "classnames";
import { Help } from "neetoicons";
import PropTypes from "prop-types";

import Popover from "./Popover";
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
    popoverProps,
    className: helpIconClassName,
    ...otherHelpIconProps
  } = helpIconProps || {};

  const HelpIcon = icon || Help;
  const popoverReferenceElement = useRef();

  const renderHelpIcon = () => (
    <span
      {...{ onClick }}
      ref={popoverProps ? popoverReferenceElement : undefined}
      className={classnames("neeto-ui-label__help-icon-wrap", {
        [helpIconClassName]: helpIconClassName,
      })}
    >
      <HelpIcon size={16} {...otherHelpIconProps} />
    </span>
  );

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
        <>
          {tooltipProps ? (
            <Tooltip {...tooltipProps}>{renderHelpIcon()}</Tooltip>
          ) : popoverProps ? (
            <>
              {renderHelpIcon()}
              <Popover reference={popoverReferenceElement} {...popoverProps} />
            </>
          ) : (
            renderHelpIcon()
          )}
        </>
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
    popoverProps: PropTypes.shape({ ...Popover.propTypes }),
    className: PropTypes.string,
  }),
};

export default Label;
