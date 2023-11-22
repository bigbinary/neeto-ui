import React from "react";

import TimePickerInput from "components/TimePickerInput";

import TimePickerInputCSSCustomization from "!raw-loader!./TimePickerInputStoriesDocs/TimePickerInputCSSCustomization.mdx";
import TimePickerInputDocs from "!raw-loader!./TimePickerInputStoriesDocs/TimePickerInputDocs.mdx";

const metadata = {
  title: "Components/TimePickerInput",
  component: TimePickerInput,
  parameters: {
    layout: "padded",
    docs: { description: { component: TimePickerInputDocs } },
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

const CSSCustomization = args => (
  <TimePickerInput
    label="TimePicker Input"
    className="neetix-time-input"
    {...args}
  />
);

CSSCustomization.storyName = "TimePickerInput CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: TimePickerInputCSSCustomization } },
};

export { Default, Sizes, CSSCustomization };
export default metadata;
