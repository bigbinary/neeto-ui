import React from "react";

import Spinner from "../../lib/components/Spinner";

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

const Template = (args) => (
  <div className="flex items-center justify-center w-20 h-20">
    <Spinner {...args} />
  </div>
);

export const Default = Template.bind({});

export const LightTheme = () => {
  return (
    <div className="flex items-center justify-center w-20 h-20 neeto-ui-bg-black">
      <Spinner theme="light" />
    </div>
  );
};
LightTheme.storyName = "Light theme";
