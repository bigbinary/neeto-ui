import React, { useRef, useState } from "react";

import { Select, Button, Modal, Pane, Typography } from "../../lib/components";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Select } from "@bigbinary/neetoui";`',
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

export const ExampleWithRef = () => {
  const selectRef = useRef();

  return (
    <>
      <div className="space-x-3 mb-3">
        <Button
          onClick={() => {
            selectRef.current.focus();
          }}
          label="Focus"
        />
        <Button
          onClick={() => {
            selectRef.current.blur();
          }}
          label="Blur"
        />
      </div>
      <Select innerRef={selectRef} openMenuOnFocus />
    </>
  );
};

export const SelectInModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Typography style="h1">Modal</Typography>
        </Modal.Header>
        <Modal.Body>
          <Select
            placeholder="Select Placeholder"
            size="small"
            label="Select"
            strategy="fixed"
            options={[
              { value: "value1", label: "Value One" },
              { value: "value2", label: "Value Two" },
              { value: "value3", label: "Value Three" },
            ]}
          />
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};

SelectInModal.parameters = {
  docs: {
    description: {
      story: "To properly render Select inside a Modal or Pane, you need to pass `strategy` prop as `fixed` which will attach the menu to the document body node instead of the parent.",
    },
  },
};

export const SelectInPane = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button label="Open Pane" onClick={() => setIsOpen(true)} />
      <Pane isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Pane.Header>
          <Typography style="h1">Modal</Typography>
        </Pane.Header>
        <Pane.Body className="w-full">
          <Select
            placeholder="Select Placeholder"
            className="w-full"
            size="small"
            label="Select"
            strategy="fixed"
            options={[
              { value: "value1", label: "Value One" },
              { value: "value2", label: "Value Two" },
              { value: "value3", label: "Value Three" },
            ]}
          />
        </Pane.Body>
      </Pane>
    </>
  );
};
