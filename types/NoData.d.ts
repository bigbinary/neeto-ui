import React from "react";
import { ButtonProps } from "./Button";
import { HelpContentProps } from "./HelpContent";

export type NoDataProps = {
  title?: string;
  description?: React.ReactNode;
  helpText?: React.ReactNode;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  showTooltipWhenButtonDisabled?: boolean;
  helpIconProps?: HelpContentProps;
  className?: string;
};

const NoData: React.FC<NoDataProps>;
export default NoData;
