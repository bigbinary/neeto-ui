import React from "react";
import { ButtonProps } from "../Button";

export interface ActionBlockProps {
  className?: string;
  submitButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  isSubmitting?: boolean;
  position?: "left" | "right";
}
const ActionBlock: React.FC<ActionBlockProps>;
export default ActionBlock;
