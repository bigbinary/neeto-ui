import React, { useState } from "react";

import { Check, Message } from "neetoicons";

import Textarea from "components/Textarea";

const description = `
\`import { Textarea } from "@bigbinary/neetoui";\`

\`Textarea\` allows users to enter multiple lines of text. It is often used for
longer messages or comments.
`;

const metadata = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A13",
    },
  },
  argTypes: {
    rows: {
      description: "To specify the row height of the Textarea.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    size: {
      description: "To specify the size of Textarea.",
      control: "select",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: { type: { summary: "string" } },
    },
    label: {
      description: "To specify the label shown above the Textarea.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    value: {
      description: "To provide the value of the Textarea.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    error: {
      description: "To provide the error message shown below the Textarea.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    placeholder: {
      description: "To provide the placeholder text for the Textarea.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    required: {
      description: "To specify whether the Textarea is required.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    disabled: {
      description: "To specify whether the Textarea is disabled.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    className: {
      description:
        "To provide additional classnames to the Textarea container.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    resize: {
      description:
        "The resize property sets whether the Textarea is resizable.",
      control: "select",
      options: Object.values({ vertical: "vertical", none: "none" }),
      table: { type: { summary: "string" } },
    },
    helpText: {
      description: "To specify the text that appears below the Textarea.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    nakedTextarea: {
      description: "To create a Textarea without any borders.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    maxLength: {
      description:
        "To specify a maximum character limit to the Textarea. Charater limit is visible only if the Textarea value is greater than or equal to 85% of the maximum character limit.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    unlimitedChars: {
      description:
        "To be used along with maxLength prop. When set to true the character limit will not be enforced and character count will be shown in error state if the character limit is exceeded.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    suffix: {
      description:
        "To specify the content to be added at the end of the Textarea.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    prefix: {
      description:
        "To specify the content to be added at the beginning of the Textarea.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    disableTrimOnBlur: {
      description: "To disable leading and trailing white spaces onBlur.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
  },
};

const Template = args => <Textarea {...args} />;

const Default = Template.bind({});
Default.args = { label: "Textarea", placeholder: "Enter text" };

const Controlled = args => {
  const [value, setValue] = useState("BigBinary");

  return (
    <Textarea
      {...{ ...args, value }}
      label="Controlled input"
      onChange={e => setValue(e.target.value)}
    />
  );
};

const Required = Template.bind({});
Required.args = {
  label: "Required Textarea",
  placeholder: "Enter text",
  required: true,
};

const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Textarea",
  placeholder: "Enter text",
  disabled: true,
};

const Error = Template.bind({});
Error.args = {
  label: "Error",
  placeholder: "Enter text",
  error: "Provide valid email",
};

const HelpText = Template.bind({});
HelpText.storyName = "Help text";
HelpText.args = {
  label: "Name",
  placeholder: "Enter text",
  helpText: "This is help text props to the component",
};

const Sizes = args => (
  <div className="flex w-full flex-col gap-3">
    <Textarea
      {...args}
      label="Small"
      placeholder="Input placeholder"
      size="small"
    />
    <Textarea
      {...args}
      label="Medium"
      placeholder="Input placeholder"
      size="medium"
    />
    <Textarea
      {...args}
      label="Large"
      placeholder="Input placeholder"
      size="large"
    />
  </div>
);

const ResizeDisabled = args => (
  <div className="flex w-full flex-col gap-3">
    <Textarea
      {...args}
      label="Small"
      placeholder="Input placeholder"
      resize="none"
      size="small"
    />
    <Textarea
      {...args}
      label="Medium"
      placeholder="Input placeholder"
      resize="none"
      size="medium"
    />
    <Textarea
      {...args}
      label="Large"
      placeholder="Input placeholder"
      resize="none"
      size="large"
    />
  </div>
);

const NakedInput = Template.bind({});
NakedInput.args = {
  label: "Naked Textarea field",
  placeholder: "Enter text",
  nakedTextarea: true,
};

const WithPrefix = Template.bind({});
WithPrefix.storyName = "Prefix";
WithPrefix.args = {
  label: "Name",
  placeholder: "Enter text",
  prefix: <Message />,
  textareaClassName: "resize-none",
};

