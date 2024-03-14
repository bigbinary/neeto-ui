import React from "react";

import dayjs from "dayjs";

import { DateTimePicker } from "components";

import DateTimePickerCSSCustomization from "!raw-loader!./DateTimePickerStoriesDocs/DateTimePickerCSSCustomization.mdx";
import DateTimePickerDocs from "!raw-loader!./DateTimePickerStoriesDocs/DateTimePickerDocs.mdx";

const metadata = {
  title: "Components/DateTimePicker",
  component: DateTimePicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: DateTimePickerDocs } },
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

const MinAndMaxDateTime = args => <DateTimePicker {...args} />;

MinAndMaxDateTime.args = {
  defaultValue: dayjs("2024-03-14 09:15"),
  minDateTime: dayjs("2024-03-13 10:00"),
  maxDateTime: dayjs("2024-03-16 18:00"),
};

const CSSCustomization = args => <DateTimePicker {...args} />;

CSSCustomization.storyName = "DateTimePicker CSS Customization";

CSSCustomization.args = {
  label: "Custom DateTimePicker",
  className: "neetix-datetimepicker",
};

CSSCustomization.parameters = {
  docs: { description: { story: DateTimePickerCSSCustomization } },
};

export { Default, MinAndMaxDateTime, CSSCustomization };

export default metadata;
