import React, { useState } from "react";

import Textarea from "../../lib/components/Textarea";

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
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A13",
    },
  },
};

const Template = (args) => <Textarea {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  label: "Textarea",
  placeholder: "Enter text",
};

export const Controlled = () => {
  const [value, setValue] = useState("BigBinary");
  return (
    <Textarea
      label="Controlled Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Required = () => (
  <Textarea
    label="Required Textarea"
    placeholder="Enter text"
    required={true}
  />
);

export const Disabled = () => (
  <Textarea
    label="Disabled Textarea"
    placeholder="Enter text"
    disabled={true}
  />
);

export const Error = () => (
  <Textarea
    label="Error"
    placeholder="Enter text"
    error="Provide valid email"
  />
);

export const HelpText = () => (
  <Textarea
    label="Name"
    placeholder="Enter text"
    helpText="This is help text props to the component."
  />
);

export const NakedInput = () => (
  <Textarea
    label="Naked Textarea Field"
    placeholder="Enter text"
    nakedTextarea={true}
  />
);

export const TextareaWithMaxLength = () => (
  <div className="flex flex-col space-y-6">
    <Textarea
      label="Textarea with max length"
      placeholder="Enter text"
      maxLength={10}
    />
    <Textarea
      label="Textarea with max length"
      placeholder="Enter text"
      value="Sample I"
      maxLength={10}
    />
    <Textarea
      label="Textarea with max length"
      placeholder="Enter text"
      value="Sample In"
      maxLength={10}
    />
    <Textarea
      label="Textarea with max length"
      placeholder="Enter text"
      value="Sample Input"
      maxLength={10}
    />
  </div>
);
