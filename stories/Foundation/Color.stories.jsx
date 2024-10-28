import React from "react";

import { useDarkMode } from "storybook-dark-mode";

import ColorStory from "./ColorStory";

// eslint-disable-next-line import/exports-last
export const Colors = () => {
  const isDarkMode = useDarkMode();

  return <ColorStory {...{ isDarkMode }} />;
};

Colors.decorators = [
  Story => (
    <>
      <style>
        {`
            .demo-color-swatch-wrapper{
              background-color: rgb(var(--neeto-ui-body-bg));
            }

            .demo-color-swatch{
              width: 200px;
              height: 100px;
              border-radius: 5px;
              padding: 12px;
              font-size: 12px;
              display:flex;
              flex-direction:column;
              gap:12px;
            }
            .demo-color-swatch code{
              background:transparent;
              padding:0;
              outline:0;
              border:0;
              color: inherit;
              font-size: inherit;
            }
            .demo-color-swatch code:nth-child(2){
              font-weight:bold;
            }
          `}
      </style>
      <div className="neeto-ui-bg-white neeto-ui-text-black gap-12 p-16">
        <h1 className="neeto-ui-text-black">Colors</h1>
        <Story />
      </div>
    </>
  ),
];

export default {
  title: "Foundation/Colors",
  tags: ["!autodocs"],
  defaultTheme: "light",
};
