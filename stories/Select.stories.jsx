import React, { useState } from "react";

import Select from "../lib/components/Select";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Select } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const Template = (args) => (
  <div className="p-4 mb-2">
    <Select {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  label: "Select",
  defaultValue: { value: "value3", label: "Value Three" },
  placeholder: "Select an Option",
  isDisabled: false,
  isClearable: true,
  isSearchable: true,
  name: "ValueList",
  options: [
    { value: "value1", label: "Value One" },
    { value: "value2", label: "Value Two" },
    { value: "value3", label: "Value Three" },
    { value: "value4", label: "Value Four" },
    { value: "value5", label: "Value Five" },
  ],
};

export const Multi = Template.bind({});
Multi.args = {
  label: "Multi Select",
  isMulti: true,
  defaultValue: [
    { value: "value3", label: "Value Three" },
    { value: "value5", label: "Value Five" },
  ],
  placeholder: "Select an Option",
  name: "ValueList",
  options: [
    { value: "value1", label: "Value One" },
    { value: "value2", label: "Value Two" },
    { value: "value3", label: "Value Three" },
    { value: "value4", label: "Value Four" },
    { value: "value5", label: "Value Five" },
  ],
};

export const Grouped = Template.bind({});
Grouped.args = {
  label: "Grouped Select",
  isMulti: true,
  defaultValue: [
    { value: "value3", label: "Value Three" },
    { value: "value7", label: "Value Seven" },
  ],
  placeholder: "Select an Option",
  name: "ValueList",
  options: [
    {
      label: "Group A",
      options: [
        { value: "value1", label: "Value One" },
        { value: "value2", label: "Value Two" },
        { value: "value3", label: "Value Three" },
        { value: "value4", label: "Value Four" },
        { value: "value5", label: "Value Five" },
      ],
    },
    {
      label: "Group B",
      options: [
        { value: "value6", label: "Value Six" },
        { value: "value7", label: "Value Seven" },
        { value: "value8", label: "Value Eight" },
        { value: "value9", label: "Value Nine" },
        { value: "value10", label: "Value Ten" },
      ],
    },
  ],
};

export const Creatable = () => {
  const [options, setOptions] = useState([
    { value: "value1", label: "Value One" },
    { value: "value2", label: "Value Two" },
    { value: "value3", label: "Value Three" },
    { value: "value4", label: "Value Four" },
    { value: "value5", label: "Value Five" },
  ]);

  return (
    <div className="p-4 mb-2">
      <Select
        label="Grouped Select"
        isCreateable
        defaultValue={[{ value: "value3", label: "Value Three" }]}
        placeholder="Select an Option"
        onCreateOption={(inputValue) =>
          setOptions([...options, { label: inputValue, value: inputValue }])
        }
        name="ValueList"
        defaultOptions={options}
      />
    </div>
  );
};

export const AllVariants = () => {
  return (
    <div className="w-full">
      <div className="p-6 space-y-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Select/Large</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" isDisabled />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" error="This is an error" />
          </div>
        </div>
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Select/Small</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" size="small" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" size="small" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" size="small" isDisabled />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select
              placeholder="Select Placeholder"
              size="small"
              error="This is an error"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
