import React from "react";

import Radio from "../../lib/components/Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  subcomponents: {
    "Radio.Item": Radio.Item,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Radio } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A10",
    },
  },
};

export const Options = (args) => {
  return (
    <Radio {...args}>
      <Radio.Item name="options" label="Option 1" value="Option1" />
      <Radio.Item name="options" label="Option 2" value="Option2" />
    </Radio>
  );
};

Options.args = {
  label: "Radio options",
};

export const OptionsStacked = (args) => {
  return (
    <Radio {...args}>
      <Radio.Item name="stackedOptions" label="Option 1" value="Option1" />
      <Radio.Item name="stackedOptions" label="Option 2" value="Option2" />
    </Radio>
  );
};

OptionsStacked.args = {
  label: "Radio options stacked",
  stacked: true,
};
OptionsStacked.storyName = "Options stacked";

export const ControlledRadio = (args) => {
  const [value, setValue] = React.useState("");
  return (
    <Radio {...args} onChange={(e) => setValue(e.target.value)} value={value}>
      <Radio.Item name="controlledOptions" label="Option 1" value="Option1" />
      <Radio.Item name="controlledOptions" label="Option 2" value="Option2" />
      <Radio.Item name="controlledOptions" label="Option 3" value="Option3" />
      <Radio.Item name="controlledOptions" label="Option 4" value="Option4" />
      <Radio.Item name="controlledOptions" label="Option 5" value="Option5" />
    </Radio>
  );
};
