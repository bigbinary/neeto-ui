import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Item = ({
  active,
  className = "",
  children,
  icon = null,
  onClick = () => {},
  activeClassName = "",
  ...otherProps
}) => {
  const Icon =
    typeof icon === "string"
      ? () => (
          <i className={icon} data-cy="tab-item-icon" data-testid="tab-icon" />
        )
      : icon || React.Fragment;

  const Parent = activeClassName ? NavLink : "button";

  return (
    <Parent
      data-cy="tab-item"
      className={classnames(
        [
          "neeto-ui-tab neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-select-none",
          className,
        ],
        {
          active,
        }
      )}
      onClick={onClick}
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
   * To set the active Tab
   */
  active: PropTypes.bool,
  /**
   * Extra classes can be provided to the TabItem
   */
  className: PropTypes.string,
  /**
   * To add content inside TabItem
   */
  children: PropTypes.node,
  /**
   * To add icons to TabItem
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Callback to be triggered when user clicks on the TabItem
   */
  onClick: PropTypes.func,
  activeClassName: PropTypes.string,
};

export default Item;
