import React from "react";
import { ButtonProps } from "./Button";

export type NoDataProps = {
  title?: string;
  description?: React.ReactNode;
  helpText?: React.ReactNode;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  className?: string;
};

export const NoData: React.FC<NoDataProps>;
