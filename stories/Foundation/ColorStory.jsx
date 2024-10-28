import React from "react";

import classnames from "classnames";
import tinycolor from "tinycolor2";

import { colorPalette } from "./ColorPalette";

const ColorStory = ({ isDarkMode }) => {
  const theme = isDarkMode ? "dark" : "light";

  return (
    <div
      className={classnames(
        "demo-color-swatch-wrapper neeto-ui-border-gray-300 neeto-ui-rounded border p-10",
        { "neeto-ui-theme--dark": isDarkMode }
      )}
    >
      {Object.entries(colorPalette).map(([key, { title, colors }]) => (
        <React.Fragment key={key}>
          <h5 className="neeto-ui-text-black mb-2">{title}</h5>
          <div className="demo-color-swatch-wrapper__row mb-10 flex flex-wrap gap-5">
            {colors.map(({ name, value, text = "white" }) => (
              <div
                key={name}
                className={classnames(
                  "demo-color-swatch neeto-ui-border-gray-300 border",
                  name.replace("neeto-ui", "neeto-ui-bg"),
                  {
                    "neeto-ui-text-black": text === "black",
                    "neeto-ui-text-white": text === "white",
                  }
                )}
              >
                <code>--{name}</code>
                <code>{value[theme]}</code>
                <code>#{tinycolor(`rgb(${value[theme]})`).toHex()}</code>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ColorStory;
