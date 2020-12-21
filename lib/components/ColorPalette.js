import React from "react";
import classnames from "classnames";

const ColorPalette = ({ colors, selectedColor, handleColorChange }) => {
  return colors.map(item => (
    <div
      className={classnames(
        "p-1 rounded-full cursor-pointer border transition-colors ease-in-out duration-300",
        {
          "border-gray-300":
            selectedColor &&
            selectedColor.from === item.from &&
            selectedColor.to === item.to,
          "border-white":
            !selectedColor ||
            (selectedColor.from != item.from && selectedColor.to != item.to)
        }
      )}
      onClick={() => handleColorChange(item.from, item.to)}
      key={item.from}
    >
      <div
        className={classnames(
          "w-8 h-8 rounded-full bg-gray-50 bg-gradient-to-r",
          `from-${item.from}`,
          `to-${item.to}`
        )}
      ></div>
    </div>
  ));
};

export default ColorPalette;