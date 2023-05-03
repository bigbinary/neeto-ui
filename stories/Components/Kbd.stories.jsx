import React from "react";

import Kbd from "components/Kbd";

const metadata = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Kbd } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = args => (
  <div className="flex gap-x-1">
    <Kbd {...args} keyName="⌘" />
    <Kbd {...args} keyName="⇧" />
    <Kbd {...args} keyName="B" />
  </div>
);

export const Default = Template.bind({});

export default metadata;
