import { FieldArray, Formik, Form } from "formik";
import React, { useRef, useState } from "react";

import { Select, Button, Modal, Pane, Typography } from "../../lib/components";
import { Select as FormikSelect } from "../../lib/components/formik";

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
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A5",
    },
  },
};

const Template = (args) => (
  <div className="p-4 mb-2 h-80">
    <Select {...args} defaultMenuIsOpen />
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
    <div className="p-4 mb-2 h-60">
      <Select
        label="Grouped Select"
        isCreateable
        isSearchable
        defaultValue={[{ value: "value3", label: "Value Three" }]}
        placeholder="Select an Option"
        onCreateOption={(inputValue) =>
          setOptions([...options, { label: inputValue, value: inputValue }])
        }
        name="ValueList"
        options={options}
      />
    </div>
  );
};

export const AsyncCreatable = () => {
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([
    { value: "value1", label: "Value One" },
    { value: "value2", label: "Value Two" },
    { value: "value3", label: "Value Three" },
    { value: "value4", label: "Value Four" },
    { value: "value5", label: "Value Five" },
  ]);

  const filterOptions = (inputValue) => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  return (
    <div className="p-4 mb-2 h-60">
      <Select
        placeholder="Select Placeholder"
        className="w-full"
        size="small"
        label="Select"
        isCreateable
        cacheOptions
        value={value}
        onChange={(newValue) => setValue(newValue)}
        defaultOptions={options}
        onCreateOption={(inputValue) =>
          setOptions((prevOptions) => [
            ...prevOptions,
            { label: inputValue, value: inputValue },
          ])
        }
        loadOptions={loadOptions}
      />
    </div>
  );
};

export const Searchable = () => {
  return (
    <div className="p-4 mb-2 h-60">
      <Select
        placeholder="Select Placeholder"
        className="w-full"
        size="small"
        label="Select"
        isSearchable
        options={[
          { value: "value1", label: "Value One" },
          { value: "value2", label: "Value Two" },
          { value: "value3", label: "Value Three" },
          { value: "value4", label: "Value Four" },
          { value: "value5", label: "Value Five" },
        ]}
      />
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="w-full h-60">
      <div className="flex flex-col gap-8">
        <div className="w-full">
          <Select
            label="Default/Large"
            placeholder="Select Placeholder"
            options={[
              { value: "value1", label: "Value One" },
              { value: "value2", label: "Value Two" },
              { value: "value3", label: "Value Three" },
              { value: "value4", label: "Value Four" },
              { value: "value5", label: "Value Five" },
            ]}
          />
        </div>
        <div className="w-full">
          <Select
            label="Small"
            placeholder="Select Placeholder"
            size="small"
            options={[
              { value: "value1", label: "Value One" },
              { value: "value2", label: "Value Two" },
              { value: "value3", label: "Value Three" },
              { value: "value4", label: "Value Four" },
              { value: "value5", label: "Value Five" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export const ExampleWithRef = () => {
  const selectRef = useRef();

  return (
    <>
      <div className="w-full mb-4 flex gap-3">
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
      <div className="h-60">
        <Select
          innerRef={selectRef}
          openMenuOnFocus
          options={[
            { value: "value1", label: "Value One" },
            { value: "value2", label: "Value Two" },
            { value: "value3", label: "Value Three" },
          ]}
        />
      </div>
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
          <Typography style="h2">Modal</Typography>
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
      story:
        "To properly render Select inside a Modal or Pane, you need to pass `strategy` prop as `fixed` which will attach the menu to the document body node instead of the parent.",
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
          <Typography style="h2">Modal</Typography>
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

export const FormikSelectStory = () => {
  const [values, setValues] = useState([]);
  return (
    <>
      <Formik
        initialValues={{
          selects: [
            { formikSelect: { value: "v1", label: "v1" } },
            { formikSelect: { value: "v1", label: "v1" } },
          ],
        }}
        onSubmit={(values) => setValues(values)}
      >
        {({ values }) => (
          <Form>
            <div className="flex flex-col space-y-6">
              <FieldArray name="selects">
                {({ push, remove }) => (
                  <div className="flex flex-col space-y-3">
                    {values.selects.map((_, index) => (
                      <div key={index} className="flex items-end space-x-6">
                        <FormikSelect
                          name={`selects.${index}.formikSelect`}
                          label="Select"
                          options={[
                            { value: "v1", label: "v1" },
                            { value: "v2", label: "v2" },
                            { value: "v3", label: "v3" },
                          ]}
                        />
                        <Button
                          label="Remove"
                          className="mb-2"
                          onClick={() => remove(index)}
                        />
                      </div>
                    ))}
                    <Button
                      className="self-start"
                      label="Add"
                      onClick={() => push({ formikSelect: null })}
                    />
                  </div>
                )}
              </FieldArray>
              <Button className="self-start" label="Submit" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
      <div className="py-6">
        <Typography weight="bold">Selected Values:</Typography>
        {values.selects?.map(({ formikSelect }, index) => (
          <Typography key={index}>{formikSelect?.label}</Typography>
        ))}
      </div>
    </>
  );
};

FormikSelectStory.storyName = "Formik Select";
FormikSelectStory.parameters = {
  docs: {
    description: {
      story:
        "`import { Select as FormikSelect } from '@bigbinary/neetoui/formik';`",
    },
  },
};
