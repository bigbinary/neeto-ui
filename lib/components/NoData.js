import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import Button from "./Button";
import Typography from "./Typography";

const NoData = ({ title, description, helpText, primaryButtonProps, secondaryButtonProps, className = "", ...otherProps }) => {
  return (
    <div className={classnames("neeto-ui-no-data", [className])} data-cy="no-data-container" {...otherProps}>
      <img src="https://d2v7kzglnr2dnh.cloudfront.net/others/no-data.svg" data-cy="no-data-image"/>
      <Typography style="h1" lineHeight="none" className="neeto-ui-mb-3 neeto-ui-text-center" data-cy="no-data-title">{title}</Typography>
      <Typography style="body1" lineHeight="normal" className="neeto-ui-text-gray-700 neeto-ui-text-center" data-cy="no-data-description">{description}</Typography>
      {helpText &&
        <Typography style="body2" lineHeight="normal" className="neeto-ui-text-gray-800 neeto-ui-mt-2 neeto-ui-text-center" data-cy="no-data-help-text">{helpText}</Typography>
      }
      {(primaryButtonProps || secondaryButtonProps) &&
        <div className="neeto-ui-no-data__action-block neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-gap-2">
          {primaryButtonProps &&
            <Button
              data-cy="no-data-primary-button"
              {...primaryButtonProps}
            />
          }
          {secondaryButtonProps &&
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
   * To specify the props to be passed to the primary button.
   */
  primaryButtonProps: PropTypes.object,
  /**
   * To specify the props to be passed to the secondary button.
   */
  secondaryButtonProps: PropTypes.object,
  /**
   * Provide external classnames to NoData component.
   */
  className: PropTypes.string,
};

export default NoData;
