import React, { useState, useRef } from "react";

import classnames from "classnames";
import { Down, ColorPicker as ColorPickerIcon } from "neetoicons";
import PropTypes from "prop-types";
import {
  HexColorPicker,
  HexColorInput,
  HexAlphaColorPicker,
} from "react-colorful";
import { useTranslation } from "react-i18next";
import tinycolor from "tinycolor2";
import useEyeDropper from "use-eye-dropper";

import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Typography from "components/Typography";
import { getLocale, noop } from "utils";

import useRecentlyUsedColors from "./hooks/useRecentlyUsedColors";
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
  dropdownProps,
  showEyeDropper = true,
  showHexValue = false,
  showTransparencyControl = false,
  showPicker = true,
  portalProps,
  colorPalette,
  showRecentlyUsedColors = showPicker,
}) => {
  const { t, i18n } = useTranslation();
  const [colorInternal, setColorInternal] = useState(color);
  const [isColorSelected, setIsColorSelected] = useState(false);
  const hexColorInputValue = useRef("");
  const { open, isSupported } = useEyeDropper({ pickRadius: 3 });
  const [recentlyUsedColors, setRecentlyUsedColors] = useRecentlyUsedColors();

  const PickerComponent = showTransparencyControl
    ? HexAlphaColorPicker
    : HexColorPicker;

  const colorValue = color ?? colorInternal ?? "";

  const getColor = colorValue => {
    const color = tinycolor(colorValue);

    if (color.isValid()) {
      let hex = color.toHexString();
      // return `transparent` for transparent colors.
      if (color.getAlpha() === 0) hex = colorValue;
      else if (showTransparencyControl) hex = color.toHex8String();

      return { hex, rgb: color.toRgb() };
    }

    return { hex: colorValue, rgb: colorValue };
  };

  const onColorChange = color => {
    setIsColorSelected(true);
    const changeHandler = onChange ?? setColorInternal;

    changeHandler(getColor(color));
  };

  const onColorInputChange = hex => {
    // HexColorInput onChange will trigger only if the input value is a valid color
    hexColorInputValue.current = hex;
    if (hex.length !== (showTransparencyControl ? 9 : 7)) return;

    onColorChange(hex);
    hexColorInputValue.current = "";
  };

  const onBlur = () => {
    if (!hexColorInputValue.current) return;

    onColorChange(hexColorInputValue.current);
    hexColorInputValue.current = "";
  };

  const pickColor = async () => {
    try {
      const colorResponse = await open();
      const hex = tinycolor(colorResponse.sRGBHex).toHexString();
      onColorChange(hex);
    } catch {
      // Ensures component is still mounted
      // before calling setState
      // if (!e.canceled) setError(e);
    }
  };

  const onClose = () => {
    if (!showRecentlyUsedColors || !isColorSelected) return;

    const newColor = getColor(colorValue);

    const recentColorsExcludingNew = recentlyUsedColors.filter(
      ({ hex }) => hex !== newColor.hex
    );

    const updatedColors = [newColor, ...recentColorsExcludingNew];

    if (updatedColors.length > 14) updatedColors.pop();

    setRecentlyUsedColors(updatedColors);
    setIsColorSelected(false);
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
          className="neeto-ui-colorpicker-target__color neeto-ui-border-gray-200"
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
      {...{ ...dropdownProps, onClose }}
      dropdownProps={{ ...dropdownProps?.dropdownProps, ...portalProps }}
    >
      <div className="neeto-ui-colorpicker__popover">
        {showPicker && (
          <>
            <div
              className="neeto-ui-colorpicker__pointer"
              data-testid="neeto-color-picker-section"
            >
              <PickerComponent color={colorValue} onChange={onColorChange} />
            </div>
            <div className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-mt-3 neeto-ui-gap-2">
              {showEyeDropper && isSupported() && (
                <Button
                  className="neeto-ui-colorpicker__eyedropper-btn"
                  icon={ColorPickerIcon}
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
                    prefixed
                    alpha={!!showTransparencyControl}
                    color={colorValue}
                    data-cy="colorpicker-editable-input-textbox"
                    onChange={onColorInputChange}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div
          data-testid="color-palette"
          className={classnames("neeto-ui-colorpicker__palette-wrapper", {
            "neeto-ui-colorpicker__palette-wrapper--hidden-picker": !showPicker,
            "neeto-ui-pt-3 neeto-ui-border-t neeto-ui-border-gray-200":
              showPicker,
          })}
        >
          <Palette
            {...{ color }}
            colorList={colorPalette}
            onChange={onColorChange}
          />
        </div>
        {showRecentlyUsedColors && recentlyUsedColors.length > 0 && (
          <div
            className="neeto-ui-colorpicker__palette-wrapper neeto-ui-border-t neeto-ui-border-gray-200 neeto-ui-pt-3"
            data-testid="color-palette-recently-used"
          >
            <Typography
              className="neeto-ui-text-gray-600 mb-2"
              style="body3"
              weight="medium"
            >
              {getLocale(i18n, t, "neetoui.colorPicker.recentlyUsed")}
            </Typography>
            <Palette colorList={recentlyUsedColors} onChange={onColorChange} />
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
   * To specify the colors shown in the palette.
   */
  colorPalette: PropTypes.arrayOf(
    PropTypes.shape({ hex: PropTypes.string, rgb: PropTypes.string })
  ),
  /**
   * Shows eye dropper to pick color.
   */
  showEyeDropper: PropTypes.bool,
  /**
   * To show hex value near to the color in the dropdown.
   * By default it will be enabled.
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
  /**
   * To specify the props to be passed to the dropdown portal.
   */
  portalProps: PropTypes.object,
  /**
   * To show the recently used colors.
   */
  showRecentlyUsedColors: PropTypes.bool,
};

export default ColorPicker;
