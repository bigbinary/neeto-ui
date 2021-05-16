import React from "react";
import classnames from "classnames";

const ColorPalette = ({ color, colorList, onChange }) => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-start">
      {colorList.map((item, index) => (
        <div
          key={index}
          className={classnames("nui-color-palette__item", {
            active: color && color.from === item.from && color.to === item.to
          })}
          onClick={() => onChange(item.from, item.to)}
        >
          <div className={`bg-gradient-to-r from-${item.from} to-${item.to}`} />
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;