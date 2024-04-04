import React from "react";
import { TooltipProps } from "./Tooltip";

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string | any;
  iconPosition?: "left" | "right";
  iconSize?: number;
  label?: string;
  loading?: boolean;
  to?: string;
  type?: "button" | "reset" | "submit";
  style?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "danger-text"
    | "text"
    | "link";
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  href?: string;
  tooltipProps?: TooltipProps;
  children?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps>;
export default Button;
