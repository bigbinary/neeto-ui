import React from "react";
import { TooltipProps } from "./Tooltip";
import { ButtonProps } from "./Button";
import { PopoverProps } from "./Popover";

export type LabelProps = {
  className?: string;
  required?: boolean;
  helpIconProps?: {
    onClick?: () => void;
    icon?: any;
    tooltipProps?: TooltipProps;
    popoverProps?: {
      title?: string;
      description?: React.ReactNode;
      helpLinkProps?: ButtonProps;
    } & PopoverProps;
    className?: string;
  } & React.SVGProps<SVGSVGElement>;
} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & { [key: string]: any };

const Label: React.FC<LabelProps>;
export default Label;
