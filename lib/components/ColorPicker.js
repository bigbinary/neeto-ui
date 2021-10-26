import React from "react";
import { CustomPicker } from "react-color";
import tinycolor from "tinycolor2";
import {
  Saturation,
  EditableInput,
  Hue,
} from "react-color/lib/components/common";
import PropTypes from "prop-types";

import ColorPalette from "./ColorPalette";
import Dropdown from "./Dropdown";

const CustomSlider = () => {
  return <div className="neeto-ui-colorpicker__slider" />;
};

const CustomPointer = () => {
  return <div className="neeto-ui-colorpicker__pointer" />;
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
      <div className="neeto-ui-colorpicker__saturation">
        <Saturation
          hsl={color.toHsl()}
          hsv={color.toHsv()}
          pointer={CustomPointer}
          onChange={handleSaturationChange}
        />
      </div>
      <div className="neeto-ui-colorpicker__hue">
        <Hue
          hsl={color.toHsl()}
          pointer={CustomSlider}
          onChange={handleHueChange}
          direction={"horizontal"}
        />
      </div>
      <div
        className="neeto-ui-colorpicker__input"
        data-cy="colorpicker-editable-input"
      >
        <div className="text-sm text-gray-800">#</div>
        <EditableInput value={color.toHex()} onChange={onChange} />
      </div>
    </>
  );
};

const ColorPicker = ({ color, onChange, colorPaletteProps = null }) => {
  const Target = () => {
    return (
      <div
        className="neeto-ui-colorpicker__target"
        data-cy="color-picker-target"
      >
        <div className="neeto-ui-colorpicker-target__color">
          <div style={{ backgroundColor: color }} />
        </div>
        <div className="neeto-ui-colorpicker-target__code">{color}</div>
      </div>
    );
  };

  return (
    <Dropdown
      label={color}
      closeOnSelect={false}
      position="bottom-start"
      customTarget={() => <Target />}
      className="w-full"
      targetClassName="w-full"
    >
      <div className="neeto-ui-colorpicker__popover">
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

ColorPicker.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  colorPaletteProps: PropTypes.shape({
    color: PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
    }),
    colorList: PropTypes.arrayOf(
      PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
    onChange: PropTypes.func,
  }),
};

export default CustomPicker(ColorPicker);
