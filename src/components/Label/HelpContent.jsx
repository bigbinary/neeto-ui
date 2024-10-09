import React, { useRef } from "react";

import HelpIcon from "./HelpIcon";

import Button from "../Button";
import Popover from "../Popover";
import Tooltip from "../Tooltip";
import Typography from "../Typography";

const HelpContent = ({ helpIconProps }) => {
  const popoverReferenceElement = useRef();

  const { tooltipProps, popoverProps, ...otherHelpIconProps } =
    helpIconProps || {};

  if (tooltipProps) {
    return (
      <Tooltip {...tooltipProps}>
        <HelpIcon {...otherHelpIconProps} />
      </Tooltip>
    );
  }

  if (popoverProps) {
    const { title, description, helpLinkProps, ...otherPopoverProps } =
      popoverProps;

    return (
      <>
        <HelpIcon {...otherHelpIconProps} ref={popoverReferenceElement} />
        <Popover reference={popoverReferenceElement} {...otherPopoverProps}>
          <div className="flex flex-col">
            {title && (
              <Popover.Title
                data-cy="help-popover-title"
                data-testid="help-popover-title"
              >
                {title}
              </Popover.Title>
            )}
            {typeof description === "string" ? (
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
    );
  }

  return <HelpIcon {...otherHelpIconProps} />;
};

export default HelpContent;
