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

const WithTooltips = () => (
  <div className="flex gap-x-1">
    <Kbd keyName="⌘" tooltipProps={{ content: "Command", position: "top" }} />
    <Kbd keyName="⇧" tooltipProps={{ content: "Shift", position: "top" }} />
    <Kbd keyName="B" tooltipProps={{ content: "Bold", position: "top" }} />
  </div>
);

WithTooltips.storyName = "Kbd with tooltips";

const Default = Template.bind({});

export { Default, WithTooltips };

export default metadata;
