import React from "react";

import {
  Saturation,
  EditableInput,
  Hue,
} from "react-color/lib/components/common";
import tinycolor from "tinycolor2";

const Picker = ({ hexCode, onChange }) => {
  const color = tinycolor(hexCode);

  const handleHueChange = hue => {
    const color = tinycolor(hue);
    onChange(color.toHex());
  };

  const handleSaturationChange = hsv => {
    const color = tinycolor(hsv);
    onChange(color.toHex());
  };

  const CustomSlider = () => <div className="neeto-ui-colorpicker__slider" />;

  const CustomPointer = () => <div className="neeto-ui-colorpicker__pointer" />;

  return (
    <>
      <div
        className="neeto-ui-colorpicker__saturation"
        data-testid="color-picker-saturation"
      >
        <Saturation
          hsl={color.toHsl()}
          hsv={color.toHsv()}
          pointer={CustomPointer}
          onChange={handleSaturationChange}
        />
      </div>
      <div className="neeto-ui-colorpicker__hue" data-testid="color-picker-hue">
        <Hue
          direction="horizontal"
          hsl={color.toHsl()}
          pointer={CustomSlider}
          onChange={handleHueChange}
        />
      </div>
      <div
        className="neeto-ui-colorpicker__input"
        data-cy="colorpicker-editable-input"
      >
        <div className="neeto-ui-text-gray-800 text-sm">#</div>
        <EditableInput value={color.toHex()} onChange={onChange} />
      </div>
    </>
  );
};

export default Picker;
