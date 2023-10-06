import React from "react";

import { Slider as AntSlider } from "antd";
import PropTypes from "prop-types";

import { noop } from "utils";

import { NEETO_UI_PRIMARY_500 } from "./constants";

const Slider = ({
  min = 0,
  max = 100,
  defaultValue = 0,
  onChange = noop,
  value = undefined,
  ...otherProps
}) => (
  <AntSlider
    handleStyle={{ backgroundColor: NEETO_UI_PRIMARY_500 }}
    tooltip={{ formatter: null }}
    trackStyle={{ backgroundColor: NEETO_UI_PRIMARY_500 }}
    {...{ max, min, value, defaultValue, onChange }}
    {...otherProps}
  />
);

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
  onChange: PropTypes.number,
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
