import React, { useId } from "react";

import { Slider as AntdSlider, ConfigProvider } from "antd";
import PropTypes from "prop-types";

import Label from "components/Label";
import Typography from "components/Typography";
import { ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES, hyphenize, noop } from "utils";

import { NEETO_UI_PRIMARY_500 } from "./constants";

const Slider = ({
  min = 0,
  max = 100,
  defaultValue = 0,
  onChange = noop,
  value = undefined,
  label,
  required = false,
  labelProps = {},
  error,
  helpText,
  ...otherProps
}) => {
  const _id = useId();
  const id = otherProps.id || _id;
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;

  return (
    <ConfigProvider
      theme={{
        token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
        components: {
          Slider: {
            dotActiveBorderColor: "rgb(var(--neeto-ui-primary-500))",
            dotBorderColor: "rgb(var(--neeto-ui-gray-500))",
            handleActiveColor: "rgb(var(--neeto-ui-primary-600))",
            handleColor: "rgb(var(--neeto-ui-primary-500))",
            railBg: "rgb(var(--neeto-ui-gray-200))",
            railHoverBg: "rgb(var(--neeto-ui-gray-300))",
            trackBg: "rgb(var(--neeto-ui-primary-500))",
            trackBgDisabled: "rgb(var(--neeto-ui-gray-100))",
            trackHoverBg: "rgb(var(--neeto-ui-primary-600))",

            // Global overrides
            colorFillContentHover: "rgb(var(--neeto-ui-gray-600))",
          },
        },
      }}
    >
      <div className="neeto-ui-input__wrapper">
        <div className="neeto-ui-input__label-wrapper">
          {label && (
            <Label
              data-cy={`${hyphenize(label)}-slider-label`}
              htmlFor={id}
              required={required}
              {...labelProps}
            >
              {label}
            </Label>
          )}
        </div>
        <AntdSlider
          {...{ max, min, value, defaultValue, onChange }}
          className="neeto-ui-w-full"
          handleStyle={{ backgroundColor: NEETO_UI_PRIMARY_500 }}
          tooltip={{ formatter: null }}
          trackStyle={{ backgroundColor: NEETO_UI_PRIMARY_500 }}
          {...otherProps}
          id={id}
        />
        {!!error && (
          <Typography
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(label)}-input-error`}
            id={errorId}
            style="body3"
          >
            {error}
          </Typography>
        )}
        {helpText && (
          <Typography
            className="neeto-ui-input__help-text"
            data-cy={`${hyphenize(label)}-input-help`}
            id={helpTextId}
            style="body3"
          >
            {helpText}
          </Typography>
        )}
      </div>
    </ConfigProvider>
  );
};

Slider.propTypes = {
  /**
   * The minimum value the slider can slide to.
   */
  min: PropTypes.number,
  /**
   * The maximum value the slider can slide to.
   */
  max: PropTypes.number,
  /**
   * Callback function that is fired when the user changes the slider's value.
   */
  onChange: PropTypes.func,
  /**
   * The value of slider. When `range` is false, use number, otherwise, use [number, number]
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  /**
   * The value of slider. When `range` is false, use number, otherwise, use [number, number]
   *
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

export default Slider;
