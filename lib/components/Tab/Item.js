import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const noop = () => {};

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
      ? () => (
        <i className={icon} data-cy="tab-item-icon" data-testid="tab-icon" />
      )
      : icon || React.Fragment;

  if (activeClassName) {
    Parent = NavLink;
  }

  return (
    <Parent
      className={classnames(
        [
          "neeto-ui-tab neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-select-none",
          className,
        ],
        {
          active: active,
        }
      )}
      onClick={onClick}
      data-cy="tab-item"
      {...otherProps}
    >
      {icon && <Icon className="neeto-ui-tab__icon" />}
      {children}
    </Parent>
  );
};

Item.displayName = "Tab.Item";

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
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Callback to be triggered when user clicks on the Tab Item
   */
  onClick: PropTypes.func,
  activeClassName: PropTypes.string,
};

export default Item;
