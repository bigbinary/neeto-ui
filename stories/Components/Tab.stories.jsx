import React, { useState } from "react";

import Tab from "../../lib/components/Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  subcomponents: {
    "Tab.Item": Tab.Item,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tab } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = (args) => (
  <Tab {...args}>
    <Tab.Item active={true}>Label</Tab.Item>
    <Tab.Item>Label</Tab.Item>
  </Tab>
);

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const LargeWithoutUnderline = Template.bind({});
LargeWithoutUnderline.args = {
  size: "large",
  noUnderline: true,
};

export const TwoItems = () => {
  const [tab, setTab] = useState(true);
  return (
    <Tab>
      <Tab.Item active={tab} onClick={() => setTab(true)}>
        Label
      </Tab.Item>
      <Tab.Item active={!tab} onClick={() => setTab(false)}>
        Label
      </Tab.Item>
    </Tab>
  );
};

export const ThreeItems = () => {
  return (
    <Tab>
      <Tab.Item active>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
    </Tab>
  );
};

export const FourItems = () => {
  return (
    <Tab>
      <Tab.Item active>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
    </Tab>
  );
};
