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

  const placeholderClasses = classNames("nui-avatar__text", {
    "nui-avatar__text-medium": isMedium,
    "nui-avatar__text-large": isLarge,
    "nui-avatar__text-xlarge": isXLarge
  });

  // TODO: Remove 'v2' prefix.
  const statusClasses = classNames("nui-avatar__status", `v2-${status}`, {
    "nui-avatar__status-medium": isMedium,
    "nui-avatar__status-large": isLarge,
    "nui-avatar__status-xlarge": isXLarge
  });

  const Indicator = () => {
    if (isNil(status)) {
      return React.Fragment;
    }
    return <span className={statusClasses} />;
  };

  const ImagePlaceholder = () => <span className={placeholderClasses}>{content.text}</span>;

  return (
    <div
      onClick={onClick}
      style={imageContainerStyle}
      className={classNames("nui-avatar--container", {
        "nui-avatar--container-round": isRounded
      })}>
      <Indicator status={status} size={size} />
      {!loaded && <ImagePlaceholder />}
      <img
        className={imageClasses}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        src={content.imageUrl}
        alt={`avatar-${content.text}`}
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
