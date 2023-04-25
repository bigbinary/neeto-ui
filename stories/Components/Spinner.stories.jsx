import React from "react";

import Spinner from "components/Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Spinner } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = args => (
  <div className="flex h-20 w-20 items-center justify-center">
    <Spinner {...args} />
  </div>
);

export const Default = Template.bind({});

export const LightTheme = () => (
  <div className="neeto-ui-bg-black flex h-20 w-20 items-center justify-center">
    <Spinner theme="light" />
  </div>
);
LightTheme.storyName = "Light theme";
