import React from "react";
import { CustomPicker } from "react-color";

const {
  Saturation,
  EditableInput,
  Hue,
} = require("react-color/lib/components/common");
const tinycolor = require("tinycolor2");

import ColorPalette from "./ColorPalette";
import Dropdown from "./Dropdown";

const CustomSlider = () => {
  return <div className="nui-colorpicker__slider" />;
};

const CustomPointer = () => {
  return <div className="nui-colorpicker__pointer" />;
};

const CustomColorPicker = ({ hexCode, onChange }) => {
  const color = tinycolor(hexCode);

  const handleHueChange = (hue) => {
    const color = tinycolor(hue);
    onChange(color.toHex());
  };

  const handleSaturationChange = (hsv) => {
    const color = tinycolor(hsv);
    onChange(color.toHex());
  };

  return (
    <>
      <div className="nui-colorpicker__saturation">
        <Saturation
          hsl={color.toHsl()}
          hsv={color.toHsv()}
          pointer={CustomPointer}
          onChange={handleSaturationChange}
        />
      </div>
      <div className="nui-colorpicker__hue">
        <Hue
          hsl={color.toHsl()}
          pointer={CustomSlider}
          onChange={handleHueChange}
          direction={"horizontal"}
        />
      </div>
      <div className="nui-colorpicker__input">
        <div className="text-sm text-gray-800">#</div>
        <EditableInput
          value={color.toHex()}
          onChange={onChange}
          data-cy="colorpicker-editable-input"
        />
      </div>
    </>
  );
};

const ColorPicker = ({ color, onChange, colorPaletteProps = null }) => {
  const Target = () => {
    return (
      <div className="nui-colorpicker__target" data-cy="color-picker-target">
        <div className="nui-colorpicker-target__color">
          <div style={{ backgroundColor: color }} />
        </div>
        <div className="nui-colorpicker-target__code">{color}</div>
      </div>
    );
  };

  return (
    <Dropdown
      label={color}
      closeOnSelect={false}
      position="bottom-left"
      customTarget={() => <Target />}
      className="w-full"
      targetClassName="w-full"
    >
      <div className="nui-colorpicker__popover">
        <CustomColorPicker hexCode={color || "#000000"} onChange={onChange} />
        {colorPaletteProps && (
          <div className="mt-3">
            <ColorPalette {...colorPaletteProps} />
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default CustomPicker(ColorPicker);
