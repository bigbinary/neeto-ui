import React from "react";

import Spinner from "components/Spinner";

const metadata = {
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

const Default = Template.bind({});

const LightTheme = args => (
  <div className="neeto-ui-bg-black flex h-20 w-20 items-center justify-center">
    <Spinner {...args} theme="light" />
  </div>
);
LightTheme.storyName = "Light theme";

const SizeCutomization = args => (
  <div className="flex items-center gap-8">
    <div className="flex h-20 w-20 items-center justify-center">
      <Spinner {...args} />
    </div>
    <div className="flex h-20 w-20 items-center justify-center">
      <Spinner {...args} size={32} />
    </div>
  </div>
);
SizeCutomization.storyName = "Size Cutomization";

export { Default, LightTheme, SizeCutomization };

export default metadata;
