import React from "react";
import { LabelProps } from "./Label";

export type SelectProps = {
  size?: "small" | "medium" | "large";
  label?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  className?: string;
  innerRef?: React.Ref<HTMLSelectElement>;
  isCreateable?: boolean;
  strategy?: "default" | "fixed";
  id?: string;
  loadOptions?: boolean;
  labelProps?: LabelProps;
  optionRemapping?: { label?: string; value?: string };
  [key: string]: any;
  fetchMore?: () => void;
  totalOptionsCount?: number;
  isAsyncLoadOptionEnabled?: boolean;
  isMulti?: boolean;
  addButtonLabel?: string;
};

export const Select: React.ForwardRefExoticComponent<SelectProps>;
