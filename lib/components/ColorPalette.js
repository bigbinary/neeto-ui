import React from "react";
import classnames from "classnames";

const COLORS = [
  { from: "purple-1000", to: "purple-1050", hexCode: "#6671E5" },
  { from: "ash-1000", to: "ash-1050", hexCode: "#606C88" },
  { from: "kimoby-1000", to: "kimoby-1050", hexCode: "#396AFC" },
  { from: "turquoise-1000", to: "turquoise-1050", hexCode: "#136A8A" },
  { from: "shrimpy-1000", to: "shrimpy-1050", hexCode: "#E43A15" },
  { from: "veryblue-1000", to: "veryblue-1050", hexCode: "#0575E6" },
  { from: "fbmessenger-1000", to: "fbmessenger-1050", hexCode: "#00C6FF" }
];

const ColorPalette = ({ color, onChange }) => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-start">
      {COLORS.map((item, index) => (
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