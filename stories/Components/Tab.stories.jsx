import React, { useState } from "react";

import { Favorite, Search, Close } from "neetoicons";

import Tab from "components/Tab";

const description = `
\`import { Tab } from "@bigbinary/neetoui";\`

\`Tab\` is a navigational element used to switch between different sections or
views within the same interface.
`;

const metadata = {
  title: "Components/Tab",
  component: Tab,
  subcomponents: { "Tab.Item": Tab.Item },
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    noUnderline: {
      description: "To hide the underline",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    size: {
      description: "Set the size of the Tabs.",
      control: "radio",
      options: Object.values({ large: "large", small: "small" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "small" },
      },
    },
    children: {
      description: "To add content inside the Tab",
      control: "object",
      table: { type: { summary: "node" } },
    },
    className: {
      description: "Extra classes can be provided to the Tab",
      control: "text",
      table: { type: { summary: "string" } },
    },
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

const CSSCustomization = args => (
  <Tab className="neetix-tab" {...args}>
    <Tab.Item active>Label</Tab.Item>
    <Tab.Item>Label</Tab.Item>
  </Tab>
);

CSSCustomization.storyName = "Tab CSS Customization";

const TabCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Tab\`
component.

\`\`\`css
--neeto-ui-tab-wrapper-border-width: 2px;
--neeto-ui-tab-wrapper-border-color: rgb(var(--neeto-ui-gray-300));
--neeto-ui-tab-padding-x: 8px;
--neeto-ui-tab-padding-y: 12px;
--neeto-ui-tab-font-size: var(--neeto-ui-text-sm);
--neeto-ui-tab-font-weight: var(--neeto-ui-font-semibold);
--neeto-ui-tab-line-height: 1;
--neeto-ui-tab-color: rgb(var(--neeto-ui-gray-600));
--neeto-ui-tab-border-color: transparent;
--neeto-ui-tab-gap: 12px;
--neeto-ui-tab-icon-size: 16px;
--neeto-ui-tab-text-decoration: none;
--neeto-ui-tab-outline: none;

// Hover
--neeto-ui-tab-hover-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-tab-hover-text-decoration: none;
--neeto-ui-tab-hover-outline: none;

// Focus
--neeto-ui-tab-focus-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-tab-focus-text-decoration: none;
--neeto-ui-tab-focus-outline: none;

// Active
--neeto-ui-tab-active-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tab-active-border-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tab-active-text-decoration: none;
--neeto-ui-tab-active-outline: none;

// Focus Visible
--neeto-ui-tab-focus-visible-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-tab-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-tab-focus-visible-outline-offset: 1px;
--neeto-ui-tab-focus-visible-box-shadow: none;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-tab {
  --neeto-ui-tab-active-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-tab-active-border-color: rgb(var(--neeto-ui-primary-500));
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: TabCSSCustomization } },
};

export {
  Default,
  Sizes,
  WithIcon,
  WithoutUnderline,
  MultipleItems,
  CSSCustomization,
};

export default metadata;
