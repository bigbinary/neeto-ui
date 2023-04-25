import React from "react";

import Kbd from "components/Kbd";

export default {
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

const Template = ({}) => (
  <div className="flex gap-x-1">
    <Kbd keyName="⌘" />
    <Kbd keyName="⇧" />
    <Kbd keyName="B" />
  </div>
);

export const Default = Template.bind({});
