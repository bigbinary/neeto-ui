import React from "react";
import { ButtonProps } from "./Button";

export type NoDataProps = {
  title?: string;
  description?: React.ReactNode;
  helpText?: React.ReactNode;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  showTooltipWhenButtonDisabled?: 
  className?: string;
};

const NoData: React.FC<NoDataProps>;
export default NoData;
