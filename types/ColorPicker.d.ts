import React from "react";
import { DropdownProps } from "./Dropdown";

export interface ColorPickerProps {
  color: string;
  size: "small" | "medium" | "large";
  onChange: (color: {
    hex: string;
    rgb: { r: number; g: number; b: number, a: number };
  }) => void;
  colorPaletteProps?: {
    color: { from: string; to: string };
    colorList: { from: string; to: string }[];
    onChange: (from: string, to: string) => void;
  };
  showEyeDropper?: boolean;
  showHexValue?: boolean;
  showTransparencyControl?: boolean;
  showPicker?: boolean;
  dropdownProps?: DropdownProps;
  portalProps?: object;
}

const ColorPicker: React.FC<ColorPickerProps>;
export default ColorPicker;
