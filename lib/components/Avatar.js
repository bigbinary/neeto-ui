import React from "react";
import classnames from "classnames";
import UserSVG from '../assets/user-fill.svg'
const getInitials = name => {
  var initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
};

const Avatar = ({ contact = {}, className, size, isOnline, activity }) => {
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
    minWidth: size
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
    return (
      <div className="absolute bottom-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-gray-700 transform translate-x-1 translate-y-2 rounded-full shadow-md bsolute bg-cool-gray-100">
        <i className={activityIcon} />
      </div>
    );
  };

  const renderUserInitial = userName => {
    const userInitial = getInitials(userName);
    const charCode =
      (userInitial ? userInitial.charCodeAt(0) : 0) +
      (userInitial ? userInitial.charCodeAt(1) : 0);
    const bgColor =
      tailwindColors[(charCode % 65) % tailwindColors.length] || "gray";
    const backgroundClass = `bg-${bgColor}-400`;

    return (
      <div
        className={classnames([
          "relative flex flex-row items-center justify-center",
          "text-sm text-white font-medium rounded-full",
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
      <div className={className} style={style}>
        <img
          src={profileImagePath}
          className="object-cover w-full h-full overflow-hidden rounded-full"
        />
        {isOnline && <Indicator />}
      </div>
    );
  };

  const renderDefaultAvatar = () => 
    <div className={className} style={style}>
      <img src={UserSVG} className="object-cover w-full h-full p-2 overflow-hidden text-white bg-purple-400 rounded-full"/>
      {isOnline && <Indicator />}
    </div>

  const userName = contact.name ? contact.name : contact.profile_name;

  if (contact.profile_image_path) {
    return renderUserImage(contact.profile_image_path);
  } else if(!!userName) {
    return renderUserInitial(userName);
  } else {
    return renderDefaultAvatar()
  }
};

export default Avatar;
