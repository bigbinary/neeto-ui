import React, { useState } from "react";

import { DownArrow, DownArrowCircle } from "neetoicons";
import * as yup from "yup";

import Button from "components/Button";
import TreeSelect from "components/TreeSelect";
import { TreeSelect as FormikTreeSelect, Form } from "formikcomponents";

const description = `
\`import { TreeSelect } from "@bigbinary/neetoui";\`

We use antd TreeSelect under the hood. For more customization options, see
[TreeSelect](https://ant.design/components/tree-select).
`;

const metadata = {
  title: "Components/TreeSelect",
  component: TreeSelect,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    allowClear: {
      description:
        "Controls whether the value is allowed to be cleared or not.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    className: {
      description: "To specify additional classes.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    popupClassName: {
      description: "To specify additional classes to the popup.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    disabled: {
      description: "To disable the TreeSelect component.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    error: {
      description: "To display the specified error.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    fieldNames: {
      description:
        "This prop can be used to override the default keys of label and value pairs in options.",
      control: "object",
      table: {
        type: {
          summary: "shape",
          detail: `{
      label: string,
      value: string
    }`,
        },
      },
    },
    label: {
      description: "To display a label above the TreeSelect component.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    onChange: {
      description:
        "The callback function that will be triggered when value changes.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onSearch: {
      description:
        "Callback function to be executed when search input changes that can be used for advanced usecases. This is not necessary as basic search works when `showSearch` is enabled.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    placeholder: {
      description: "The placeholder string to be displayed.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    required: {
      description: "To specify whether TreeSelect field is required or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    searchValue: {
      description:
        "The search value to make search controlled. This is not required as basic search works when `showSearch` is enabled.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    showSearch: {
      description: "To enable search for the TreeSelect component.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    size: {
      description: "To specify the size of the TreeSelect component.",
      control: "radio",
      options: ["small", "middle", "large"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "middle" },
      },
    },
    suffixIcon: {
      description:
        "To specify the icon at the end of the TreeSelect component.",
      control: "object",
      table: { type: { summary: "elementType" } },
    },
    switcherIcon: {
      description: "To specify the icon next to options that have children.",
      control: "object",
      table: { type: { summary: "elementType" } },
    },
    treeData: {
      description: "The options to be passed to the TreeSelect component.",
      control: "object",
      table: {
        type: {
          summary: "arrayOf(shape)",
          detail: `Array<{
      label: string,
      value: string,
      disabled?: boolean,
      children?: array
    } | {
      id: string,
      label: string,
      value: string,
      disabled?: boolean,
      pId: string
    }>`,
        },
      },
    },
    treeDataSimpleMode: {
      description:
        "This prop specifies the format of data that has to be passed in the `treeData` prop. When enabled, treeData can be a flat array of the form `{ id, label, value, pId }`.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    value: {
      description: "The currently selected option.",
      control: "text",
      table: { type: { summary: "string" } },
    },
  },
};

const treeData = [
  { id: 1, value: 1, label: "Category 1", pId: null },
  { id: 2, value: 2, label: "Category 2", pId: null },
  { id: 3, value: 3, label: "Category 3", pId: null },
  { id: 4, value: 4, label: "Category 1-1", pId: 1 },
  { id: 5, value: 5, label: "Category 2-1", pId: 2 },
];

const commonProps = {
  label: "Select a category",
  treeData,
  placeholder: "Category 1",
};

const Template = args => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <TreeSelect
      {...args}
      value={selectedValue}
      onChange={value => setSelectedValue(value)}
    />
  );
};

const Default = Template.bind({});

Default.args = commonProps;

const treeDataNested = [
  {
    value: 1,
    label: "Category 1",
    children: [{ value: 4, label: "Category 1-1" }],
  },
  {
    value: 2,
    label: "Category 2",
    children: [{ value: 5, label: "Category 2-1" }],
  },
  { value: 3, label: "Category 3" },
];

const TreeSelectNestedData = Template.bind({});

TreeSelectNestedData.args = {
  ...commonProps,
  treeData: treeDataNested,
  treeDataSimpleMode: false,
};

const TreeSelectError = Template.bind({});

TreeSelectError.args = { ...commonProps, error: "Sample error text" };

const TreeSelectSearchableAndClearable = Template.bind({});

