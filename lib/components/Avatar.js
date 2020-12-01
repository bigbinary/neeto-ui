import React from "react";
import classnames from "classnames";
import { either, isEmpty, isNil } from "ramda";

const getInitials = name => {
  let initials = (name && name.match(/\b\w/g)) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
};

const Avatar = ({
  contact = {},
  className = "",
  size,
  isOnline = false,
  activity = null
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
    return (
      <span className="absolute top-0 z-20 block w-2 h-2 text-white transform translate-x-1/2 bg-green-400 rounded-full right-1 shadow-solid"></span>
    );
  };

  const Activity = ({ activityIcon }) => {
    if (either(isNil, isEmpty)(activityIcon)) {
      return (<></>);
    }

    return (
      <div className="absolute bottom-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-gray-700 transform translate-x-1 translate-y-2 rounded-full shadow-md bsolute bg-cool-gray-100">
        <i className={activityIcon} />
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
      >
        {userInitial}
        {isOnline && <Indicator />}
        {activity && <Activity activityIcon={activityIcons[activity]} />}
      </div>
    );
  };

  const renderUserImage = profileImagePath => {
    return (
      <div className={classnames(["relative", className])} style={style}>
        <img
          src={profileImagePath}
          className="object-cover w-full h-full overflow-hidden rounded-full"
        />
        {isOnline && <Indicator />}
      </div>
    );
  };

  const renderDefaultAvatar = () =>
    <div className={classnames(["relative", className])} style={style}>
      <svg className="object-cover w-full h-full p-2 overflow-hidden text-white bg-purple-400 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="#ffffff" d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
      </svg>
      {isOnline && <Indicator />}
    </div>


  if (either(isNil, isEmpty)(contact) ||
    (either(isNil, isEmpty)(contact.name) &&
      either(isNil, isEmpty)(contact.profile_name)
    )
  ) {
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
