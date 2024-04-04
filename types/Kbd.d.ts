import React from "react";
import { TooltipProps } from "./Tooltip";

export type KbdProps = {
  keyName?: string;
  className?: string;
  tooltipProps?: TooltipProps;
};

const Kbd: React.FC<KbdProps>;
export default Kbd;
