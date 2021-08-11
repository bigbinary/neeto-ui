import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNil } from "ramda";
import classnames from "classnames";

const SIZE = {
  small: 24,
  medium: 32,
  large: 40,
  xlarge: 64
};

const STATUS = {
  online: "online",
  idle: "idle",
  offline: "offline"
};

const Indicator = ({ status }) => {
  if (isNil(status)) {
    return React.Fragment;
  }
  const isOnline = status === STATUS.online;
  const isIdle = status === STATUS.idle;
  const isOffline = status === STATUS.offline;

  const statusIndicatorClasses = classnames("nui-avatar--status", {
    "online": isOnline,
    "idle": isIdle,
    "offline": isOffline
  });
  return <span className={statusIndicatorClasses} />;
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

  const placeholderClasses = classNames("nui-avatar--text", {
    "nui-avatar--text-medium": isMedium,
    "nui-avatar--text-large": isLarge,
    "nui-avatar--text-xlarge": isXLarge
  });

  const ImagePlaceholder = () => <span className={placeholderClasses}>{content.text}</span>;

  return (
    <div
      onClick={onClick}
      style={imageContainerStyle}
      className={classNames("nui-avatar--container", {
        "nui-avatar--container-round": isRounded
      })}>
      <Indicator status={status} />
      {!loaded && <ImagePlaceholder  />}
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
