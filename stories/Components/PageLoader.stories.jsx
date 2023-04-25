import React from "react";

import PageLoader from "components/PageLoader";

export default {
  title: "Components/PageLoader",
  component: PageLoader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { PageLoader } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = args => (
  <div className="h-screen w-full">
    <PageLoader {...args} />
  </div>
);

export const Default = Template.bind({});

export const LoadingText = () => (
  <div className="h-screen w-full">
    <PageLoader text="Loading..." />
  </div>
);
LoadingText.storyName = "Loading text";
