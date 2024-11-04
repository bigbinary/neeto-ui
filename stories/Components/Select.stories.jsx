import React, { useRef, useState } from "react";

import { FieldArray, Formik, Form } from "formik";
import { times } from "ramda";
import * as yup from "yup";

import { Select, Button, Modal, Pane, Typography } from "components";
import { Select as FormikSelect } from "formikcomponents";

import { FORMIK_SELECT } from "../constants";

const description = `
\`import { Select } from "@bigbinary/neetoui";\`

A \`Select\` component allows users to choose an option from a list of predefined
choices, presented as a dropdown menu.
`;

const metadata = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A5",
    },
  },
  argTypes: {
    defaultValue: {
      description: "To specify the default selected option.",
      control: "object",
      table: { type: { summary: "oneOfType([object, array])" } },
    },
    placeholder: {
      description: "To specify the placeholder text.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    isDisabled: {
      description: "To specify whether the Select input is disabled.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    isClearable: {
      description: "To specify whether the Select input is clearable.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    isSearchable: {
      description: "To specify whether the Select input is searchable.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    name: {
      description: "To specify the name for the Select input.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    optionRemapping: {
      description:
        'The `options` prop expects an array of objects of the format `{ label: "", value: "" }`. If your array has different keys, you can specify them using this prop. Eg: `{ label: "name", value: "id" }` if `options` is an array of  `{ name: "", id: "" }` objects.',
      control: "object",
      table: {
        type: {
          summary: "shape",
          detail: "{ label: string, value: string }",
        },
      },
    },
    options: {
      description: "To provide the options for the Select input.",
      control: "array",
      table: { type: { summary: "array" } },
    },
    size: {
      description: "To specify the size of the Select component.",
      control: "select",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    strategy: {
      description: "To specify positioning strategy for Select component.",
      control: "select",
      options: Object.values({ default: "default", fixed: "fixed" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    label: {
      description:
        "To specify the text to be displayed above the Select component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    required: {
      description: "To specify whether the Select field is required or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description:
        "To specify the error message to be displayed in the Select component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    helpText: {
      description:
        "To specify the help text that appears below the Select component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    className: {
      description:
        "To specify external classnames as overrides to the Select component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    isCreateable: {
      description:
        "To specify whether the Select component is a creatable Select component.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaltValue: { summary: "false" },
      },
    },
    innerRef: {
      description: "To specify the ref to the Select component.",
      control: "object",
      table: { type: { summary: "oneOfType([func, object])" } },
    },
    fetchMore: {
      description: "Callback to load more options",
      control: "function",
      table: { type: { summary: "func" } },
    },
    totalOptionsCount: {
      description:
        "To specify if the total number of option available when lazy option load is enabled.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    isAsyncLoadOptionEnabled: {
      description: "To specify if async options loading is enabled",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    addButtonLabel: {
      description: "To specify the label for the button shown in multi select",
      control: "text",
      table: { type: { summary: "string" } },
    },
    portalProps: {
      description: "To specify the extra props to be passed to the menu list.",
      control: "object",
      table: { type: { summary: "object" } },
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

const SelectCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Select\`
component.

\`\`\`css
// Select
--neeto-ui-select-padding-x: 0px;
--neeto-ui-select-padding-y: 0px;
--neeto-ui-select-min-height: 0px;
--neeto-ui-select-font-size: var(--neeto-ui-text-sm);
--neeto-ui-select-border-width: 1px;
--neeto-ui-select-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-select-border-radius: var(--neeto-ui-rounded);
--neeto-ui-select-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-select-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-select-line-height: 1.2;

// Placeholder
--neeto-ui-select-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Focus
--neeto-ui-select-focus-outline-color: transparent;
--neeto-ui-select-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);
--neeto-ui-select-focus-border-color: rgb(var(--neeto-ui-primary-500));

// Hover
--neeto-ui-select-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Error
--neeto-ui-select-error-border-color: rgb(var(--neeto-ui-error-500));
--neeto-ui-select-error-box-shadow: 0 0 0 3px rgb(var(--neeto-ui-error-100));

// Indicators
--neeto-ui-select-indicators-padding: 0px;
--neeto-ui-select-indicators-gap: 8px;
--neeto-ui-select-indicators-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-select-indicators-hover-color: rgb(var(--neeto-ui-gray-700));

// Menu
--neeto-ui-select-menu-border-width: 1px;
--neeto-ui-select-menu-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-select-menu-border-radius: var(--neeto-ui-rounded);
--neeto-ui-select-menu-margin-top: 6px;
--neeto-ui-select-menu-margin-bottom: 16px;
--neeto-ui-select-menu-z-index: 20px;
--neeto-ui-select-menu-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-select-menu-box-shadow: var(--neeto-ui-shadow-lg);
--neeto-ui-select-menu-max-height: 480px;

// Menu Option
--neeto-ui-select-menu-option-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-select-menu-option-padding-x: 12px;
--neeto-ui-select-menu-option-padding-y: 8px;
--neeto-ui-select-menu-option-line-height: 1.1;
--neeto-ui-select-menu-option-min-height: 32px;

// Menu Option Focus
--neeto-ui-select-menu-option-focus-bg-color: rgb(var(--neeto-ui-gray-200));

// Menu Option Disabled
--neeto-ui-select-menu-option-disabled-color: rgb(var(--neeto-ui-gray-200));

// Menu Option Active
--neeto-ui-select-menu-option-acitve-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-select-menu-option-acitve-color: rgb(var(--neeto-ui-white));

// Menu Fixed Option
--neeto-ui-select-menu-fixed-option-border-top-width: 1px;
--neeto-ui-select-menu-fixed-option-border-top-color: rgb(
  var(--neeto-ui-gray-100)
);
--neeto-ui-select-menu-fixed-option-padding-x: 0px;
--neeto-ui-select-menu-fixed-option-padding-y: 2px;
--neeto-ui-select-menu-fixed-option-link-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-select-menu-fixed-option-link-padding-x: 12px;
--neeto-ui-select-menu-fixed-option-link-padding-y: 8px;
--neeto-ui-select-menu-fixed-option-link-hover-color: rgb(
  var(--neeto-ui-gray-800)
);

// Multi Value
--neeto-ui-select-multi-value-bg-color: transparent;
--neeto-ui-select-multi-value-border-width: 1px;
--neeto-ui-select-multi-value-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-select-multi-value-border-radius: 100px;
--neeto-ui-select-multi-value-margin-right: 4px;
--neeto-ui-select-multi-value-margin-y: 4px;
--neeto-ui-select-multi-value-padding-x: 8px;
--neeto-ui-select-multi-value-padding-y: 0px;
--neeto-ui-select-multi-value-color: rgb(var(--neeto-ui-gray-800));

--neeto-ui-select-multi-value-label-margin-right: 6px;
--neeto-ui-select-multi-value-label-font-size: var(--neeto-ui-text-sm);
--neeto-ui-select-multi-value-label-line-height: 1;
--neeto-ui-select-multi-value-label-padding-x: 0px;
--neeto-ui-select-multi-value-label-padding-y: 2px;

--neeto-ui-select-multi-value-remove-hover-opacity: 0.7;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-select {
  --neeto-ui-select-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-select-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
  --neeto-ui-select-focus-border-color: rgb(var(--neeto-ui-success-500));
  --neeto-ui-select-menu-border-radius: var(--neeto-ui-rounded-none);
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: SelectCSSCustomization } },
};

export {
  Default,
  Sizes,
  MultiSelect,
  Grouped,
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
