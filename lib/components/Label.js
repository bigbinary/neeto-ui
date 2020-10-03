import React from "react";
import classnames from "classnames";
import Tooltip from "./Tooltip";

const Label = ({
  children,
  required,
  className,
  helpText,
  helpTextPosition = "right",
  helpTextSize,
  maxLength,
  currentLength,
  hideCharacterCount
}) => {
  return (
    <div
      className={classnames(
        ["flex flex-row items-center justify-between nui-label", className],
        {
          "w-full": maxLength
        }
      )}
    >
      <div className="flex flex-row">
        <label className="m-0">
          {children}
          {required && "*"}
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
          {currentLength}/{maxLength}
        </span>
      )}
    </div>
  );
};

export default Label;
