import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNil } from "ramda";

const SIZE = {
  small: 24,
  medium: 32,
  large: 40,
  xlarge: 64
};

function Avatar({ size, content, isRounded, status, onClick }) {
  const [loaded, setLoaded] = useState(false);

  const isMedium = size === "medium";
  const isLarge = size === "large";
  const isXLarge = size === "xlarge";

  const getRandomBackgroundColor = () => {
    const colors = ["#E5E7EB", "#FECACA", "#FDE68A", "#A7F3D0", "#BFDBFE", "#C7D2FE", "#DDD6FE", "#FBCFE8"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const imageContainerStyle = { height: SIZE[size], width: SIZE[size], backgroundColor: getRandomBackgroundColor() };

  const avatarString = content.text.split(" ").reduce((str, item) => {
    str += item[0];
    return str;
  }, "");

  const imageClasses = classNames("nui-avatar", {
    "nui-avatar--medium": isMedium,
    "nui-avatar--large": isLarge,
    "nui-avatar--xlarge": isXLarge,
    "nui-avatar--round": isRounded,
    "hidden": !loaded
  });

  const placeholderClasses = classNames("nui-avatar__text", {
    "nui-avatar__text-medium": isMedium,
    "nui-avatar__text-large": isLarge,
    "nui-avatar__text-xlarge": isXLarge
  });

  // TODO: Remove 'v2' prefix.
  const statusClasses = classNames("nui-avatar__status", `v2-${status}`, {
    "nui-avatar__status-medium": isMedium,
    "nui-avatar__status-large": isLarge,
    "nui-avatar__status-xlarge": isXLarge,
    "nui-avatar__status-square": !isRounded
  });

  const Indicator = () => {
    if (isNil(status)) {
      return React.Fragment;
    }
    return <span className={statusClasses} />;
  };

  const ImagePlaceholder = () => <span className={placeholderClasses}>{avatarString}</span>;

  return (
    <div
      onClick={onClick}
      style={imageContainerStyle}
      className={classNames("nui-avatar--container", {
        "nui-avatar--container-round": isRounded
      })}>
      <Indicator />
      {!loaded && <ImagePlaceholder />}
      <img
        className={imageClasses}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        src={content.imageUrl}
        alt={`avatar-${avatarString}`}
      />
    </div>
  );
}

Avatar.defaultProps = {
  size: "small",
  content: {
    imageUrl: "",
    text: ""
  },
  isRounded: false,
  onClick: () => {},
  status: null
};

Avatar.propTypes = {
  size: PropTypes.string,
  content: PropTypes.shape({
    imageUrl: PropTypes.string,
    text: PropTypes.string
  }),
  imageUrl: PropTypes.string,
  isRounded: PropTypes.bool,
  onClick: PropTypes.func,
  status: PropTypes.string
};

export default Avatar;
