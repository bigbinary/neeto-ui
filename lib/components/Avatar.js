import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNil } from "ramda";

const SIZE = {
  small: 24,
  medium: 32,
  large: 40,
  xlarge: 64,
};

const STATUS = {
  online: "online",
  idle: "idle",
  offline: "offline",
};

const COLORS = [
  "#E5E7EB",
  "#FECACA",
  "#FDE68A",
  "#A7F3D0",
  "#BFDBFE",
  "#C7D2FE",
  "#DDD6FE",
  "#FBCFE8",
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
  ...otherProps
}) => {
  const [isLoadingFailed, setIsLoadingFailed] = useState(false);

  const { name = "", imageUrl } = user;

  const isMedium = size === "medium";
  const isLarge = size === "large";
  const isXLarge = size === "xlarge";

  const getInitials = (fullName) => {
    const allNames = fullName.trim().split(" ");
    const initials = allNames.reduce((acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, "");
    return initials;
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
    backgroundColor: getRandomBackgroundColor(),
  };

  const imageClasses = classNames("neeto-ui-avatar ", {
    "neeto-ui-avatar--medium": isMedium,
    "neeto-ui-avatar--large": isLarge,
    "neeto-ui-avatar--xlarge": isXLarge,
    "neeto-ui-avatar--round": !isSquare,
    hidden: isLoadingFailed,
  });

  const placeholderClasses = classNames("neeto-ui-avatar__text", {
    "neeto-ui-avatar__text-medium": isMedium,
    "neeto-ui-avatar__text-large": isLarge,
    "neeto-ui-avatar__text-xlarge": isXLarge,
  });

  const statusClasses = classNames("neeto-ui-avatar__status", `${status}`, {
    "neeto-ui-avatar__status-medium": isMedium,
    "neeto-ui-avatar__status-large": isLarge,
    "neeto-ui-avatar__status-xlarge": isXLarge,
    "neeto-ui-avatar__status-square": isSquare,
  });

  const Indicator = () =>
    isNil(status) ? React.Fragment : <span className={statusClasses} data-testid="indicator" />;

  const ImagePlaceholder = () => (
    <span className={placeholderClasses} data-testid="initials">
      {avatarString}
    </span>
  );

  const shouldDisplayInitials = avatarString && !(imageUrl && !isLoadingFailed);

  return (
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
   * To provide external classnames to Avatar component.
   */
  className: PropTypes.string,
};

export default Avatar;
