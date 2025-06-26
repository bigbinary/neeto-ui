import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { isEmpty, isNil, omit } from "ramda";

import Button from "components/Button";
import { HelpContent } from "components/commons";
import Tooltip from "components/Tooltip";
import Typography from "components/Typography";

import { renderImage } from "./utils";

const NoData = ({
  image = null,
  title = "",
  description = "",
  helpText = null,
  className = "",
  primaryButtonProps = {},
  secondaryButtonProps = {},
  buttonSeparatorText = "",
  showTooltipWhenButtonDisabled = false,
  helpIconProps = {},
  ...otherProps
}) => {
  const hasPrimaryButtonProps = !isEmpty(primaryButtonProps);
  const hasSecondaryButtonProps = !isEmpty(secondaryButtonProps);
  const hasButtonSeparatorText = !isEmpty(buttonSeparatorText);
  const hasHelpIconProps = !isEmpty(helpIconProps);

  const showButtonSeparator =
    hasButtonSeparatorText && hasPrimaryButtonProps && hasSecondaryButtonProps;

  return (
    <div
      className={classnames("neeto-ui-no-data", [className])}
      data-cy="no-data-container"
      {...otherProps}
    >
      {image ? (
        <div className="neeto-ui-no-data__image">{renderImage(image)}</div>
      ) : null}
      {title && (
        <Typography
          className="neeto-ui-text-center"
          data-cy="no-data-title"
          lineHeight="none"
          style="h3"
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          className="neeto-ui-text-center neeto-ui-no-data__description"
          data-cy="no-data-description"
          lineHeight="normal"
          style="body2"
        >
          {description}
        </Typography>
      )}
      {helpText && (
        <Typography
          className="neeto-ui-text-center neeto-ui-no-data__help-text"
          data-cy="no-data-help-text"
          lineHeight="normal"
          style="body2"
        >
          {helpText}
        </Typography>
      )}
      {(hasPrimaryButtonProps || hasSecondaryButtonProps) && (
        <div className="neeto-ui-no-data__action-block">
          {hasPrimaryButtonProps && (
            <Tooltip
              {...primaryButtonProps?.tooltipProps}
              disabled={
                isNil(primaryButtonProps?.tooltipProps) ||
                (!showTooltipWhenButtonDisabled && primaryButtonProps?.disabled)
              }
            >
              <div className="flex items-center gap-1">
                <Button
                  data-cy="no-data-primary-button"
                  data-testid="no-data-primary-button"
                  {...omit(["tooltipProps"], primaryButtonProps)}
                />
                {hasHelpIconProps && <HelpContent {...{ helpIconProps }} />}
              </div>
            </Tooltip>
          )}
          {showButtonSeparator && (
            <Typography lineHeight="normal" style="body2">
              {buttonSeparatorText}
            </Typography>
          )}
          {hasSecondaryButtonProps && (
            <Tooltip
              {...secondaryButtonProps?.tooltipProps}
              disabled={
                isNil(secondaryButtonProps?.tooltipProps) ||
                (!showTooltipWhenButtonDisabled &&
                  secondaryButtonProps?.disabled)
              }
            >
              <div>
                <Button
                  data-cy="no-data-secondary-button"
                  data-testid="no-data-secondary-button"
                  style="secondary"
                  {...omit(["tooltipProps"], secondaryButtonProps)}
                />
              </div>
            </Tooltip>
          )}
        </div>
      )}
    </div>
  );
};

NoData.propTypes = {
  /**
   * To specify the image.
   */
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * To specify the title text.
   */
  title: PropTypes.string,
  /**
   * To specify the description text.
   */
  description: PropTypes.node,
  /**
   * To specify the text that appears below the description.
   */
  helpText: PropTypes.node,
  /**
   * Provide external classnames to NoData component.
   */
  className: PropTypes.string,
  /**
   * To specify the props to be passed to the primary button.
   */
  primaryButtonProps: PropTypes.object,
  /**
   * To specify the props to be passed to the secondary button.
   */
  secondaryButtonProps: PropTypes.object,
  /**
   * To specify if the tooltip should be shown when the button is disabled.
   */
  showTooltipWhenButtonDisabled: PropTypes.bool,
  /**
   * To specify the text that appears between the primary and secondary buttons.
   * */
  buttonSeparatorText: PropTypes.string,
  /**
   * To specify the props to be passed to the help popover for the disabled button.
   */
  helpIconProps: PropTypes.object,
};

export default NoData;
