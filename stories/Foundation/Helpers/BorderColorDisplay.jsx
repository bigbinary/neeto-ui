import React from "react";

import { colorPaletteList } from "../ColorPalette";

const BorderColorDisplay = ({ isDarkMode }) => {
  const theme = isDarkMode ? "dark" : "light";

  return (
    <div className="neeto-ui-bg-white neeto-ui-text-black box-border flex min-h-screen flex-col justify-center gap-12 p-16">
      <h1 className="neeto-ui-text-black">Border Color</h1>
      <table className="story-demo-table">
        <thead>
          <tr>
            <td />
            <td>RGB code</td>
            <td>Class</td>
          </tr>
        </thead>
        <tbody>
          {colorPaletteList(theme).map(color => (
            <tr key={color.name}>
              <td>
                <div
                  className={`h-12 w-12 border ${color.name.replace(
                    "--neeto-ui",
                    "neeto-ui-border"
                  )}`}
                />
              </td>
              <td>
                <code>{color.value}</code>
              </td>
              <td>
                <div className="flex justify-between">
                  <code>
                    {color.name.replace("--neeto-ui", "neeto-ui-border")}
                  </code>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorderColorDisplay;
