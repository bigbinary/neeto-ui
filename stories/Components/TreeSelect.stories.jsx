import React, { useState } from "react";

import { DownArrow, DownArrowCircle } from "neetoicons";
import * as yup from "yup";

import Button from "components/Button";
import TreeSelect from "components/TreeSelect";
import { TreeSelect as FormikTreeSelect, Form } from "formikcomponents";

import TreeSelectCSSCustomization from "!raw-loader!./TreeSelectStoriesDocs/TreeSelectCSSCustomization.mdx";
import TreeSelectDocs from "!raw-loader!./TreeSelectStoriesDocs/TreeSelectDocs.mdx";

const metadata = {
  title: "Components/TreeSelect",
  component: TreeSelect,
  parameters: {
    layout: "padded",
    docs: { description: { component: TreeSelectDocs } },
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
