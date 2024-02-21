import React from "react";

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

const Default = args => <DateTimePicker {...args} onBlur={console.log} />;

const CSSCustomization = args => <DateTimePicker {...args} />;

CSSCustomization.storyName = "DateTimePicker CSS Customization";

CSSCustomization.args = {
  label: "Custom DateTimePicker",
  className: "neetix-datetimepicker",
};

CSSCustomization.parameters = {
  docs: { description: { story: DateTimePickerCSSCustomization } },
};

export { Default, CSSCustomization };

export default metadata;
