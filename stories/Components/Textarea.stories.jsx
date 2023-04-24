import React, { useState } from "react";

import Textarea from "components/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Textarea } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A13",
    },
  },
};

const Template = args => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Textarea",
  placeholder: "Enter text",
};

export const Controlled = () => {
  const [value, setValue] = useState("BigBinary");

  return (
    <Textarea
      label="Controlled input"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const Required = Template.bind({});
Required.args = {
  label: "Required Textarea",
  placeholder: "Enter text",
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Textarea",
  placeholder: "Enter text",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Error",
  placeholder: "Enter text",
  error: "Provide valid email",
};

export const HelpText = Template.bind({});
HelpText.storyName = "Help text";
HelpText.args = {
  label: "Name",
  placeholder: "Enter text",
  helpText: "This is help text props to the component",
};

export const NakedInput = Template.bind({});
NakedInput.args = {
  label: "Naked Textarea field",
  placeholder: "Enter text",
  nakedTextarea: true,
};

export const TextareaWithMaxLength = () => (
  <div className="flex flex-col space-y-6">
    <Textarea
      label="Textarea with max length"
      maxLength={10}
      placeholder="Enter text"
    />
    <Textarea
      label="Textarea with max length"
      maxLength={10}
      placeholder="Enter text"
      value="Sample i"
    />
    <Textarea
      label="Textarea with max length"
      maxLength={10}
      placeholder="Enter text"
      value="Sample in"
    />
    <Textarea
      unlimitedChars
      label="Textarea with max length and unlimited characters"
      maxLength={10}
      placeholder="Enter text"
      value="Sample Input"
    />
  </div>
);
TextareaWithMaxLength.storyName = "Textarea with max length";
