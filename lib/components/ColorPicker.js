import React, { useState } from "react";
import { SketchPicker } from "react-color";
import classnames from "classnames";

import OutsideClickHandler from "../shared/OutsideClickHandler";

export default function ColorPicker({ handleChange, color, active }) {
  const [displayPicker, setDisplayPicker] = useState(false);

  const handleClose = () => {
    setDisplayPicker(false);
  };

  const decimalToHex = alpha =>
    alpha === 0 ? "00" : Math.round(255 * alpha).toString(16);

  const handleColorChange = color => {
    const hexCode = `${color.hex}${decimalToHex(color.rgb.a)}`;
    handleChange(hexCode);
  };

  const handleClick = () => {
    setDisplayPicker(displayPicker => !displayPicker);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={handleClose}
      className={classnames(
        [
          "p-1 transition-colors duration-300 ease-in-out border border-white rounded-full cursor-pointer"
        ],
        {
          "border-gray-300": active
        }
      )}
    >
      <div
        className={classnames(
          "flex items-center justify-center w-8 h-8 rounded-full border border-gray-200",
          {
            "nh-chat-button--theme": active
          }
        )}
        onClick={handleClick}
      >
        <i className="ri-contrast-drop-line"></i>
      </div>
      {displayPicker && (
        <div className="mt-3 color-picker-popover right-2">
          <SketchPicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </OutsideClickHandler>
  );
}