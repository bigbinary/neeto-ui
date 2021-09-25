import React from "react";
import PropTypes from "prop-types";
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

Tab.propTypes = {
  /**
   * To add content inside Tab
   */
  children: PropTypes.node,
  /**
   * Extra classes can be provided to the Tab
   */
  classnames: PropTypes.string
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
        "active": active,
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

Item.propTypes = {
  /**
   * To set the Active Tab
   */
  active: PropTypes.bool,
  /**
   * Extra classes can be provided to the Tab Item
   */
  className: PropTypes.string,
  /**
   * To add content inside Tab Item
   */
  children: PropTypes.node,
  /**
   * To add icons to Tab Item
   */
  icon: PropTypes.string,
  /**
   * Callback to be triggered when user clicks on the Tab Item
   */
  onClick: PropTypes.func,
  activeClassName: PropTypes.string,
};

Tab.Item = Item;

export default Tab;
