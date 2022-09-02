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
  <div className="w-20 h-20 flex items-center justify-center">
    <Spinner {...args} />
  </div>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {};

export const lightTheme = () => {
  return (
    <div className="w-20 h-20 flex items-center justify-center neeto-ui-bg-black">
      <Spinner theme="light" />
    </div>
  );
};
