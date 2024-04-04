import React from "react";
import { LabelProps } from "./Label";

export interface RadioProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  stacked?: boolean;
  className?: string;
  containerClassName?: string;
  error?: string;
  id?: any;
  value?: any;
  labelProps?: LabelProps;
}

export type RadioItemProps = { label: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { [key: string]: any };

const Radio: React.FC<RadioProps> & {
  Item: React.FC<RadioItemProps>;
};
export default Radio;
