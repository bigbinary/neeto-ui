import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

const Tile = ({ className, title, icon, link, ...otherProps }) => {
  return (
    <Link
      to={link}
      className={classnames([
        "-m-3 p-4 flex items-center space-x-4 rounded-lg hover:bg-gray-50 hover:no-underline transition ease-in-out duration-150",
        className
      ])}
      {...otherProps}
    >
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-10 sm:w-10">
        <i className={`ri-${icon} ri-lg`}></i>
      </div>
      <div className="space-y-1">
        <p className="text-base leading-6 font-medium text-gray-800">{title}</p>
      </div>
    </Link>
  );
};

export default Tile;
