import React from "react";

export interface TooltipProps {
  content: React.ReactNode;
  theme?: "dark" | "light";
  disabled?: boolean;
  position?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "auto"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
  interactive?: boolean;
  hideAfter?: number;
  hideOnTargetExit?: boolean;
  [key: string]: any;
}

const Tooltip: React.ForwardRefExoticComponent<TooltipProps>;
export default Tooltip;
