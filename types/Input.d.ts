import React from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  [key: string]: any;
  size?: "small" | "medium" | "large";
  label?: string;
  error?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  disabled?: boolean;
  helpText?: string;
  className?: string;
  nakedInput?: boolean;
  contentSize?: number;
  required?: boolean;
  labelProps?: LabelProps;
  maxLength?: number;
  unlimitedChars: boolean;
  rejectCharsRegex?: RegExp;
  precision?: number;
}

const Input: React.ForwardRefExoticComponent<InputProps>;
export default Input;
