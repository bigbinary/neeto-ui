import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const noop = () => {};

const Tab = ({ children, className = "" }) => {
  return (
    <div className={classnames(["nui-tab__wrapper", className])}>
      {children}
    </div>
  );
};

const Item = ({
  active,
  className = "",
  children,
  icon = null,
  onClick = noop,
  activeClassName = "",
  ...otherProps
}) => {
  let Parent = "button";
  if (activeClassName) {
    Parent = NavLink;
  }
  return (
    <Parent
      className={classnames(["nui-tab", className], {
        "active": active,
      })}
      onClick={onClick}
      {...otherProps}
    >
      {icon && <i className={icon}></i>}
      {children}
    </Parent>
  );
};

Tab.Item = Item;

export default Tab;
