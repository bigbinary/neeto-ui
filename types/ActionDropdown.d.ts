import React from "react";
import { DropdownProps } from "./Dropdown";
import { ButtonProps } from "./Button";

export interface ActionDropdownProps {
  label?: string;
  buttonStyle?: "primary" | "secondary";
  buttonSize?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  buttonProps?: ButtonProps;
  dropdownProps?: DropdownProps;
  portalProps?: object;
  /** @deprecated Prop deprecated. Use `buttonStyle` prop instead*/
  style?: "primary" | "secondary";
  /** @deprecated Prop deprecated. Use `buttonStyle` prop instead*/
  size?: "small" | "medium" | "large";
}

const ActionDropdown: React.FC<ActionDropdownProps>;
export default ActionDropdown;
