import React from "react";

import Radio from "../../lib/components/Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Radio } from "@bigbinary/neetoui";`',
      },
    },
  },
};

export const Options = (args) => {
  return (
    <Radio {...args}>
      <Radio.Item name="options" label="option1" value="option1" />
      <Radio.Item name="options" label="option2" value="option2" />
    </Radio>
  );
};

Options.args = {
  label: "Radio Options",
};

export const OptionsStacked = (args) => {
  return (
    <Radio {...args}>
      <Radio.Item name="stackedOptions" label="option1" value="option1" />
      <Radio.Item name="stackedOptions" label="option2" value="option2" />
    </Radio>
  );
};

OptionsStacked.args = {
  label: "Radio Options Stacked",
  stacked: true,
};

export const ControlledRadio = (args) => {
  const [value, setValue] = React.useState("");
  return (
    <Radio {...args} onChange={(e) => setValue(e.target.value)} value={value}>
      <Radio.Item name="controlledOptions" label="option1" value="option1" />
      <Radio.Item name="controlledOptions" label="option2" value="option2" />
      <Radio.Item name="controlledOptions" label="option3" value="option3" />
      <Radio.Item name="controlledOptions" label="option4" value="option4" />
      <Radio.Item name="controlledOptions" label="option5" value="option5" />
    </Radio>
  );
};
