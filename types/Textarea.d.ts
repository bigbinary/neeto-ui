import React from "react";
import { LabelProps } from "./Label";

export type TextareaProps = {
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  nakedTextarea?: boolean;
  helpText?: string;
  error?: string;
  label?: string;
  className?: string;
  maxLength?: number;
  labelProps?: LabelProps;
  unlimitedChars: boolean;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { [key: string]: any };

export const Textarea: React.ForwardRefExoticComponent<TextareaProps>;
