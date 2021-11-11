import React, { useState } from "react";

import PageLoader from "../../lib/components/PageLoader";

export default {
  title: "Components/PageLoader",
  component: PageLoader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { PageLoader } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const Template = (args) => (
  <div className="py-10">
    <PageLoader {...args} />
  </div>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {};

export const LoadingText = () => {
  const [value, setValue] = useState(0);
  setTimeout(() => setValue(value + 1), 1000);

  return (
    <div className="py-10">
      <PageLoader text={`Please wait ${5 - (value % 5)} seconds`} />
    </div>
  );
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: "red",
};
