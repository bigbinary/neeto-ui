import React, { useState } from "react";

import { Check, Message } from "neetoicons";

import Textarea from "components/Textarea";

import TextareaCSSCustomization from "!raw-loader!./TextareaStoriesDocs/TextareaCSSCustomization.mdx";
import TextareaDocs from "!raw-loader!./TextareaStoriesDocs/TextareaDocs.mdx";

const metadata = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: { description: { component: TextareaDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A13",
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
