import React from "react";
import { LabelProps } from "./Label";

export type CheckboxProps = {
  label?: string;
  error?: string;
  className?: string;
  required?: false;
  id?: string;
  labelProps?: LabelProps;
  children?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { [key: string]: any };

const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
