import React from "react";
import classnames from "classnames";
import { all, either, isEmpty, isNil } from "ramda";

const getInitials = name => {
  let initials = (name && name.match(/\b\w/g)) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
};

const Avatar = ({
  contact = {},
  className = "",
  size = 32,
  status = null,
  activity = null,
  ...otherProps
}) => {
  const tailwindColors = [
    "gray",
    "red",
    "orange",
    "green",
    "yellow",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ];

  const style = {
    width: size,
    height: size,
    minHeight: size,
    minWidth: size,
    fontSize: Math.ceil(size * 0.375),
    lineHeight: `${size}px`
  };

  const activityIcons = {
    view: "ri-eye-line",
    type: "ri-pencil-line"
  };

  const Indicator = () => {
    if (isNil(status) || status === false) {
      return (<></>);
    }

    return (
      <span
        className={classnames({
          "absolute top-0 z-20 block w-2 h-2 text-white transform translate-x-1/2 rounded-full right-1 shadow-solid": status,
          "bg-green-400": status === "online",
          "bg-orange-400": status === "idle",
          "bg-gray-300": status === "offline"
        })}
      ></span>
    );
  };

  const Activity = () => {
    if (isNil(activity) || activity === false) {
      return (<></>);
    }

    return (
      <div className="absolute bottom-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-gray-700 transform translate-x-1 translate-y-2 rounded-full shadow-md bsolute bg-cool-gray-100">
        <i className={activityIcons[activity]} />
      </div>
    );
  };

  const renderUserInitial = userName => {
    const userInitial = getInitials(userName);
    const charCode =
      (userInitial.charCodeAt(0) || 0) +
      (userInitial.charCodeAt(1) || 0);
    const bgColor =
      tailwindColors[(charCode % 65) % tailwindColors.length] || "gray";
    const backgroundClass = `bg-${bgColor}-300`;

    return (
      <div
        className={classnames([
          "relative flex flex-row items-center justify-center",
          "text-white font-medium rounded-full",
          backgroundClass,
          className
        ])}
        style={style}
        {...otherProps}
      >
        {userInitial}
        <Indicator />
        <Activity />
      </div>
    );
  };

  const renderUserImage = profileImagePath => {
    return (
      <div
        className={classnames(["relative", className])}
        style={style}
        {...otherProps}
      >
        <img
          src={profileImagePath}
          className="object-cover w-full h-full overflow-hidden rounded-full"
        />
        <Indicator />
        <Activity />
      </div>
    );
  };

  const renderDefaultAvatar = () => {
    return (
      <div
        className={classnames(["relative text-white bg-purple-400 rounded-full text-center", className])}
        style={style}
        {...otherProps}
      >
        <i className="align-middle ri-user-fill ri-lg"></i>
        <Indicator />
        <Activity />
      </div>
    );
  };


  if (either(isNil, isEmpty)(contact) || all(either(isNil, isEmpty), [contact.name, contact.profile_name])) {
    return renderDefaultAvatar()
  }

  if (contact.profile_image_path) {
    return renderUserImage(contact.profile_image_path);
  } else {
    const userName = contact.name ? contact.name : contact.profile_name;
    return renderUserInitial(userName);
  }
};

export default Avatar;
