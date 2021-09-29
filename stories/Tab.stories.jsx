import React, { useState } from "react";

import Tab from "../lib/components/Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tab } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const TwoItems = () => {
  const [tab, setTab] = useState(true);
  return (
    <Tab className="grid grid-cols-2">
      <Tab.Item active={tab} onClick={() => setTab(true)}>
        Tab 1
      </Tab.Item>
      <Tab.Item active={!tab} onClick={() => setTab(false)}>
        Tab 2
      </Tab.Item>
    </Tab>
  );
};

export const ThreeItems = () => {
  return (
    <Tab className="grid grid-cols-3">
      <Tab.Item active>Tab 1</Tab.Item>
      <Tab.Item>Tab 2</Tab.Item>
      <Tab.Item>Tab 3</Tab.Item>
    </Tab>
  );
};

export const FourItems = (args) => {
  return (
    <Tab className="grid grid-cols-3">
      <Tab.Item active>Tab 1</Tab.Item>
      <Tab.Item>Tab 2</Tab.Item>
      <Tab.Item>Tab 3</Tab.Item>
      <Tab.Item>Tab 4</Tab.Item>
    </Tab>
  );
};
