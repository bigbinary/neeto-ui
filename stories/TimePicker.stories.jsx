import React from "react";

import TimePicker from "../lib/components/TimePicker";

export default {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { TimePicker } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const TimeInput = (args) => {
  return <TimePicker {...args} />;
};

TimeInput.storyName = "TimePicker";
TimeInput.args = {
  type: "time",
};
