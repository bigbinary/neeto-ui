import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNil } from "ramda";

import Tooltip from "components/Tooltip";

// import { COLOR_PALLETE, AVATAR_VARIANT } from "./constants";

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

const COLOR_PALLETE = ["#ffb5a7", "#fcd5ce", "#f8edeb", "#f9dcc4", "#fec89a"];

const AVATAR_VARIANT = "beam";

const Avatar = ({
  size = "medium",
  user = {},
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
    hidden: isLoadingFailed,
  });

  const statusClasses = classNames("neeto-ui-avatar__status", `${status}`, {
    "neeto-ui-avatar__status-medium": isMedium,
    "neeto-ui-avatar__status-large": isLarge,
    "neeto-ui-avatar__status-xlarge": isExtraLarge,
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
          className
        )}
        {...otherProps}
      >
        <Indicator />
        {shouldDisplayFallbackAvatar ? (
          <FallbackAvatar
            size={SIZE[size]}
            name={name}
            variant={AVATAR_VARIANT}
            colors={COLOR_PALLETE}
            className="neeto-ui-avatar__svg"
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
