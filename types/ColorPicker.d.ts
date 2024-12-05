import React from "react";
import { DropdownProps } from "./Dropdown";

type PaletteColor = {
  hex?: string;
  colorClassName?: string;
}

export interface ColorPickerProps {
  color: string;
  size: "small" | "medium" | "large";
  onChange: (color: {
    hex: string;
    rgb: { r: number; g: number; b: number, a: number };
  }) => void;
  colorPaletteProps?: {
    color: PaletteColor;
    colorList: PaletteColor[];
    onChange: (PaletteColor) => void;
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
