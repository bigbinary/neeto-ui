import React from "react";

import Checkbox from "components/Checkbox";

import CheckboxCSSCustomization from "!raw-loader!./CheckboxStoriesDocs/CheckboxCSSCustomization.mdx";
import CheckboxDocs from "!raw-loader!./CheckboxStoriesDocs/CheckboxDocs.mdx";

const metadata = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: { description: { component: CheckboxDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A4",
    },
  },
  argTypes: {
    id: {
      description: "To specify a unique ID to the Checkbox component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    label: {
      description: "To specify the text to be displayed next to the Checkbox.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    error: {
      description: "To specify the error message to be shown.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    className: {
      description: "To provide external classnames to Checkbox component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    required: {
      description:
        "To specify whether the Checkbox is a required field or not.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    children: {
      description:
        "To specify the children label to be rendered inside the Checkbox.",
      control: "text",
      table: { type: { summary: "string" } },
    },
  },
};

const Template = args => <Checkbox {...args} />;

const Checked = Template.bind({});
Checked.args = {
  id: "checkbox_name",
  label: "This is a checkbox",
  checked: true,
  onChange: () => {},
};

const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox_name_disabled",
  label: "This checkbox is disabled",
  disabled: true,
};

const Required = Template.bind({});
Required.args = {
  id: "checkbox_name_required",
  label: "This checkbox is required",
  required: true,
};

const Error = Template.bind({});
Error.args = {
  id: "checkbox_name_error",
  label: "Checkbox with error",
  error: "Error message",
};

const CSSCustomization = args => <Checkbox {...args} />;

CSSCustomization.storyName = "Checkbox CSS Customization";

CSSCustomization.args = {
  label: "This is a custom Checkbox",
  checked: true,
  className: "neetix-checkbox",
};

CSSCustomization.parameters = {
  docs: { description: { story: CheckboxCSSCustomization } },
};

export { Checked, Disabled, Required, Error, CSSCustomization };

export default metadata;
