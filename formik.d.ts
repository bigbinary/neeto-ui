import React from "react";
import { FormikProps } from "formik";
import {
  Input as PlainInput,
  Radio as PlainRadio,
  Switch as PlainSwitch,
  Textarea as PlainTextarea,
  Checkbox as PlainCheckbox,
  Select as PlainSelect,
  MultiEmailInput as PlainMultiEmailInput,
  TreeSelect as PlainTreeSelect,
  Slider as PlainSlider,
  Button as PlainButton,
  ButtonProps,
  AlertProps,
} from "./index";

export interface ActionBlockProps {
  className?: string;
  submitButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  isSubmitting?: boolean;
}
export interface BlockNavigationProps {
  isDirty?: boolean;
}

export interface Form {
  className?: string;
  children: React.ReactNode | ((props: FormikProps<any>) => React.ReactNode);
  formikProps: { [key: string]: any };
  formProps?: { [key: string]: any };
  scrollToErrorField?: boolean;
}

export const ActionBlock: React.FC<ActionBlockProps>;
export const BlockNavigation: React.FC<
  BlockNavigationProps & Partial<AlertProps>
>;

export const Input: typeof PlainInput;
export const Radio: typeof PlainRadio;
export const Switch: typeof PlainSwitch;
export const Textarea: typeof PlainTextarea;
export const Checkbox: typeof PlainCheckbox;
export const Select: typeof PlainSelect;
export const MultiEmailInput: typeof PlainMultiEmailInput;
export const Button: typeof PlainButton;
export const TreeSelect: typeof PlainTreeSelect;
export const Slider: typeof PlainSlider;

export const Form: React.FC<Form>;
