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
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
        <i className={`ri-${icon} ri-lg`}></i>
      </div>
      <div className="space-y-1">
        <p className="text-base font-medium leading-6 text-gray-800">{title}</p>
      </div>
    </Link>
  );
};

export default Tile;
