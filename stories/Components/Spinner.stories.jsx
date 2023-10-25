import React from "react";

import Spinner from "components/Spinner";

import SpinnerStoriesDocs from "!raw-loader!./SpinnerStoriesDocs.mdx";

const metadata = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "padded",
    docs: { description: { component: SpinnerStoriesDocs } },
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

export { Default, LightTheme };

export default metadata;
