import React from "react";
import { ButtonProps } from "../Button";

export interface ActionBlockProps {
  className?: string;
  submitButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  isSubmitting?: boolean;
  isOverlayComponent?: boolean;
}
const ActionBlock: React.FC<ActionBlockProps>;
export default ActionBlock;
