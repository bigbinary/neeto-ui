import React from "react";
import { TooltipProps } from "./Tooltip";

export type KbdProps = {
  keyName?: string;
  className?: string;
  tooltipProps?: TooltipProps;
};

export const Kbd: React.FC<KbdProps>;
