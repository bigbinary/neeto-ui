import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import Button from "./Button";
import Typography from "./Typography";
import { isEmpty } from "ramda";

const NO_DATA_IMAGE_URL = "https://d2v7kzglnr2dnh.cloudfront.net/others/no-data.svg";

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
  const showButtonSeparator = buttonSeparatorText && hasPrimaryButtonProps && hasSecondaryButtonProps;

  const renderImage = () => {
    if (image) {
      return typeof image == "string"
        ? <img src={image} data-cy="no-data-image" />
        : image || React.Fragment;
    }
    return (
      <img src={NO_DATA_IMAGE_URL} data-cy="no-data-image" />
    );
  };

  return (
    <div className={classnames("neeto-ui-no-data", [className])} data-cy="no-data-container" {...otherProps}>
      <div className="neeto-ui-no-data__image">
        {renderImage()}
      </div>
      {title &&
        <Typography
          style="h3"
          lineHeight="none"
          className="neeto-ui-text-center"
          data-cy="no-data-title"
        >
          {title}
        </Typography>
      }
      {description &&
        <Typography
          style="body2"
          lineHeight="normal"
          className="neeto-ui-text-center neeto-ui-mt-2"
          data-cy="no-data-description"
        >
          {description}
        </Typography>
      }
      {helpText &&
        <Typography style="body2" lineHeight="normal" className="neeto-ui-mt-2 neeto-ui-text-center" data-cy="no-data-help-text">{helpText}</Typography>
      }
      {(hasPrimaryButtonProps || hasSecondaryButtonProps) &&
        <div className="neeto-ui-no-data__action-block neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-gap-2">
          {hasPrimaryButtonProps &&
            <Button
              data-cy="no-data-primary-button"
              {...primaryButtonProps}
            />
          }
          {showButtonSeparator && <Typography style="body2" lineHeight="normal">{buttonSeparatorText}</Typography>}
          {hasSecondaryButtonProps &&
            <Button
              style="secondary"
              data-cy="no-data-secondary-button"
              {...secondaryButtonProps}
            />
          }
        </div>
      }
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
  /** To specify the text that appears between the primary and secondary buttons. */
  buttonSeparatorText: PropTypes.string,
};

export default NoData;
