import React from "react";

import Checkbox from "components/Checkbox";

const description = `
\`import { Checkbox } from "@bigbinary/neetoui";\`

\`Checkbox\` allows users to select multiple items from a list or mark a single
item as selected with a simple click.
`;

const metadata = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
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

const CheckboxCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Checkbox\`
component.

\`\`\`css
--neeto-ui-checkbox-size: 16px;
--neeto-ui-checkbox-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-checkbox-border-width: 2px;
--neeto-ui-checkbox-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-checkbox-border-radius: var(--neeto-ui-rounded-sm);

// Disabled
--neeto-ui-checkbox-disabled-opacity: 0.5;

// Hover
--neeto-ui-checkbox-hover-border-color: rgb(var(--neeto-ui-gray-500));

// Focus
--neeto-ui-checkbox-focus-outline: transparent;
--neeto-ui-checkbox-focus-outline-offset: 0px;

// Focus Visible
--neeto-ui-checkbox-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-checkbox-focus-visible-outline-offset: 1px;
--neeto-ui-checkbox-focus-visible-box-shadow: none;

// Checked
--neeto-ui-checkbox-checked-border-color: rgb(var(--neeto-ui-primary-500));

// Margin
--neeto-ui-checkbox-label-margin: 8px;

// Label
--neeto-ui-checkbox-label-line-height: 1.2;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-checkbox {
  --neeto-ui-checkbox-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-checkbox-focus-visible-outline: 3px solid rgba(var(--neeto-ui-gray-800), 50%);
  --neeto-ui-checkbox-checked-border-color: rgb(var(--neeto-ui-gray-800));
}
\`\`\`

#### Output
`;

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
