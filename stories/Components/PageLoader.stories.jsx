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
  <div className="h-screen w-full">
    <PageLoader {...args} />
  </div>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {};

export const LoadingText = () => {
  return (
    <div className="h-screen w-full">
      <PageLoader text="Loading..." />
    </div>
  );
};
