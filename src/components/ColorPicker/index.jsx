import React, { useState, useRef } from "react";

import classnames from "classnames";
import { Down, Focus } from "neetoicons";
import PropTypes from "prop-types";
import {
  HexColorPicker,
  HexColorInput,
  HexAlphaColorPicker,
} from "react-colorful";
import tinycolor from "tinycolor2";
import useEyeDropper from "use-eye-dropper";

import Button from "components/Button";
import Dropdown from "components/Dropdown";
import "styles/common";
import "styles/components/_color-picker";
import { noop } from "utils";

import Palette from "./Palette";

const TARGET_SIZES = {
  large: "large",
  medium: "medium",
  small: "small",
};

const ColorPicker = ({
  color = "",
  size = TARGET_SIZES.large,
  onChange = noop,
  colorPaletteProps,
  dropdownProps,
  showEyeDropper = false,
  showHexValue = false,
  showTransparencyControl = false,
  showPicker = true,
}) => {
  const [colorInternal, setColorInternal] = useState(color);
  const isInputChanged = useRef(false);
  const { open, isSupported } = useEyeDropper({ pickRadius: 3 });

  const PickerComponent = showTransparencyControl
    ? HexAlphaColorPicker
    : HexColorPicker;

  const colorValue = color ?? colorInternal ?? "";

  const onChangeInternal = onChange || setColorInternal;

  const getColor = colorValue => {
    const color = tinycolor(colorValue);

    return {
      hex: showTransparencyControl ? color.toHex8String() : color.toHexString(),
      rgb: color.toRgb(),
    };
  };

  const onColorInputChange = hex => {
    const color = tinycolor(hex);
    const rgb = color.toRgb();
    isInputChanged.current = true;

    onChangeInternal({ hex, rgb });
  };

  const onPickerChange = hex => onChangeInternal(getColor(hex));

  const onBlur = () => {
    // If input is not changed, don't call onChange on blur
    if (!isInputChanged.current) return;
    isInputChanged.current = false;
    onChangeInternal(getColor(colorValue));
  };

  const pickColor = async () => {
    try {
      const colorResponse = await open();
      const colorHex = tinycolor(colorResponse.sRGBHex).toHexString();
      onPickerChange(colorHex);
    } catch {
      // Ensures component is still mounted
      // before calling setState
      // if (!e.canceled) setError(e);
    }
  };

  const Target = ({ size }) => (
    <button
      data-cy="color-picker-target"
      data-testid="neeto-color-picker"
      type="button"
      className={classnames("neeto-ui-colorpicker__target", {
        "neeto-ui-colorpicker__target-size--large": size === TARGET_SIZES.large,
        "neeto-ui-colorpicker__target-size--medium":
          size === TARGET_SIZES.medium,
        "neeto-ui-colorpicker__target-size--small": size === TARGET_SIZES.small,
      })}
    >
      {showHexValue && (
        <span className="neeto-ui-colorpicker-target__code">{color}</span>
      )}
      <span className="neeto-ui-colorpicker-target__color-wrapper">
        <span
          className="neeto-ui-colorpicker-target__color neeto-ui-border-gray-400 border"
          style={{ backgroundColor: colorValue }}
        />
        <span className="neeto-ui-colorpicker-target__icon">
          <Down size={16} />
        </span>
      </span>
    </button>
  );

  return (
    <Dropdown
      className="neeto-ui-colorpicker__dropdown"
      closeOnSelect={false}
      customTarget={<Target {...{ size }} />}
      label={colorValue}
      position="bottom-start"
      {...dropdownProps}
    >
      <div className="neeto-ui-colorpicker__popover">
        {showPicker && (
          <>
            <div
              className="neeto-ui-colorpicker__pointer"
              data-testid="neeto-color-picker-section"
            >
              <PickerComponent color={colorValue} onChange={onPickerChange} />
            </div>
            <div className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-mt-2 neeto-ui-gap-2">
              {showEyeDropper && isSupported() && (
                <Button
                  className="neeto-ui-colorpicker__eyedropper-btn"
                  icon={Focus}
                  size="small"
                  style="text"
                  type="button"
                  onClick={pickColor}
                />
              )}
              <div className="neeto-ui-input__wrapper">
                <div
                  className="neeto-ui-colorpicker__input neeto-ui-input neeto-ui-input--small"
                  data-cy="colorpicker-editable-input"
                >
                  <HexColorInput
                    {...{ onBlur }}
                    alpha={!!showTransparencyControl}
                    color={colorValue}
                    onChange={onColorInputChange}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {colorPaletteProps && (
          <div
            data-testid="color-palette"
            className={classnames("neeto-ui-colorpicker__palette-wrapper", {
              "neeto-ui-colorpicker__palette-wrapper--hidden-picker":
                !showPicker,
            })}
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
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-success mb-2">
   * New
   * </div>
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
  /**
   * Shows eye dropper to pick color.
   */
  showEyeDropper: PropTypes.bool,
  /**
   * To show hex value near to the color in the dropdown.
   * By default it will be hidden.
   */
  showHexValue: PropTypes.bool,
  /**
   * To show transparency control. By default it will be hidden.
   */
  showTransparencyControl: PropTypes.bool,
  /**
   * To show the color picker. Used to hide the picker in cases where only palette is required. By default it will be true.
   */
  showPicker: PropTypes.bool,
};

export default ColorPicker;
