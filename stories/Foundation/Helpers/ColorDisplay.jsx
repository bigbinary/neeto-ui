import React from "react";

import ColorGraphic from "../../assets/images/color-graphic.png";
import { colorPaletteList, getColorPaletteList } from "../ColorPalette.js";

const ColorPaletteTable = ({ theme }) => (
  <table className="story-demo-table">
    <thead>
      <tr>
        <td style={{ width: "75px" }} />
        <td>RGB code</td>
        <td>CSS Variable name</td>
        <td>Text color class</td>
        <td>Background color class</td>
      </tr>
    </thead>
    <tbody>
      {colorPaletteList(theme).map(color => (
        <tr key={color.name}>
          <td>
            <div
              className={`neeto-ui-rounded-full h-12 w-12 cursor-pointer shadow-xl ${color.name.replace(
                "--neeto-ui",
                "neeto-ui-bg"
              )}`}
            />
          </td>
          <td>
            <code>{color.value}</code>
          </td>
          <td>
            <code>{color.name}</code>
          </td>
          <td>
            <div className="flex justify-between">
              <code>{color.name.replace("--neeto-ui", "neeto-ui-text")}</code>
              <b
                className={`ml-2 ${color.name.replace(
                  "--neeto-ui",
                  "neeto-ui-text"
                )}`}
              >
                Aa
              </b>
            </div>
          </td>
          <td className={color.name.replace("--neeto-ui", "neeto-ui-bg")}>
            <code>{color.name.replace("--neeto-ui", "neeto-ui-bg")}</code>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ColorRoleTable = ({ colorGroups, theme }) => (
  <table className="story-demo-table">
    <thead>
      <tr>
        <td style={{ width: "75px" }} />
        <td>Color</td>
        <td>Usage</td>
      </tr>
    </thead>
    <tbody>
      {getColorPaletteList(colorGroups, theme)
        .filter(color => color.usage !== undefined)
        .map(color => (
          <tr key={color.name}>
            <td>
              <div
                className={`neeto-ui-rounded-full h-12 w-12 cursor-pointer shadow-xl ${color.name.replace(
                  "--neeto-ui",
                  "neeto-ui-bg"
                )}`}
              />
            </td>
            <td>
              <code>{color.name}</code>
            </td>
            <td>{color.usage}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

const ColorUsageGuide = () => (
  <div className="mt-8">
    <h2 className="mb-4 text-2xl font-bold" id="how-to-use-colors">
      How to use colors for product UI?
    </h2>
    <p className="mb-4">We can utilize the colors in two formats:</p>
    <ul className="mb-6 ml-6 list-disc">
      <li>As CSS variables</li>
      <li>As classnames</li>
    </ul>
    <h3 className="mb-4 text-xl font-bold">As CSS variables</h3>
    <p className="mb-4">
      An example would be{" "}
      <code className="neeto-ui-rounded neeto-ui-bg-gray-100 px-2 py-1">
        --neeto-ui-white
      </code>
      , which translates to RGB code{" "}
      <code className="neeto-ui-rounded neeto-ui-bg-gray-100 px-2 py-1">
        255, 255, 255
      </code>
      . We can use this variable in our CSS using the var() function.
    </p>
    <pre className="neeto-ui-rounded neeto-ui-bg-gray-100 mb-6 p-4">
      <code>
        {`a {
color: rgb(var(--neeto-ui-white));
}`}
      </code>
    </pre>
    <h4 className="mb-2 text-lg font-bold">Adding transparency in color</h4>
    <pre className="neeto-ui-rounded neeto-ui-bg-gray-100 mb-6 p-4">
      <code>
        {`a {
color: rgba(var(--neeto-ui-primary-600), 0.5);
}`}
      </code>
    </pre>
    <h3 className="mb-4 text-xl font-bold">As Classnames</h3>
    <ul className="ml-6 list-disc">
      <li className="mb-2">
        Use{" "}
        <a className="text-blue-600 hover:underline" href="#color-palette">
          color utility classes
        </a>{" "}
        to apply color to the background of elements, text, and borders.
      </li>
      <li className="mb-2">
        Use{" "}
        <a className="text-blue-600 hover:underline" href="#color-palette">
          background utility classes
        </a>{" "}
        to set the background color of an element.
      </li>
      <li className="mb-2">
        Use{" "}
        <a
          className="text-blue-600 hover:underline"
          href="/docs/foundation-helpers-border-color--page"
        >
          border utilities
        </a>{" "}
        to set the border color of an element.
      </li>
    </ul>
  </div>
);

const ColorDisplay = ({ isDarkMode }) => {
  const theme = isDarkMode ? "dark" : "light";

  return (
    <div className="neeto-ui-bg-white neeto-ui-text-black box-border flex min-h-screen flex-col justify-center gap-4 p-16">
      <style>
        {`
          .story-demo-table {
            table-layout: fixed;
          }
          .story-demo-table tr {
            background: transparent !important;
          }
        `}
      </style>
      <h1 className="neeto-ui-text-black">Colors</h1>
      <p>
        Colors play a crucial role in creating visually appealing and consistent
        user interfaces. This guide provides a comprehensive overview of the
        colors in the neetoUI design system.
      </p>
      <img
        className="neeto-ui-rounded-lg border-2 border-solid p-1"
        src={ColorGraphic}
        width={800}
      />
      <h2 className="neeto-ui-text-black">Color palette</h2>
      <p>
        The neetoUI color palette is carefully curated to provide a harmonious
        and visually appealing experience. It consists of primary, gray, status
        and pastel colors.
      </p>
      <ColorPaletteTable {...{ theme }} />
      <h2 className="neeto-ui-text-black">Color roles</h2>
      <p>
        Colors have assigned roles, which hold a specific meaning based on how
        they function within the interface.
      </p>
      <h3 className="neeto-ui-text-black">Primary</h3>
      <p>The primary color is the most dominant color in our brand identity.</p>
      <ColorRoleTable {...{ theme }} colorGroups={["PRIMARY"]} />
      <h3 className="neeto-ui-text-black">Gray</h3>
      <ColorRoleTable {...{ theme }} colorGroups={["BASE", "GRAY"]} />
      <h3 className="neeto-ui-text-black">Semantic colors</h3>
      <p>
        These are the colors that communicate purpose. They help users convey
        messages.
      </p>
      <ColorRoleTable
        {...{ theme }}
        colorGroups={["SUCCESS", "ERROR", "WARNING", "INFO"]}
      />
      <br />
      <h2 className="neeto-ui-text-black">Design</h2>
      <iframe
        allowFullScreen
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Ft2CLe7RVJYwUq9E8Or1mQA%2F01-Fundamentals%3Fnode-id%3D20%253A2"
        width="100%"
      />
      <br />
      <ColorUsageGuide />
    </div>
  );
};

export default ColorDisplay;
