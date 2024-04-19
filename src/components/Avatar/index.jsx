import React, { useState } from "react";

import FallbackAvatar from "boring-avatars";
import classNames from "classnames";
import PropTypes from "prop-types";
import { isNil } from "ramda";

import Tooltip from "components/Tooltip";
import "styles/common";
import "styles/components/_avatar";

import { COLOR_PALLETE, AVATAR_VARIANT } from "./constants";

const SIZE = { small: 24, medium: 32, large: 40, extraLarge: 64 };

const STATUS = { online: "online", idle: "idle", offline: "offline" };

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

  const containerClasses = classNames(
    "neeto-ui-avatar__container neeto-ui-select-none",
    {
      "neeto-ui-avatar__container--medium": isMedium,
      "neeto-ui-avatar__container--large": isLarge,
      "neeto-ui-avatar__container--xlarge": isExtraLarge,
    },
    className
  );

  const imageClasses = classNames("neeto-ui-avatar", {
    "neeto-ui-avatar--medium": isMedium,
    "neeto-ui-avatar--large": isLarge,
    "neeto-ui-avatar--xlarge": isExtraLarge,
    hidden: isLoadingFailed,
  });

  const statusClasses = classNames("neeto-ui-avatar__status", status, {
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
      content={name}
      disabled={!showTooltip}
      position="bottom"
      {...tooltipProps}
    >
      <span
        {...{ onClick }}
        className={containerClasses}
        data-testid="avatar"
        {...otherProps}
      >
        <Indicator />
        {shouldDisplayFallbackAvatar ? (
          <FallbackAvatar
            {...{ name }}
            className="neeto-ui-avatar__svg"
            colors={COLOR_PALLETE}
            size={SIZE[size]}
            variant={AVATAR_VARIANT}
          />
        ) : (
          <img
            alt={`avatar-${avatarString}`}
            className={imageClasses}
            src={imageUrl}
            onError={() => setIsLoadingFailed(true)}
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
