/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import { Favorite, Search, Close } from "@bigbinary/neeto-icons";
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

export const Sizes = ({}) => (
  <div className="flex flex-col mb-4 space-y-4">
    <Tab>
      <Tab.Item active>Small</Tab.Item>
      <Tab.Item>Small</Tab.Item>
    </Tab>

    <Tab size="large">
      <Tab.Item active>Large</Tab.Item>
      <Tab.Item>Large</Tab.Item>
    </Tab>
  </div>
);

export const WithIcon = ({}) => {
  return (
    <Tab>
      <Tab.Item active icon={Favorite}>
        Label
      </Tab.Item>
      <Tab.Item icon={Search}>Label</Tab.Item>
      <Tab.Item icon={Close}>Label</Tab.Item>
    </Tab>
  );
};

export const WithoutUnderline = Template.bind({});
WithoutUnderline.args = {
  size: "large",
  noUnderline: true,
};

export const TwoItems = ({}) => {
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

export const ThreeItems = ({}) => {
  return (
    <Tab>
      <Tab.Item active>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
    </Tab>
  );
};

export const FourItems = ({}) => {
  return (
    <Tab>
      <Tab.Item active>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
      <Tab.Item>Label</Tab.Item>
    </Tab>
  );
};
