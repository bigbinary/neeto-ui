import React, { useState } from "react";
import { Search, Favorite } from "@bigbinary/neeto-icons";

import Input from "../../lib/components/Input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Input } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A11",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Input label",
  placeholder: "Input Placeholder",
};

export const Controlled = () => {
  const [value, setValue] = useState("BigBinary");
  return (
    <Input
      prefix={<Search />}
      label="Controlled Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Sizes = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-3">
          <Input
            label="Default"
            placeholder="Input Placeholder"
            prefix={<Favorite />}
          />
          <Input label="Default" placeholder="Input Placeholder" />
        </div>
        <div className="flex flex-row gap-3">
          <Input
            label="Large"
            placeholder="Input Placeholder"
            size="large"
            prefix={<Favorite />}
          />
          <Input label="Large" placeholder="Input Placeholder" size="large" />
        </div>
      </div>
    </div>
  );
};

export const Required = () => <Input label="Required Input" required={true} />;

export const Disabled = () => <Input label="Disabled Input" disabled={true} />;

export const SearchInput = () => (
  <div className="flex flex-col gap-8">
    <Input
      label="Search"
      prefix={<Search />}
      suffix=".neetohelp.com"
      type="search"
      placeholder="Input search text"
    />
    <Input
      label="Search"
      size="large"
      type="search"
      prefix={<Search />}
      suffix=".neetohelp.com"
      placeholder="Input search text"
    />
  </div>
);

export const Error = () => (
  <Input
    label="Error"
    error="Provide valid email"
    placeholder="Input Placeholder"
    prefix={<Favorite />}
  />
);

export const HelpText = () => (
  <Input
    label="Name"
    helpText="This is help text."
    placeholder="Input Placeholder"
  />
);

export const NakedInput = () => (
  <Input
    label="Naked Input Field"
    nakedInput={true}
    placeholder="Input Placeholder"
  />
);

export const InputWithMaxLength = () => (
  <div className="flex flex-col space-y-6">
    <Input
      label="Input with max length"
      maxLength={10}
      placeholder="Input Placeholder"
    />
    <Input
      label="Input with max length"
      maxLength={10}
      value={"Sample I"}
      placeholder="Input Placeholder"
    />
    <Input
      label="Input with max length"
      maxLength={10}
      value={"Sample In"}
      placeholder="Input Placeholder"
    />
    <Input
      label="Input with max length"
      maxLength={10}
      value={"Sample Input"}
      placeholder="Input Placeholder"
    />
  </div>
);
