import React from "react";
import { ButtonProps } from "./Button";

export interface MenuItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  tooltipProps?: TooltipProps;
}

export interface DropdownProps {
  icon?: string | any;
  label?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  position?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";
  className?: string;
  buttonSize?: "small" | "medium" | "large";
  buttonStyle?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "text"
    | "danger"
    | "danger-text"
    | "link";
  buttonProps?: ButtonProps;
  customTarget?: React.ReactNode | (() => React.ReactNode);
  disabled?: boolean;
  dropdownProps?: any;
  closeOnEsc?: boolean;
  closeOnSelect?: boolean;
  closeOnOutsideClick?: boolean;
  dropdownModifiers?: any[];
  trigger?: "click" | "hover" | "all" | "manual";
  strategy?: "absolute" | "fixed";
  onClick?: () => void;
  /** @deprecated Prop deprecated. Use `dropdownProps` prop instead*/
  ulProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > & { [key: string]: any };
  [key: string]: any;
}

export const Dropdown: React.FC<DropdownProps> & {
  Menu: React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  >;
  MenuItem: React.FC<MenuItemProps> & { Button: ButtonProps };
  Divider: React.FC<
    React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >
  >;
};
