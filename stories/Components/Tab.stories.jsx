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
WithIcon.storyName = "With icon";

export const WithoutUnderline = Template.bind({});
WithoutUnderline.args = {
  noUnderline: true,
};
WithoutUnderline.storyName = "Without underline";

export const MultipleItems = ({}) => {
  const [tab, setTab] = useState("label1");
  return (
    <Tab>
      <Tab.Item active={tab === "label1"} onClick={() => setTab("label1")}>
        Label 1
      </Tab.Item>
      <Tab.Item active={tab === "label2"} onClick={() => setTab("label2")}>
        Label 2
      </Tab.Item>
      <Tab.Item active={tab === "label3"} onClick={() => setTab("label3")}>
        Label 3
      </Tab.Item>
    </Tab>
  );
};
MultipleItems.storyName = "Multiple items";
