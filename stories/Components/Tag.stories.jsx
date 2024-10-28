import React from "react";

import { Favorite } from "neetoicons";

import Tag from "components/Tag";

import TagCSSCustomization from "!raw-loader!./TagStoriesDocs/TagCSSCustomization.mdx";
import TagDocs from "!raw-loader!./TagStoriesDocs/TagDocs.mdx";

const DEPRECATED_PROPS = {
  color: { table: { type: { summary: null } }, control: false },

  indicatorColor: {
    table: { type: { summary: null } },
    control: false,
  },
};

const metadata = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
    docs: { description: { component: TagDocs } },
  },
  argTypes: {
    icon: {
      description: "To specify the icon to be used in the Tag.",
      control: "object",
      table: {
        type: { summary: "oneOfType([string, elementType])" },
      },
    },
    size: {
      description: "To specify the size of the Tag.",
      control: "radio",
      options: Object.keys({ small: "small", large: "large" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "small" },
      },
    },
    label: {
      description: "To specify the label to be used in the Tag.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    type: {
      description: "To specify the type of a Tag.",
      control: "radio",
      options: Object.keys({ outline: "outline", solid: "solid" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "outline" },
      },
    },
    style: {
      description: "To specify the style of a Tag.",
      control: "select",
      options: Object.keys({
        primary: "primary",
        secondary: "secondary",
        info: "info",
        success: "success",
        warning: "warning",
        danger: "danger",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    indicatorStyle: {
      description: "To specify the style of the indication icon in a Tag.",
      control: "select",
      options: Object.keys({
        primary: "primary",
        secondary: "secondary",
        info: "info",
        success: "success",
        warning: "warning",
        danger: "danger",
      }),
      table: { type: { summary: "string" } },
    },
    onClose: {
      description:
        "To specify the callback function to be called when the close icon is clicked.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    disabled: {
      description:
        "To specify whether to disable any action on click of the close icon.",
      control: "boolean",
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    className: {
      description: "To provide additional class names to the Tag.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    color: {
      description: "Use `status` prop instead.",
      control: false,
      table: { type: { summary: "string" }, category: "Removed" },
    },
    indicatorColor: {
      description: "Use `indicatorStatus` prop instead.",
      control: false,
      table: { type: { summary: "string" }, category: "Removed" },
    },
    children: {
      description: "To specify the children to be rendered inside the Tag.",
      control: "text",
      table: { type: { summary: "string" } },
    },
  },
};

const Template = args => <Tag {...args} />;

const Default = Template.bind({});
Default.args = { label: "Label" };

const Sizes = args => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag {...args} label="Large" size="large" />
    <Tag {...args} label="Small" size="small" />
  </div>
);

const Styles = args => (
  <div className="flex flex-row items-start justify-start space-x-4">
    <Tag {...args} label="Primary" style="primary" />
    <Tag {...args} label="Secondary" style="secondary" />
    <Tag {...args} label="Info" style="info" />
    <Tag {...args} label="Success" style="success" />
    <Tag {...args} label="Warning" style="warning" />
    <Tag {...args} label="Danger" style="danger" />
  </div>
);

const Types = args => (
  <div className="space-y-4">
    <div>
      <h5 className="mb-4 capitalize">Outline</h5>
      <div className="space-x-3">
        <Tag {...args} label="Primary" style="primary" type="outline" />
        <Tag {...args} label="Secondary" style="secondary" type="outline" />
        <Tag {...args} label="Info" style="info" type="outline" />
        <Tag {...args} label="Success" style="success" type="outline" />
        <Tag {...args} label="Warning" style="warning" type="outline" />
        <Tag {...args} label="Danger" style="danger" type="outline" />
      </div>
    </div>
    <div>
      <h5 className="mb-4 capitalize">Solid</h5>
      <div className="space-x-3">
        <Tag {...args} label="Primary" style="primary" type="solid" />
        <Tag {...args} label="Secondary" style="secondary" type="solid" />
        <Tag {...args} label="Info" style="info" type="solid" />
        <Tag {...args} label="Success" style="success" type="solid" />
        <Tag {...args} label="Warning" style="warning" type="solid" />
        <Tag {...args} label="Danger" style="danger" type="solid" />
      </div>
    </div>
  </div>
);

const WithIndicator = args => (
  <div className="flex flex-row items-start justify-start space-x-4">
    <Tag {...args} indicatorStyle="primary" label="Primary" style="secondary" />
    <Tag
      {...args}
      indicatorStyle="secondary"
      label="Secondary"
      style="secondary"
    />
    <Tag {...args} indicatorStyle="info" label="Info" style="secondary" />
    <Tag {...args} indicatorStyle="success" label="Success" style="secondary" />
    <Tag {...args} indicatorStyle="warning" label="Warning" style="secondary" />
    <Tag {...args} indicatorStyle="danger" label="Danger" style="secondary" />
  </div>
);
WithIndicator.storyName = "With indicator";

const WithIcon = args => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag {...args} icon={Favorite} label="With icon" />
    <Tag {...args} icon={Favorite} label="With icon" size="large" />
  </div>
);
WithIcon.storyName = "With icon";

const WithOnClose = args => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag {...args} label="With close icon" onClose={() => {}} />
    <Tag {...args} label="With close icon" size="large" onClose={() => {}} />
  </div>
);
WithOnClose.storyName = "With on close";

const CSSCustomization = args => <Tag {...args} />;

CSSCustomization.storyName = "Tag CSS Customization";

CSSCustomization.args = {
  label: "Custom Tag",
  className: "neetix-tag--primary",
};

CSSCustomization.parameters = {
  docs: { description: { story: TagCSSCustomization } },
};

export {
  Default,
  Sizes,
  Styles,
  Types,
  WithIndicator,
  WithIcon,
  WithOnClose,
  CSSCustomization,
};

export default metadata;
