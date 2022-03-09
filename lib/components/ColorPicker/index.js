import React from "react";
import { CustomPicker } from "react-color";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown";
import Palette from "./Palette";
import Picker from "./Picker";

const ColorPicker = CustomPicker(
  ({ color = "", onChange = () => {}, colorPaletteProps = null }) => {
    const Target = () => (
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

    return (
      <Dropdown
        label={color}
        closeOnSelect={false}
        position="bottom-start"
        customTarget={<Target />}
        className="w-full"
      >
        <div className="neeto-ui-colorpicker__popover">
          <Picker hexCode={color || "#000000"} onChange={onChange} />
          {colorPaletteProps && (
            <div className="mt-3">
              <Palette {...colorPaletteProps} />
            </div>
          )}
        </div>
      </Dropdown>
    );
  }
);

ColorPicker.propTypes = {
  /**
   * To specify the color value.
   */
  color: PropTypes.string,
  /**
   * To specify the action to be triggered on changing the color.
   */
  onChange: PropTypes.func,
  /**
   * To specify the props to be passed to the Palette component.
   */
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

export default ColorPicker;
