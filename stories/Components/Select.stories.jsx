import React, { useRef, useState } from "react";

import { FieldArray, Formik, Form } from "formik";
import { times } from "ramda";
import * as yup from "yup";

import { Select, Button, Modal, Pane, Typography } from "components";
import { Select as FormikSelect } from "formikcomponents";

import { FORMIK_SELECT } from "../constants";

import SelectCSSCustomization from "!raw-loader!./SelectStoriesDocs/SelectCSSCustomization.mdx";
import SelectDocs from "!raw-loader!./SelectStoriesDocs/SelectDocs.mdx";

const metadata = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: { description: { component: SelectDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A5",
    },
  },
};

const Template = args => (
  <div className="mb-2 h-80 p-4">
    <Select {...args} />
  </div>
);

const OPTIONS = Array.from({ length: 20 }, (_, index) => ({
  value: `value${index}`,
  label: `Value ${index}`,
}));

const Default = Template.bind({});
Default.args = {
  label: "Select",
  defaultValue: { value: "value15", label: "Value 15" },
  placeholder: "Select an option",
  isDisabled: false,
  isClearable: true,
  isSearchable: true,
  name: "ValueList",
  optionRemapping: {},
  options: OPTIONS,
  strategy: "fixed",
  portalProps: { className: "select-menu-list" },
};

const Sizes = args => (
  <div className="h-60 w-full">
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Select
          {...args}
          isMulti
          label="Small"
          placeholder="Select placeholder"
          size="small"
          options={[
            { value: "value1", label: "Value one" },
            { value: "value2", label: "Value two" },
            { value: "value3", label: "Value three" },
            { value: "value4", label: "Value four" },
            { value: "value5", label: "Value five" },
          ]}
        />
      </div>
      <div className="w-full">
        <Select
          {...args}
          isMulti
          // size="medium"
          label="Medium"
          placeholder="Select placeholder"
          options={[
            { value: "value1", label: "Value one" },
            { value: "value2", label: "Value two" },
            { value: "value3", label: "Value three" },
            { value: "value4", label: "Value four" },
            { value: "value5", label: "Value five" },
          ]}
        />
      </div>
      <div className="w-full">
        <Select
          {...args}
          isMulti
          label="Large"
          placeholder="Select placeholder"
          size="large"
          options={[
            { value: "value1", label: "Value one" },
            { value: "value2", label: "Value two" },
            { value: "value3", label: "Value three" },
            { value: "value4", label: "Value four" },
            { value: "value5", label: "Value five" },
          ]}
        />
      </div>
    </div>
  </div>
);

const MultiSelect = Template.bind({});
MultiSelect.storyName = "Multi Select";
MultiSelect.args = {
  label: "Multi Select",
  addButtonLabel: "Add",
  storyName: "Multi Select",
  isMulti: true,
  defaultValue: [
    { value: "value3", label: "Value three" },
    { value: "value5", label: "Value five" },
  ],
  placeholder: "Select an option",
  name: "ValueList",
  options: [
    { value: "value1", label: "Value one" },
    { value: "value2", label: "Value two" },
    { value: "value3", label: "Value three" },
    { value: "value4", label: "Value four" },
    { value: "value5", label: "Value five" },
  ],
};

const Grouped = Template.bind({});
Grouped.args = {
  label: "Grouped Select",
  isMulti: true,
  defaultValue: [
    { value: "value3", label: "Value three" },
    { value: "value7", label: "Value seven" },
  ],
  placeholder: "Select an option",
  name: "ValueList",
  options: [
    {
      label: "Group A",
      options: [
        { value: "value1", label: "Value one" },
        { value: "value2", label: "Value two" },
        { value: "value3", label: "Value three" },
        { value: "value4", label: "Value four" },
        { value: "value5", label: "Value five" },
      ],
    },
    {
      label: "Group B",
      options: [
        { value: "value6", label: "Value six" },
        { value: "value7", label: "Value seven" },
        { value: "value8", label: "Value eight" },
        { value: "value9", label: "Value nine" },
        { value: "value10", label: "Value ten" },
      ],
    },
  ],
};

const OptionTooltips = Template.bind({});
OptionTooltips.storyName = "Option Tooltip";
OptionTooltips.args = {
  label: "Select with Tooltips",
  placeholder: "Hover any option",
  strategy: "fixed",
  options: OPTIONS.map(option => ({
    value: option.value,
    label: option.label,
    tooltipContent: `Tooltip content for ${option.label}`,
  })),
};

