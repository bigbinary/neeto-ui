import React from "react";

import { DateTimePicker } from "components";

import DateTimePickerStoriesDocs from "!raw-loader!./DateTimePickerStoriesDocs.mdx";

const metadata = {
  title: "Components/DateTimePicker",
  component: DateTimePicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: DateTimePickerStoriesDocs } },
  },
  argTypes: {
    onChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "-" },
      },
    },
  },
};

const Default = args => <DateTimePicker {...args} />;

export { Default };

export default metadata;
