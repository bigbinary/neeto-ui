import React from "react";
import { CustomPicker } from "react-color";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Down } from "@bigbinary/neeto-icons";

import Dropdown from "../Dropdown";
import Palette from "./Palette";
import Picker from "./Picker";

const TARGET_SIZES = {
  large: "large",
  small: "small",
};

const ColorPicker = ({
  color = "",
  size = "large",
  onChange = () => {},
  colorPaletteProps = null,
}) => {
  const Target = ({ size }) => (
    <div
      data-cy="color-picker-target"
      className={classnames("neeto-ui-colorpicker__target", {
        "neeto-ui-colorpicker__target-size--large": size === TARGET_SIZES.large,
        "neeto-ui-colorpicker__target-size--small": size === TARGET_SIZES.small,
      })}
    >
      <div className="neeto-ui-colorpicker-target__code">{color}</div>
      <div className="neeto-ui-colorpicker-target__color-wrapper">
        <div className="neeto-ui-colorpicker-target__color neeto-ui-shadow-xs" style={{ backgroundColor: color }} />
        <div className="neeto-ui-colorpicker-target__icon">
          <Down size={16} />
        </div>
      </div>
    </div>
  );

  return (
    <Dropdown
      label={color}
      closeOnSelect={false}
      position="bottom-start"
      customTarget={<Target size={size} />}
      className="neeto-ui-colorpicker__dropdown"
    >
      <div className="neeto-ui-colorpicker__popover">
        <Picker hexCode={color || "#000000"} onChange={onChange} />
        {colorPaletteProps && (
          <div
            className="neeto-ui-colorpicker__palette-wrapper"
            data-testid="color-palette"
          >
            <Palette {...colorPaletteProps} />
          </div>
        )}
      </div>
    </Dropdown>
  );
};

ColorPicker.propTypes = {
  /**
   * To specify the color value.
   */
  color: PropTypes.string,
  /**
   * To set the size of the target.
   */
  size: PropTypes.oneOf(Object.values(TARGET_SIZES)),
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

export const ColorPickerComponent = ColorPicker;
export default CustomPicker(ColorPicker);
