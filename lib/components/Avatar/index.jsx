import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNil } from "ramda";

import Tooltip from "components/Tooltip";

import { COLOR_PALLETE, AVATAR_VARIANT } from "./constants";

import FallbackAvatar from "boring-avatars";

const SIZE = {
  small: 24,
  medium: 32,
  large: 40,
  extraLarge: 64,
};

const STATUS = {
  online: "online",
  idle: "idle",
  offline: "offline",
};

const Avatar = ({
  size = "medium",
  user = {},
  isSquare = false,
  status = null,
  onClick = () => {},
  className = "",
  showTooltip = false,
  tooltipProps = {},
  ...otherProps
}) => {
  const [isLoadingFailed, setIsLoadingFailed] = useState(false);

  const { name = "", imageUrl } = user;

  const isMedium = size === "medium";
  const isLarge = size === "large";
  const isExtraLarge = size === "extraLarge";

  const imageContainerStyle = {
    height: SIZE[size],
    width: SIZE[size],
  };

  const imageClasses = classNames("neeto-ui-avatar ", {
    "neeto-ui-avatar--medium": isMedium,
    "neeto-ui-avatar--large": isLarge,
    "neeto-ui-avatar--xlarge": isExtraLarge,
    "neeto-ui-avatar--round": !isSquare,
    hidden: isLoadingFailed,
  });

  const statusClasses = classNames("neeto-ui-avatar__status", `${status}`, {
    "neeto-ui-avatar__status-medium": isMedium,
    "neeto-ui-avatar__status-large": isLarge,
    "neeto-ui-avatar__status-xlarge": isExtraLarge,
    "neeto-ui-avatar__status-square": isSquare,
  });

  const Indicator = () =>
    isNil(status) ? (
      React.Fragment
    ) : (
      <span className={statusClasses} data-testid="indicator" />
    );

  const avatarString = name.replace("", "-");
  const shouldDisplayFallbackAvatar = !(imageUrl && !isLoadingFailed);

  return (
    <Tooltip
      disabled={!showTooltip}
      content={name}
      position="bottom"
      {...tooltipProps}
    >
      <span
        onClick={onClick}
        style={imageContainerStyle}
        className={classNames(
          "neeto-ui-avatar--container neeto-ui-select-none",
          {
            "neeto-ui-avatar--container-round": !isSquare,
          },
          className
        )}
        {...otherProps}
      >
        <Indicator />
        {shouldDisplayFallbackAvatar ? (
          <FallbackAvatar
            size={SIZE[size]}
            name={name}
            square={isSquare}
            variant={AVATAR_VARIANT}
            colors={COLOR_PALLETE}
          />
        ) : (
          <img
            className={imageClasses}
            onError={() => setIsLoadingFailed(true)}
            src={imageUrl}
            alt={`avatar-${avatarString}`}
            data-chromatic="ignore"
          />
        )}
      </span>
    </Tooltip>
  );
};

Avatar.propTypes = {
  /**
   * Specify the dimension for Avatar component.
   */
  size: PropTypes.oneOf(Object.keys(SIZE)),
  user: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
  }),
  /**
   * To display the Avatar as a square.
   */
  isSquare: PropTypes.bool,
  /**
   * To specify the action to be triggered on clicking the Avatar.
   */
  onClick: PropTypes.func,
  /**
   * To specify the status of the user if needed in Avatar component.
   */
  status: PropTypes.oneOf(Object.keys(STATUS)),
  /**
   * To display a tooltip with name of the user.
   */
  showTooltip: PropTypes.bool,
  /**
   * To specify the props to be passed to the tooltip.
   */
  tooltipProps: PropTypes.object,
  /**
   * To provide external classnames to Avatar component.
   */
  className: PropTypes.string,
};

export default Avatar;
