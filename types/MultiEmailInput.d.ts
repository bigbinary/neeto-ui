import React from "react";
import { LabelProps } from "./Label";

export interface MultiEmailInputProps {
  label?: string;
  placeholder?: string;
  helpText?: string;
  value?: { label: string; value: string; valid: boolean }[];
  onChange?: (
    emails: { label: string; value: string; valid: boolean }[]
  ) => void;
  error?: string;
  onBlur?: () => void;
  filterInvalidEmails?: { label: string };
  counter?: boolean | { label: string; startFrom: number };
  disabled?: boolean;
  required?: boolean;
  maxHeight?: number;
  labelProps?: LabelProps;
  isCreateable?: boolean;
  [key: string]: any;
}

const MultiEmailInput: React.FC<MultiEmailInputProps>;
export default MultiEmailInput;
