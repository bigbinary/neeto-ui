import React from "react";
import classnames from "classnames";
import Tooltip from "./Tooltip";

const Label = ({
  children,
  required = false,
  className = "",
  helpText = "",
  helpTextPosition = "right",
  helpTextSize = null,
  maxLength = null,
  currentLength = null,
  hideCharacterCount = null,
  highLightLength = null,
  ...otherProps
}) => {
  let isValidLength = false;

  if (highLightLength) {
    isValidLength =
      currentLength >= highLightLength[0] &&
      currentLength <= highLightLength[1];
  }

  return (
    <div
      className={classnames(
        ["nui-label", className],
        {
          "w-full": maxLength
        }
      )}
    >
      <div className="flex flex-row">
        <label className="m-0" {...otherProps}>
          {children}
          {required && (
            <span className="ml-0.5">*</span>
          )}
        </label>
        {helpText && (
          <Tooltip
            content={helpText}
            position={helpTextPosition}
            size={helpTextSize}
            className="ml-1"
          >
            <div className="flex text-lg text-gray-400">
              <i className="ri-question-fill"></i>
            </div>
          </Tooltip>
        )}
      </div>
      {maxLength && !hideCharacterCount && (
        <span className="text-xs font-normal text-gray-500">
          <span
            className={classnames({
              "text-green-500": isValidLength,
              "text-red-500": highLightLength && !isValidLength
            })}
          >
            {currentLength}
          </span>
          /{maxLength}
        </span>
      )}
    </div>
  );
};

export default Label;