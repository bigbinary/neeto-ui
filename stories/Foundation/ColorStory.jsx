import React, { Fragment, useState } from "react";

import classnames from "classnames";
import Radio from "../../lib/components/Radio";
import { colorPaletteMap } from "./ColorPalette";
import tinycolor from "tinycolor2";

const ColorStory = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={classnames(
        "demo-color-swatch-wrapper p-10 rounded border neeto-ui-border-gray-300",
        {
          "neeto-ui-theme--dark": theme === "dark",
        }
      )}
    >
      <Radio
        className="flex justify-end items-center mb-8 w-full"
        onChange={(event) => setTheme(event.target.value)}
        value={theme}
      >
        <Radio.Item label="Light theme" name="theme" value="light" />
        <Radio.Item label="Dark theme" name="theme" value="dark" />
      </Radio>
      {Object.entries(colorPaletteMap).map(([key, { title, colors }]) => (
        <Fragment key={key}>
          <h5 className="mb-2">{title}</h5>
          <div className="demo-color-swatch-wrapper__row mb-10 flex flex-wrap gap-5">
            {colors.map(({ name, [theme]: { value }, text = "white" }) => (
              <div
                key={name}
                className={classnames(
                  "demo-color-swatch border neeto-ui-border-gray-300",
                  name.replace("neeto-ui", "neeto-ui-bg"),
                  {
                    "neeto-ui-text-black": text === "black",
                    "neeto-ui-text-white": text === "white",
                  }
                )}
              >
                <code>--{name}</code>
                <code>{value}</code>
                <code>#{tinycolor(`rgb(${value})`).toHex()}</code>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ColorStory;
