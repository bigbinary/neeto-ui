import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";

import Button from "components/Button";

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
  ...otherProps
}) => {
  const hasPrimaryButtonProps = !isEmpty(primaryButtonProps);
  const hasSecondaryButtonProps = !isEmpty(secondaryButtonProps);
  const hasButtonSeparatorText = !isEmpty(buttonSeparatorText);

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
        <h3 className="neeto-ui-no-data__title" data-cy="no-data-title">
          {title}
        </h3>
      )}
      {description && (
        <p
          className="neeto-ui-no-data__description"
          data-cy="no-data-description"
        >
          {description}
        </p>
      )}
      {helpText && (
        <p className="neeto-ui-no-data__help-text" data-cy="no-data-help-text">
          {helpText}
        </p>
      )}
      {(hasPrimaryButtonProps || hasSecondaryButtonProps) && (
        <div className="neeto-ui-no-data__action-block neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center">
          {hasPrimaryButtonProps && (
            <Button data-cy="no-data-primary-button" {...primaryButtonProps} />
          )}
          {showButtonSeparator && (
            <p className="neeto-ui-no-data__btn-separator">
              {buttonSeparatorText}
            </p>
          )}
          {hasSecondaryButtonProps && (
            <Button
              data-cy="no-data-secondary-button"
              style="secondary"
              {...secondaryButtonProps}
            />
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
  description: PropTypes.string,
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
   * To specify the text that appears between the primary and secondary buttons.
   * */
  buttonSeparatorText: PropTypes.string,
};

export default NoData;
