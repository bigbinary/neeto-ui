import React from "react";

import TimePickerInput from "components/TimePickerInput";

const metadata = {
  title: "Components/TimePickerInput",
  component: TimePickerInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { TimePickerInput } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Default = args => <TimePickerInput {...args} />;

Default.args = { label: "Time picker" };

Default.storyName = "Time Picker Input";

export { Default };
export default metadata;
