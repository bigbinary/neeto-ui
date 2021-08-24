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

function Avatar({ size, user, isSquare, status, onClick, ...otherProps }) {
  const [loaded, setLoaded] = useState(false);

  const isMedium = size === "medium";
  const isLarge = size === "large";
  const isXLarge = size === "xlarge";

  const avatarString = user?.name.split(" ").reduce((str, item) => {
    if (str.length < 2) {
      str += item[0];
    }
    return str;
  }, "");

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

  const imageClasses = classNames("nui-avatar", {
    "nui-avatar--medium": isMedium,
    "nui-avatar--large": isLarge,
    "nui-avatar--xlarge": isXLarge,
    "nui-avatar--round": !isSquare,
    hidden: !loaded,
  });

  const placeholderClasses = classNames("nui-avatar__text", {
    "nui-avatar__text-medium": isMedium,
    "nui-avatar__text-large": isLarge,
    "nui-avatar__text-xlarge": isXLarge,
  });

  // TODO: Remove 'v2' prefix.
  const statusClasses = classNames("nui-avatar__status", `v2-${status}`, {
    "nui-avatar__status-medium": isMedium,
    "nui-avatar__status-large": isLarge,
    "nui-avatar__status-xlarge": isXLarge,
    "nui-avatar__status-square": isSquare,
  });

  const Indicator = () =>
    isNil(status) ? React.Fragment : <span className={statusClasses} />;

  const ImagePlaceholder = () => (
    <span className={placeholderClasses}>{avatarString}</span>
  );

  return (
    <div
      onClick={onClick}
      style={imageContainerStyle}
      className={classNames("nui-avatar--container", {
        "nui-avatar--container-round": !isSquare,
      })}
      {...otherProps}
    >
      <Indicator />
      {!loaded && <ImagePlaceholder />}
      <img
        className={imageClasses}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        src={user.imageUrl}
        alt={`avatar-${avatarString}`}
      />
    </div>
  );
}

Avatar.defaultProps = {
  size: "medium",
  user: {
    imageUrl: "",
    name: "",
  },
  isSquare: false,
  onClick: () => {},
  status: null,
};

Avatar.propTypes = {
  size: PropTypes.string,
  user: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
  }),
  imageUrl: PropTypes.string,
  isSquare: PropTypes.bool,
  onClick: PropTypes.func,
  status: PropTypes.string,
};

export default Avatar;
