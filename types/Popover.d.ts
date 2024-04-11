import React from "react";

export interface PopoverProps {
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
  className?: string;
  [key: string]: any;
}

const Popover: React.ForwardRefExoticComponent<PopoverProps>;
export default Popover;
