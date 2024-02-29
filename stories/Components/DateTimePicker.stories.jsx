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

const Default = args => <DateTimePicker {...args} label="Date time picker" />;

const Range = args => (
  <DateTimePicker
    defaultValue={[dayjs(), dayjs()]}
    label="Date range picker"
    type="range"
  />
);

const CSSCustomization = args => <DateTimePicker {...args} />;

CSSCustomization.storyName = "DateTimePicker CSS Customization";

CSSCustomization.args = {
  label: "Custom DateTimePicker",
  className: "neetix-datetimepicker",
};

CSSCustomization.parameters = {
  docs: { description: { story: DateTimePickerCSSCustomization } },
};

export { Default, Range, CSSCustomization };

export default metadata;
