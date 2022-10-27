import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNil } from "ramda";
import Tooltip from "./Tooltip";

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

const COLORS = [
  "neeto-ui-avatar--container-bg-1",
  "neeto-ui-avatar--container-bg-2",
  "neeto-ui-avatar--container-bg-3",
  "neeto-ui-avatar--container-bg-4",
  "neeto-ui-avatar--container-bg-5",
  "neeto-ui-avatar--container-bg-6",
  "neeto-ui-avatar--container-bg-7",
];

const USER_ICON_URL =
  "https://github.com/bigbinary/neeto-ui/blob/602cf3ab48a36d7a512f3780f9950d15d13ebbea/lib/images/user.png?raw=true";

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

  const getInitials = (fullName) => {
    if (fullName && typeof fullName === "string") {
      const allNames = fullName.trim().split(" ");
      const initials = allNames.reduce((acc, curr, index) => {
        if (index === 0 || index === allNames.length - 1) {
          acc = `${acc}${curr.charAt(0).toUpperCase()}`;
        }
        return acc;
      }, "");
      return initials;
    }
    return "";
  };

  const avatarString = getInitials(name);

  const getRandomBackgroundColor = () => {
    const charCode =
      (avatarString.charCodeAt(0) || 0) + (avatarString.charCodeAt(1) || 0);
    const bgColor = COLORS[(charCode % 65) % COLORS.length] || COLORS[0];
    return bgColor;
  };

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

  const placeholderClasses = classNames("neeto-ui-avatar__text", {
    "neeto-ui-avatar__text-medium": isMedium,
    "neeto-ui-avatar__text-large": isLarge,
    "neeto-ui-avatar__text-xlarge": isExtraLarge,
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

  const ImagePlaceholder = () => (
    <span className={placeholderClasses} data-testid="initials">
      {avatarString}
    </span>
  );

  const shouldDisplayInitials = avatarString && !(imageUrl && !isLoadingFailed);

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
          className,
          getRandomBackgroundColor()
        )}
        {...otherProps}
      >
        <Indicator />
        {shouldDisplayInitials ? (
          <ImagePlaceholder />
        ) : (
          <img
            className={imageClasses}
            onError={() => setIsLoadingFailed(true)}
            src={imageUrl || USER_ICON_URL}
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