TreeSelectSearchableAndClearable.args = {
  ...commonProps,
  showSearch: true,
  allowClear: true,
};

const TreeSelectSizes = args => (
  <div className="flex flex-col space-y-4">
    <TreeSelect {...args} size="small" />
    <TreeSelect {...args} size="middle" />
    <TreeSelect {...args} size="large" />
  </div>
);

TreeSelectSizes.args = commonProps;

const WithCustomSuffixAndSwitcherIcon = Template.bind({});

WithCustomSuffixAndSwitcherIcon.args = {
  ...commonProps,
  suffixIcon: DownArrowCircle,
  switcherIcon: DownArrow,
};

const FormikTreeSelectStory = _ => (
  <Form
    className="space-y-2"
    formikProps={{
      initialValues: { category: "" },
      validationSchema: yup.object({
        category: yup.string().required(),
      }),
      onSubmit: values => window.alert(JSON.stringify(values)),
    }}
  >
    <FormikTreeSelect required {...commonProps} name="category" />
    <Button label="Submit" type="submit" />
  </Form>
);

FormikTreeSelectStory.args = commonProps;
FormikTreeSelectStory.storyName = "Formik TreeSelect";

const CSSCustomization = args => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <TreeSelect
      {...args}
      value={selectedValue}
      onChange={value => setSelectedValue(value)}
    />
  );
};

CSSCustomization.storyName = "TreeSelect CSS Customization";
CSSCustomization.args = {
  ...commonProps,
  className: "neetix-tree-select",
};

const TreeSelectCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`TreeSelect\`
component.

\`\`\`css
// Select
--neeto-ui-tree-select-border-radius: var(--neeto-ui-rounded);
--neeto-ui-tree-select-border-width: 1px;
--neeto-ui-tree-select-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-tree-select-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-tree-select-color: rgb(var(--neeto-ui-gray-800));

// Placeholder
--neeto-ui-tree-select-placeholder-color: rgb(var(--neeto-ui-gray-400));

// Hover
--neeto-ui-tree-select-hover-border-color: rgb(var(--neeto-ui-gray-700));

// Disabled
--neeto-ui-tree-select-disabled-bg-color: rgb(var(--neeto-ui-gray-100));

// Focus Within
--neeto-ui-tree-select-focus-within-border-color: rgb(
  var(--neeto-ui-primary-500)
);
--neeto-ui-tree-select-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);

// Dropdown
--neeto-ui-tree-select-dropdown-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-tree-select-dropdown-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tree-select-dropdown-border-radius: var(--neeto-ui-rounded);
--neeto-ui-tree-select-dropdown-border-width: 1px;
--neeto-ui-tree-select-dropdown-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-tree-select-dropdown-box-shadow: var(--neeto-ui-shadow-lg);

// Tree
--neeto-ui-tree-select-dropdown-tree-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-tree-select-dropdown-tree-color: rgb(var(--neeto-ui-gray-800));

// Tree Hover
--neeto-ui-tree-select-dropdown-tree-hover-bg-color: rgb(
  var(--neeto-ui-gray-200)
);

// Tree Selected
--neeto-ui-tree-select-dropdown-tree-selected-color: rgb(var(--neeto-ui-white));

// Tree Switcher
--neeto-ui-tree-select-dropdown-tree-switcher-width: 32px;

// Tree Switcher Icon
--neeto-ui-tree-select-dropdown-tree-switcher-icon-margin-top: 4px;
--neeto-ui-tree-select-dropdown-tree-switcher-icon-width: 32px;
--neeto-ui-tree-select-dropdown-tree-switcher-icon-svg-size: 16px;

// Tree List Holder
--neeto-ui-tree-select-dropdown-tree-list-holder-padding-right: 24px;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-tree-select {
  --neeto-ui-tree-select-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-tree-select-focus-within-border-color: rgb(
    var(--neeto-ui-success-500)
  );
  --neeto-ui-tree-select-focus-within-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: TreeSelectCSSCustomization } },
};

export {
  Default,
  TreeSelectNestedData,
  TreeSelectError,
  TreeSelectSearchableAndClearable,
  TreeSelectSizes,
  WithCustomSuffixAndSwitcherIcon,
  FormikTreeSelectStory,
  CSSCustomization,
};

export default metadata;