OptionTooltips.parameters = {
  docs: {
    description: {
      story: `Use the \`tooltipContent\` field on each option to show a tooltip when hovering.`,
    },
  },
};

const Creatable = args => {
  const [options, setOptions] = useState([
    { value: "value1", label: "Value one" },
    { value: "value2", label: "Value two" },
    { value: "value3", label: "Value three" },
    { value: "value4", label: "Value four" },
    { value: "value5", label: "Value five" },
  ]);

  return (
    <div className="mb-2 h-60 p-4">
      <Select
        {...{ ...args, options }}
        isCreateable
        isSearchable
        defaultValue={[{ value: "value3", label: "Value three" }]}
        label="Creatable Select"
        name="ValueList"
        placeholder="Select an option"
        onCreateOption={inputValue =>
          setOptions([...options, { label: inputValue, value: inputValue }])
        }
      />
    </div>
  );
};

Creatable.parameters = {
  docs: {
    description: {
      story:
        "Creatable `Select` component allows users to create new options on the fly as they type. It is suitable for scenarios where the list of options is relatively small and known in advance.",
    },
  },
};

const AsyncCreatable = args => {
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([
    { value: "value1", label: "Value one" },
    { value: "value2", label: "Value two" },
    { value: "value3", label: "Value three" },
    { value: "value4", label: "Value four" },
    { value: "value5", label: "Value five" },
  ]);

  const filterOptions = inputValue =>
    options.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

  const loadOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  return (
    <div className="mb-2 h-60 p-4">
      <Select
        {...{ ...args, loadOptions, value }}
        cacheOptions
        isCreateable
        className="w-full"
        defaultOptions={options}
        label="Select"
        placeholder="Select placeholder"
        size="small"
        onChange={newValue => setValue(newValue)}
        onCreateOption={inputValue =>
          setOptions(prevOptions => [
            ...prevOptions,
            { label: inputValue, value: inputValue },
          ])
        }
      />
    </div>
  );
};
AsyncCreatable.storyName = "Async creatable";
AsyncCreatable.parameters = {
  docs: {
    description: {
      story:
        "In addition to creating new options, async creatable `Select` allows asynchronous loading of option data from a remote source. It is suitable for scenarios where the list of options is large, dynamic, or fetched from a server.",
    },
  },
};

const Searchable = args => (
  <div className="mb-2 h-60 p-4">
    <Select
      {...args}
      isSearchable
      className="w-full"
      label="Select"
      placeholder="Select placeholder"
      size="small"
      options={[
        { value: "value1", label: "Value one" },
        { value: "value2", label: "Value two" },
        { value: "value3", label: "Value three" },
        { value: "value4", label: "Value four" },
        { value: "value5", label: "Value five" },
      ]}
    />
  </div>
);

const ExampleWithRef = args => {
  const selectRef = useRef();

  return (
    <>
      <div className="mb-4 flex w-full gap-3">
        <Button
          label="Focus"
          onClick={() => {
            selectRef.current.focus();
          }}
        />
        <Button
          label="Blur"
          onClick={() => {
            selectRef.current.blur();
          }}
        />
      </div>
      <div className="h-60">
        <Select
          {...args}
          openMenuOnFocus
          innerRef={selectRef}
          options={[
            { value: "value1", label: "Value one" },
            { value: "value2", label: "Value two" },
            { value: "value3", label: "Value three" },
          ]}
        />
      </div>
    </>
  );
};
ExampleWithRef.storyName = "Example with ref";

const SelectInModal = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal {...{ isOpen }} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Typography style="h2">Modal</Typography>
        </Modal.Header>
        <Modal.Body>
          <Select
            {...args}
            label="Select"
            placeholder="Select placeholder"
            strategy="fixed"
            options={[
              { value: "value1", label: "Value one" },
              { value: "value2", label: "Value two" },
              { value: "value3", label: "Value three" },
            ]}
          />
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};
SelectInModal.storyName = "Select in modal";

SelectInModal.parameters = {
  docs: {
    description: {
      story:
        "To properly render `Select` inside a modal or pane, you need to pass `strategy` prop as `fixed` which will attach the menu to the document body node instead of the parent.",
    },
  },
};

