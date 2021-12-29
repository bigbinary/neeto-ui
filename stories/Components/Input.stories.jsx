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
  },
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Input",
  placeholder: "Enter Name",
};

export const Controlled = () => {
  const [value, setValue] = useState("BigBinary");
  return (
    <Input
      label="Controlled Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Large = () => <Input label="Large Input" size="large" />;

export const Required = () => <Input label="Required Input" required={true} />;

export const Disabled = () => <Input label="Disabled Input" disabled={true} />;

export const SearchInputSmall = () => (
  <Input label="Search" prefix={<Search />} suffix=".neetohelp.com" />
);

export const SearchInputLarge = () => (
  <Input
    label="Search"
    size="large"
    prefix={<Search size={20} />}
    suffix=".neetohelp.com"
  />
);

export const Error = () => <Input label="Error" error="Provide valid email" />;

export const HelpText = () => (
  <Input label="Name" helpText="This is help text props to the component." />
);

export const NakedInput = () => (
  <Input label="Naked Input Field" nakedInput={true} />
);

export const InputWithMaxLength = () => (
  <Input label="Input with max length" maxLength={10} />
);

export const AllVariants = () => {
  const [input, setInput] = useState("Text");
  return (
    <div className="w-full">
      <div className="p-6 space-y-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Input/Small/Default</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" />
            <Input placeholder="Input Placeholder" prefix={<Favorite />} />
            <Input placeholder="Input Placeholder" />
            <Input placeholder="Input Placeholder" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              prefix={<Favorite />}
              value={input}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" disabled />
            <Input
              placeholder="Input Placeholder"
              prefix={<Favorite />}
              disabled
            />
            <Input placeholder="Input Placeholder" disabled />
            <Input placeholder="Input Placeholder" disabled />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" error={true} />
            <Input
              placeholder="Input Placeholder"
              prefix={<Favorite />}
              error={true}
            />
            <Input placeholder="Input Placeholder" error={true} />
            <Input placeholder="Input Placeholder" error={true} />
          </div>
        </div>
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Input/Large</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" size="large" />
            <Input
              placeholder="Input Placeholder"
              size="large"
              prefix={<Favorite />}
            />
            <Input placeholder="Input Placeholder" size="large" />
            <Input placeholder="Input Placeholder" size="large" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              size="large"
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              size="large"
              value={input}
              prefix={<Favorite />}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              size="large"
              value={input}
            />
            <Input
              placeholder="Input Placeholder"
              onChange={(e) => setInput(e.target.value)}
              size="large"
              value={input}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" size="large" disabled />
            <Input
              placeholder="Input Placeholder"
              size="large"
              prefix={<Favorite />}
              disabled
            />
            <Input placeholder="Input Placeholder" size="large" disabled />
            <Input placeholder="Input Placeholder" size="large" disabled />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Input placeholder="Input Placeholder" size="large" error={true} />
            <Input
              placeholder="Input Placeholder"
              size="large"
              prefix={<Favorite />}
              error={true}
            />
            <Input placeholder="Input Placeholder" size="large" error={true} />
            <Input placeholder="Input Placeholder" size="large" error={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
