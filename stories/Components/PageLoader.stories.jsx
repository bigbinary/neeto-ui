import React from "react";

import PageLoader from "components/PageLoader";

const metadata = {
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

const Default = Template.bind({});

const LoadingText = args => (
  <div className="h-screen w-full">
    <PageLoader {...args} text="Loading..." />
  </div>
);
LoadingText.storyName = "Loading text";

export { Default, LoadingText };

export default metadata;
