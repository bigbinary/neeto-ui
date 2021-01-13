import React from "react";
import { Slider as BPSlider } from "@blueprintjs/core";

const Slider = ({
  min,
  max,
  stepSize,
  labelStepSize,
  value,
  onChange}) => {
  return(
    <BPSlider
      min={min}
      max={max}
      stepSize={stepSize}
      labelStepSize={labelStepSize}
      value={value}
      onChange={onChange}
    />
  );
};

export default Slider;