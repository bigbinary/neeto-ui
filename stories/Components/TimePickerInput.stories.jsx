import React, { useState } from "react";

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

const Default = args => {
  const [value, setValue] = useState("12:45");

  const onChangeHandler = (_, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return <TimePickerInput {...{ ...args, value }} onBlur={onChangeHandler} />;
};

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

const Range = args => <TimePickerInput type="range" />;

const CSSCustomization = args => (
  <TimePickerInput
    className="neetix-time-input"
    label="TimePicker Input"
    {...args}
  />
);

CSSCustomization.storyName = "TimePickerInput CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: TimePickerInputCSSCustomization } },
};

export { Default, Sizes, Range, CSSCustomization };
export default metadata;
