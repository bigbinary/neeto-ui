import React from "react";

export type SliderProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  value?: number | number[];
};

export const Slider: React.ForwardRefExoticComponent<SliderProps>;
