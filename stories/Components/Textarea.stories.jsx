import React, { useState } from "react";

import Textarea from "components/Textarea";

import TextareaStoriesDocs from "!raw-loader!./TextareaStoriesDocs.mdx";

const metadata = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: { description: { component: TextareaStoriesDocs } },
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
      {...args}
      label="Controlled input"
      value={value}
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

const NakedInput = Template.bind({});
NakedInput.args = {
  label: "Naked Textarea field",
  placeholder: "Enter text",
  nakedTextarea: true,
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
      value="Sample i"
    />
    <Textarea
      {...args}
      label="Textarea with max length"
      maxLength={10}
      placeholder="Enter text"
      value="Sample in"
    />
    <Textarea
      {...args}
      unlimitedChars
      label="Textarea with max length and unlimited characters"
      maxLength={10}
      placeholder="Enter text"
      value="Sample Input"
    />
  </div>
);
TextareaWithMaxLength.storyName = "Textarea with max length";

export {
  Default,
  Controlled,
  Required,
  Disabled,
  Error,
  HelpText,
  NakedInput,
  TextareaWithMaxLength,
};

export default metadata;
