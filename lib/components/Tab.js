import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const noop = () => {};

const Tab = ({ children, className = "" }) => {
  return (
    <div
      className={classnames(["nui-tab__wrapper", className])}
      data-cy="tab-container"
    >
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
  let Icon =
    typeof icon == "string"
      ? () => <i className={icon} data-cy="tab-item-icon" />
      : icon || React.Fragment;

  if (activeClassName) {
    Parent = NavLink;
  }
  return (
    <Parent
      className={classnames(["nui-tab", className], {
        active: active,
      })}
      onClick={onClick}
      data-cy="tab-item"
      {...otherProps}
    >
      {icon && <Icon />}
      {children}
    </Parent>
  );
};

Tab.Item = Item;

export default Tab;
