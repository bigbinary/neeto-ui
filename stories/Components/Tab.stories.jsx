import React, { useState } from "react";

import { Favorite, Search, Close } from "neetoicons";

import Tab from "components/Tab";

import TabStoriesDocs from "!raw-loader!./TabStoriesDocs.mdx";

const metadata = {
  title: "Components/Tab",
  component: Tab,
  subcomponents: { "Tab.Item": Tab.Item },
  parameters: {
    layout: "padded",
    docs: { description: { component: TabStoriesDocs } },
  },
};

const Template = args => (
  <Tab {...args}>
    <Tab.Item active>Label</Tab.Item>
    <Tab.Item>Label</Tab.Item>
  </Tab>
);

const Default = Template.bind({});

const Sizes = args => (
  <div className="mb-4 flex flex-col space-y-4">
    <Tab {...args}>
      <Tab.Item active>Small</Tab.Item>
      <Tab.Item>Small</Tab.Item>
    </Tab>
    <Tab size="large">
      <Tab.Item active>Large</Tab.Item>
      <Tab.Item>Large</Tab.Item>
    </Tab>
  </div>
);

const WithIcon = args => (
  <Tab {...args}>
    <Tab.Item active icon={Favorite}>
      Label
    </Tab.Item>
    <Tab.Item icon={Search}>Label</Tab.Item>
    <Tab.Item icon={Close}>Label</Tab.Item>
  </Tab>
);
WithIcon.storyName = "With icon";

const WithoutUnderline = Template.bind({});
WithoutUnderline.args = { noUnderline: true };
WithoutUnderline.storyName = "Without underline";

const MultipleItems = args => {
  const [tab, setTab] = useState("label1");

  return (
    <Tab {...args}>
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

export { Default, Sizes, WithIcon, WithoutUnderline, MultipleItems };

export default metadata;
