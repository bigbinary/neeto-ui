import React from "react";

import PageLoader from "../../lib/components/PageLoader";

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

const Template = (args) => (
  <div className="w-full h-screen">
    <PageLoader {...args} />
  </div>
);

export const Default = Template.bind({});

export const LoadingText = () => {
  return (
    <div className="w-full h-screen">
      <PageLoader text="Loading..." />
    </div>
  );
};
LoadingText.storyName = "Loading text";
