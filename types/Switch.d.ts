import React from "react";
import { LabelProps } from "./Label";

export type SwitchProps = {
  label?: string;
  required?: boolean;
  className?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  disabled?: boolean;
  labelProps?: LabelProps;
  children?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { [key: string]: any };

export const Switch: React.ForwardRefExoticComponent<SwitchProps>;
