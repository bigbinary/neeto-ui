import React, { useRef } from "react";

import classnames from "classnames";
import { isNotPresent } from "neetocist";
import { Help } from "neetoicons";
import PropTypes from "prop-types";

import Button from "./Button";
import Popover from "./Popover";
import Tooltip from "./Tooltip";
import Typography from "./Typography";

const { Title } = Popover;

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

  const { title, description, helpLinkProps } = popoverProps || {};

  const HelpIcon = icon || Help;
  const popoverReferenceElement = useRef();

  const isCompact = isNotPresent(title) && isNotPresent(helpLinkProps);

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
              <Popover reference={popoverReferenceElement}>
                <div className="flex flex-col">
                  {title && (
                    <Title
                      data-cy="help-popover-title"
                      data-testid="help-popover-title"
                    >
                      {title}
                    </Title>
                  )}
                  {typeof description === "string" && !isCompact ? (
                    <Typography
                      data-cy="help-popover-description"
                      data-testid="help-popover-description"
                      lineHeight="normal"
                      style="body2"
                      weight="normal"
                    >
                      {description}
                    </Typography>
                  ) : (
                    description
                  )}
                  {helpLinkProps && (
                    <Button
                      className="neeto-ui-mt-3"
                      data-cy="help-popover-link-button"
                      size="small"
                      {...helpLinkProps}
                      data-testid="help-popover-link-button"
                      style="link"
                      target="_blank"
                    />
                  )}
                </div>
              </Popover>
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
    popoverProps: PropTypes.shape({
      title: PropTypes.node,
      description: PropTypes.node,
      helpLinkProps: PropTypes.shape({ ...Button.propTypes }),
    }),
    className: PropTypes.string,
  }),
};

export default Label;