const SelectInPane = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Pane" onClick={() => setIsOpen(true)} />
      <Pane {...{ isOpen }} onClose={() => setIsOpen(false)}>
        <Pane.Header>
          <Typography style="h2">Modal</Typography>
        </Pane.Header>
        <Pane.Body className="w-full">
          <Select
            {...args}
            className="w-full"
            label="Select"
            placeholder="Select placeholder"
            strategy="fixed"
            options={[
              { value: "value1", label: "Value one" },
              { value: "value2", label: "Value two" },
              { value: "value3", label: "Value three" },
            ]}
          />
        </Pane.Body>
      </Pane>
    </>
  );
};
SelectInPane.storyName = "Select in pane";

const FormikSelectStory = args => {
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
        onSubmit={values => setValues(values)}
      >
        {({ values }) => (
          <Form>
            <div className="flex flex-col space-y-6">
              <FieldArray name="selects">
                {({ push, remove }) => (
                  <div className="flex flex-col space-y-3">
                    {values.selects.map((_, index) => (
                      <div className="flex items-end space-x-6" key={index}>
                        <FormikSelect
                          {...args}
                          label="Select"
                          name={`selects.${index}.formikSelect`}
                          options={[
                            { value: "v1", label: "v1" },
                            { value: "v2", label: "v2" },
                            { value: "v3", label: "v3" },
                          ]}
                        />
                        <Button
                          className="mb-2"
                          label="Remove"
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
        <Typography weight="bold">Selected values:</Typography>
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
    source: { code: FORMIK_SELECT },
  },
};

const options = times(
  index => ({ value: `v${index + 1}`, label: `v${index + 1}` }),
  10
);

const FormikSelectWithValidation = () => (
  <Formik
    initialValues={{ select1: null, select2: null }}
    validationSchema={yup.object().shape({
      select1: yup
        .object()
        .shape({
          value: yup.string().required(),
          label: yup.string().required(),
        })
        .nullable()
        .required("Select a value"),
      select2: yup
        .object()
        .shape({
          value: yup.string().required(),
          label: yup.string().required(),
        })
        .nullable()
        .required("Select a value"),
    })}
  >
    <Form className="flex space-x-2">
      <FormikSelect
        {...{ options }}
        isClearable
        required
        label="Select 1"
        name="select1"
      />
      <FormikSelect
        {...{ options }}
        isClearable
        required
        label="Select 2"
        name="select2"
      />
      <Button className="mt-4 self-end" label="Submit" type="submit" />
    </Form>
  </Formik>
);

const WithLazyLoadMenuList = args => {
  const TotalValues = 15;
  const [options, setOptions] = useState([
    { value: "value1", label: "Value one" },
    { value: "value2", label: "Value two" },
    { value: "value3", label: "Value three" },
    { value: "value4", label: "Value four" },
    { value: "value5", label: "Value five" },
    { value: "value6", label: "Value six" },
    { value: "value7", label: "Value seven" },
    { value: "value8", label: "Value eight" },
    { value: "value9", label: "Value nine" },
    { value: "value10", label: "Value ten" },
  ]);

  const handleFetchMore = () => {
    setTimeout(() => {
      setOptions(options => [
        ...options,
        { value: "value11", label: "Value eleven" },
        { value: "value12", label: "Value twelve" },
        { value: "value13", label: "Value thirteen" },
        { value: "value14", label: "Value fourteen" },
        { value: "value15", label: "Value fifteen" },
      ]);
    }, 1500);
  };

  return (
    <div className="mb-2 h-80 p-4">
      <Select
        {...{ ...args, options }}
        isAsyncLoadOptionEnabled
        fetchMore={handleFetchMore}
        totalOptionsCount={TotalValues}
      />
    </div>
  );
};

WithLazyLoadMenuList.storyName = "Lazy load MenuList options";

WithLazyLoadMenuList.args = {};

const CSSCustomization = args => <Select {...args} />;

CSSCustomization.storyName = "Select CSS Customization";

CSSCustomization.args = {
  label: "Custom Select label",
  placeholder: "Custom Select placeholder",
  className: "neetix-select",
};

CSSCustomization.parameters = {
  docs: { description: { story: SelectCSSCustomization } },
};

export {
  Default,
  Sizes,
  MultiSelect,
  Grouped,
  OptionTooltips,
  Creatable,
  AsyncCreatable,
  Searchable,
  ExampleWithRef,
  SelectInModal,
  SelectInPane,
  FormikSelectStory,
  WithLazyLoadMenuList,
  FormikSelectWithValidation,
  CSSCustomization,
};

export default metadata;
