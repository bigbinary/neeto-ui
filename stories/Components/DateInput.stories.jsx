import React from "react";

import DatePicker from "../../lib/components/DatePicker";
import TimePicker from "../../lib/components/TimePicker";

export default {
  title: "Components/Date and Time",
  component: DatePicker,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { DatePicker } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const DateInput = (args) => {
  return <DatePicker {...args} />;
};

DateInput.storyName = "DatePicker";
DateInput.args = {
  label: "Date",
  type: "date",
  picker: "date",
  showTime: false,
};

export const TimeInput = (args) => {
  return <TimePicker {...args} />;
};

TimeInput.storyName = "TimePicker";
TimeInput.args = {
  label: "Time",
};
