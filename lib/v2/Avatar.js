import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SIZE = {
  small: 24,
  medium: 32,
  large: 40,
  xlarge: 64
};

function Avatar({ size, imageUrl, isRounded, fallbackText, onClick }) {
  const [loaded, setLoaded] = useState(false);

  const imageContainerStyle = { height: SIZE[size], width: SIZE[size] };
  const isMedium = size === "medium";
  const isLarge = size === "large";
  const isXLarge = size === "xlarge";

  const imageClasses = classNames("nui-avatar", {
    "nui-avatar--medium": isMedium,
    "nui-avatar--large": isLarge,
    "nui-avatar--xlarge": isXLarge,
    "nui-avatar--round": isRounded,
    "hidden": !loaded
  });

  const placeholderClasses = classNames("nui-avatar--text", {
    "nui-avatar--text-medium": isMedium,
    "nui-avatar--text-large": isLarge,
    "nui-avatar--text-xlarge": isXLarge
  });

  const ImagePlaceholder = () => <span className={placeholderClasses}>{fallbackText}</span>;

  return (
    <span
      onClick={onClick}
      style={imageContainerStyle}
      className={classNames("nui-avatar--container", {
        "nui-avatar--container-round": isRounded
      })}>
      {!loaded && <ImagePlaceholder />}
      <img
        className={imageClasses}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        src={imageUrl}
        alt={`avatar-${fallbackText}`} />
    </span>
  );
}

Avatar.defaultProps = {
  size: "small",
  imageUrl: "",
  isRounded: false,
  onClick: () => {},
  fallbackText: ""
};

Avatar.propTypes = {
  size: PropTypes.string,
  imageUrl: PropTypes.string,
  isRounded: PropTypes.bool,
  onClick: PropTypes.func,
  fallbackText: PropTypes.string
};

export default Avatar;
