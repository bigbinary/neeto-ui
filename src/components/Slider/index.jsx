import React, { useId } from "react";

import { Slider as AntdSlider } from "antd";
import PropTypes from "prop-types";

import Label from "components/Label";
import Typography from "components/Typography";
import { hyphenize, noop } from "utils";

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
    <div className="neeto-ui-slider__wrapper">
      <div className="neeto-ui-slider__label-wrapper">
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
        className="w-full"
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
