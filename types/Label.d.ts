import React from "react";
import { TooltipProps } from "./Tooltip";

export type LabelProps = {
  className?: string;
  required?: boolean;
  helpIconProps?: {
    onClick?: () => void;
    icon?: any;
    tooltipProps?: TooltipProps;
    className?: string;
  } & React.SVGProps<SVGSVGElement>;
} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & { [key: string]: any };

export const Label: React.FC<LabelProps>;