const WithSuffix = Template.bind({});
WithSuffix.storyName = "Suffix";
WithSuffix.args = {
  label: "Name",
  placeholder: "Enter text",
  suffix: <Check />,
  textareaClassName: "resize-none",
};

const TextareaWithMaxLength = args => (
  <div className="flex flex-col space-y-6">
    <Textarea
      {...args}
      label="Textarea with max length"
      maxLength={10}
      placeholder="Enter text"
    />
    <Textarea
      {...args}
      label="Textarea with max length"
      maxLength={10}
      placeholder="Enter text"
      value="Sample input"
    />
    <Textarea
      {...args}
      label="Textarea with max length"
      maxLength={10}
      placeholder="Enter text"
      value="Sample input"
    />
    <Textarea
      {...args}
      unlimitedChars
      label="Textarea with max length and unlimited characters"
      maxLength={10}
      placeholder="Enter text"
      value="Sample input"
    />
  </div>
);
TextareaWithMaxLength.storyName = "Textarea with max length";

const CSSCustomization = args => <Textarea {...args} />;

CSSCustomization.storyName = "Textarea CSS Customization";

CSSCustomization.args = {
  label: "Custom Textarea label",
  placeholder: "Custom Textarea placeholder",
  className: "neetix-textarea",
};

const TextareaCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Textarea\`
component.

\`\`\`css
// Wrapper
--neeto-ui-input-wrapper-flex-grow: 1;

// Label Wrapper
--neeto-ui-input-label-wrapper-gap: 8px;

// Label
--neeto-ui-input-label-overflow-wrap: break-word;
--neeto-ui-input-label-margin: 8px;

// Max Length
--neeto-ui-input-max-length-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-max-length-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-max-length-line-height: 1;

// Input
--neeto-ui-input-padding-x: 0px;
--neeto-ui-input-padding-y: 0px;
--neeto-ui-input-min-height: 0px;
--neeto-ui-input-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-border-width: 1px;
--neeto-ui-input-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-input-border-radius: var(--neeto-ui-rounded);
--neeto-ui-input-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-input-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-input-line-height: 1.2;

// Textarea
--neeto-ui-textarea-padding-x: 0px;
--neeto-ui-textarea-padding-y: 0px;
--neeto-ui-textarea-line-height: 1.5;
--neeto-ui-textarea-max-height: 224px;

// Placeholder
--neeto-ui-input-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Focus
--neeto-ui-input-focus-outline-color: transparent;

// Hover
--neeto-ui-input-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Focus Within
--neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);

// Prefix & Suffix
--neeto-ui-input-prefix-suffix-font-size: var(--neeto-ui-text-sm);
--neeto-ui-input-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-prefix-suffix-bg-color: transparent;
--neeto-ui-input-prefix-suffix-line-height: 1;
--neeto-ui-input-prefix-suffix-icon-size: 16px;
--neeto-ui-input-prefix-suffix-margin: 0px;
--neeto-ui-input-prefix-suffix-padding-x: 0px;
--neeto-ui-input-prefix-suffix-border-width: 0px;
--neeto-ui-input-prefix-suffix-border-color: transparent;

// Help Text
--neeto-ui-input-help-text-margin: 8px;
--neeto-ui-input-help-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-help-text-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-input-help-text-line-height: 1.1;

// Error Text
--neeto-ui-input-error-text-margin: 8px;
--neeto-ui-input-error-text-font-size: var(--neeto-ui-text-xs);
--neeto-ui-input-error-text-color: rgb(var(--neeto-ui-error-800));
--neeto-ui-input-error-text-line-height: 1.1;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-textarea {
  --neeto-ui-input-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-input-focus-within-border-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-input-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: TextareaCSSCustomization } },
};

export {
  Default,
  Controlled,
  Required,
  Disabled,
  Error,
  HelpText,
  NakedInput,
  TextareaWithMaxLength,
  WithPrefix,
  WithSuffix,
  Sizes,
  ResizeDisabled,
  CSSCustomization,
};

export default metadata;
