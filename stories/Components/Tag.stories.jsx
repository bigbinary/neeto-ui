import React from "react";

import { Favorite } from "neetoicons";

import Tag from "components/Tag";

import { icons } from "../constants";

const DEPRECATED_PROPS = {
  color: {
    table: { type: { summary: null } },
    control: false,
  },

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
    docs: {
      description: {
        component: '`import { Tag } from "@bigbinary/neetoui";`',
      },
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    ...DEPRECATED_PROPS,
  },
};

const Template = args => <Tag {...args} />;

const Default = Template.bind({});
Default.args = {
  label: "Label",
};

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

export { Default, Sizes, Styles, Types, WithIndicator, WithIcon, WithOnClose };

export default metadata;
