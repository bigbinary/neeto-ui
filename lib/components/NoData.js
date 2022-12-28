import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import Button from "./Button";
import Typography from "./Typography";
import { isEmpty } from "ramda";

const NO_DATA_IMAGE_URL = "https://d2v7kzglnr2dnh.cloudfront.net/others/no-data.svg";

const NoData = ({
  title = "",
  description = "",
  helpText = "",
  className = "",
  primaryButtonProps = {},
  secondaryButtonProps = {},
  ...otherProps
}) => {
  return (
    <div className={classnames("neeto-ui-no-data", [className])} data-cy="no-data-container" {...otherProps}>
      <img src={NO_DATA_IMAGE_URL} data-cy="no-data-image"/>
      {title &&
        <Typography
          style="h2"
          lineHeight="none"
          className="neeto-ui-text-center"
          data-cy="no-data-title"
        >
          {title}
        </Typography>
      }
      {description &&
        <Typography
          style="body1"
          lineHeight="normal"
          className="neeto-ui-text-gray-700 neeto-ui-text-center neeto-ui-mt-3"
          data-cy="no-data-description"
        >
          {description}
        </Typography>
      }
      {helpText &&
        <Typography style="body2" lineHeight="normal" className="neeto-ui-text-gray-800 neeto-ui-mt-2 neeto-ui-text-center" data-cy="no-data-help-text">{helpText}</Typography>
      }
      {(!isEmpty(primaryButtonProps) || !isEmpty(secondaryButtonProps)) &&
        <div className="neeto-ui-no-data__action-block neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-gap-2">
          {!isEmpty(primaryButtonProps) &&
            <Button
              data-cy="no-data-primary-button"
              {...primaryButtonProps}
            />
          }
          {!isEmpty(secondaryButtonProps) &&
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
  helpText: PropTypes.string,
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
};

export default NoData;
