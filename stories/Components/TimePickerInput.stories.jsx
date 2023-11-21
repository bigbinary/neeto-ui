import React from "react";

import TimePickerInput from "components/TimePickerInput";

import TimePickerInputStoriesDocs from "!raw-loader!./TimePickerInputStoriesDocs.mdx";

const metadata = {
  title: "Components/TimePickerInput",
  component: TimePickerInput,
  parameters: {
    layout: "padded",
    docs: { description: { component: TimePickerInputStoriesDocs } },
  },
};

const Default = args => <TimePickerInput {...args} />;

Default.args = { label: "Time picker" };

Default.storyName = "Time Picker Input";

const Sizes = args => (
  <div className="flex w-full flex-col gap-3">
    <TimePickerInput
      {...args}
      label="Small"
      placeholder="Time Input placeholder"
      size="small"
    />
    <TimePickerInput
      {...args}
      label="Medium"
      placeholder="Time Input placeholder"
    />
    <TimePickerInput
      {...args}
      label="Large"
      placeholder="Time Input placeholder"
      size="large"
    />
  </div>
);

export { Default, Sizes };
export default metadata;
