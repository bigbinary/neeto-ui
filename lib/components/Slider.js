import React from "react";
import classnames from "classnames";
import { Slider as BPSlider } from "@blueprintjs/core";

import Label from "./Label";

const Slider = ({
  label,
  labelProps,
  required,
  helpText,
  className,
  ...otherProps
  }) => {
  return(
    <div
      className={classnames([
        "flex flex-col items-start justify-start flex-grow",
        className
      ])}
    >
    {label && (
      <Label
        label={label}
        required={required}
        helpText={helpText}
        className="mb-1"
        {...labelProps}
      >
        {label}
      </Label>
    )}
    <BPSlider
      {...otherProps}
    />
    </div>
  );
};

export default Slider;