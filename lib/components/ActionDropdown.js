import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import classnames from "classnames";

const ActionDropdown = ({
  style = "primary",
  buttonProps = "",
  dropdownProps = "",
  children,
  className = ""
}) => {
  return (
    <div
      className={classnames([
        `nui-action-dropdown nui-action-dropdown--${style}`,
        className
      ])}
    >
      <Button style={style} {...buttonProps} />
      <Dropdown buttonStyle={style} {...dropdownProps}>
        {children}
      </Dropdown>
    </div>
  );
};

export default ActionDropdown;
