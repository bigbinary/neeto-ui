import React, { useState } from "react";
import { Tab } from "../../../lib/v2";
import Header from "../Header";

const Tabs = () => {
  const [tab, setTab] = useState(true);
  return (
    <div className="w-full">
      <Header title="Tabs" />
      <div className="w-full px-6 py-8 space-y-6">
        <Tab className="grid grid-cols-2">
          <Tab.Item active={tab} onClick={() => setTab(true)}>
            Tab 1
          </Tab.Item>
          <Tab.Item active={!tab} onClick={() => setTab(false)}>
            Tab 2
          </Tab.Item>
        </Tab>
        <Tab className="grid grid-cols-3">
          <Tab.Item active>Tab 1</Tab.Item>
          <Tab.Item>Tab 2</Tab.Item>
          <Tab.Item>Tab 3</Tab.Item>
        </Tab>
        <Tab className="grid grid-cols-4">
          <Tab.Item active>Tab 1</Tab.Item>
          <Tab.Item>Tab 2</Tab.Item>
          <Tab.Item>Tab 3</Tab.Item>
          <Tab.Item>Tab 4</Tab.Item>
        </Tab>
        <Tab className="grid grid-cols-5">
          <Tab.Item active>Tab 1</Tab.Item>
          <Tab.Item>Tab 2</Tab.Item>
          <Tab.Item>Tab 3</Tab.Item>
          <Tab.Item>Tab 4</Tab.Item>
          <Tab.Item>Tab 5</Tab.Item>
        </Tab>
      </div>
    </div>
  );
};

export default Tabs;