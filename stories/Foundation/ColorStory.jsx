import React, { Fragment, useState } from "react";

import classnames from "classnames";
import Radio from "../../lib/components/Radio";
import { colorPalette } from "./ColorPalette";
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
        className="mb-8"
        onChange={(event) => setTheme(event.target.value)}
        value={theme}
      >
        <Radio.Item label="Light theme" name="theme" value="light" />
        <Radio.Item label="Dark theme" name="theme" value="dark" />
      </Radio>

      {Object.entries(colorPalette).map(([key, { title, colors }]) => (
        <Fragment key={key}>
          <h5 className="mb-2 neeto-ui-text-black">{title}</h5>
          <div className="flex flex-wrap gap-5 mb-10 demo-color-swatch-wrapper__row">
            {colors.map(({ name, value, text = "white" }) => (
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
                <code>{value[theme]}</code>
                <code>#{tinycolor(`rgb(${value[theme]})`).toHex()}</code>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ColorStory;
