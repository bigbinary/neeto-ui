import React from "react";
import {
  Input as PlainInput,
  Radio as PlainRadio,
  Switch as PlainSwitch,
  Textarea as PlainTextarea,
  Checkbox as PlainCheckbox,
  Select as PlainSelect,
  MultiEmailInput as PlainMultiEmailInput,
  Button as PlainButton,
  ButtonProps,
} from "./index";

export interface ActionBlockProps {
  className?: string;
  submitButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}
export interface BlockNavigationProps {
  isDirty?: boolean;
}

export const ActionBlock: React.FC<ActionBlockProps>;
export const BlockNavigation: React.FC<BlockNavigationProps>;

export const Input: typeof PlainInput;
export const Radio: typeof PlainRadio;
export const Switch: typeof PlainSwitch;
export const Textarea: typeof PlainTextarea;
export const Checkbox: typeof PlainCheckbox;
export const Select: typeof PlainSelect;
export const MultiEmailInput: typeof PlainMultiEmailInput;
export const Button: typeof PlainButton;
