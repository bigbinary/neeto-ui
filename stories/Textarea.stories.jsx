import React, { useState } from "react";

import Textarea from "../lib/components/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Textarea } from "@bigbinary/neetoui/v2";`',
      },
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
  <Textarea label="Required Textarea" required={true} />
);

export const Disabled = () => (
  <Textarea label="Disabled Textarea" disabled={true} />
);

export const Error = () => (
  <Textarea label="Error" error="Provide valid email" />
);

export const HelpText = () => (
  <Textarea label="Name" helpText="This is help text props to the component." />
);

export const NakedInput = () => (
  <Textarea label="Naked Textarea Field" nakedTextarea={true} />
);
