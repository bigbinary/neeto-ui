import React from "react";

import Accordion from "components/Accordion";

const description = `
\`import { Accordion } from "@bigbinary/neetoui";\`

\`Accordion\` allows users to expand or collapse sections of content organized in
a vertical stack to reveal or hide additional information.

\`Accordion\` component has one subcomponent:

- \`Accordion.Item\`: Represents an individual section within an accordion that can be expanded or collapsed.
`;

const metadata = {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { "Accordion.Item": Accordion.Item },
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A15",
    },
  },
  argTypes: {
    children: {
      description:
        "To specify the content to be rendered inside the Accordion.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    style: {
      description: "To set the style of the Accordion.",
      control: "radio",
      options: Object.values({
        primary: "primary",
        secondary: "secondary",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    padded: {
      description: "To add padding to the Accordion container.",
      control: "boolean",
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    defaultActiveKey: {
      description: "Index of the Accordion item to be opened initially.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    className: {
      description: "To provide external classnames to Accordion container.",
      control: "text",
      table: { type: { summary: "string" } },
    },
  },
};

const AccordionStory = args => (
  <Accordion {...args}>
    <Accordion.Item title="Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
  </Accordion>
);

AccordionStory.storyName = "Default";

const Template = args => (
  <Accordion {...args}>
    <Accordion.Item title="Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
    <Accordion.Item title="Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
    <Accordion.Item title="Accordion 3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
  </Accordion>
);

const Styles = args => (
  <div className="flex flex-col space-y-5">
    <div>
      <h4 className="mb-6 capitalize">Primary</h4>
      <Accordion {...args}>
        <Accordion.Item title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Item>
        <Accordion.Item title="Accordion 3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Item>
      </Accordion>
    </div>
    <div>
      <h4 className="mb-6 capitalize">Secondary</h4>
      <Accordion {...args} style="secondary">
        <Accordion.Item title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Item>
        <Accordion.Item title="Accordion 3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
);

const DefaultActiveKeyStory = Template.bind({});
DefaultActiveKeyStory.storyName = "Accordion with defaultActiveKey";
DefaultActiveKeyStory.args = { defaultActiveKey: 1 };

const AccordionWithPadding = args => (
  <Accordion {...args}>
    <Accordion.Item title="Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
    <Accordion.Item title="Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
    <Accordion.Item title="Accordion 3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
  </Accordion>
);

AccordionWithPadding.args = { padded: true };
AccordionWithPadding.storyName = "Accordion with padding";
AccordionWithPadding.parameters = { layout: "default" };

const AccordionWithCustomizedIcon = args => (
  <Accordion {...args}>
    <Accordion.Item iconProps={{ color: "red", size: 28 }} title="Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
    <Accordion.Item iconProps={{ color: "red", size: 28 }} title="Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
    <Accordion.Item iconProps={{ color: "red", size: 28 }} title="Accordion 3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
  </Accordion>
);

AccordionWithCustomizedIcon.storyName = "Accordion with customized icon";
AccordionWithCustomizedIcon.parameters = { layout: "default" };

const AccordionCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Accordion\`
component.

\`\`\`css
// Outer wrapper
--neeto-ui-accordion-outer-wrapper-padding-x: 0px;
--neeto-ui-accordion-outer-wrapper-padding-y: 0px;
--neeto-ui-accordion-outer-wrapper-border-radius: 0px;
--neeto-ui-accordion-outer-wrapper-bg-color: transparent;

// Wrapper
--neeto-ui-accordion-wrapper-border-width: 1px;
--neeto-ui-accordion-wrapper-border-color: rgb(var(--neeto-ui-gray-300));
--neeto-ui-accordion-wrapper-border-radius: 0px;

// Item
--neeto-ui-accordion-item-padding-x: 8px;
--neeto-ui-accordion-item-padding-y: 16px;
--neeto-ui-accordion-item-font-size: var(--neeto-ui-text-base);
--neeto-ui-accordion-item-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-accordion-item-line-height: 16px;
--neeto-ui-accordion-item-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-accordion-item-bg-color: transparent;

// Drop
--neeto-ui-accordion-drop-padding-x: 8px;
--neeto-ui-accordion-drop-padding-top: 4px;
--neeto-ui-accordion-drop-padding-bottom: 16px;
--neeto-ui-accordion-drop-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-accordion-drop-margin-bottom: 0px;

// Item - Open
--neeto-ui-accordion-item-open-color: rgb(var(--neeto-ui-black));

// Item - Hover
--neeto-ui-accordion-item-hover-color: rgb(var(--neeto-ui-black));

// Item - Focus Visible
--neeto-ui-accordion-item-focus-visible-color: rgb(var(--neeto-ui-black));
--neeto-ui-accordion-item-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-accordion-item-focus-visible-outline-offset: 1px;
--neeto-ui-accordion-item-focus-visible-box-shadow: none;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-accordion {
  --neeto-ui-accordion-item-padding-x: 0px;
  --neeto-ui-accordion-drop-padding-x: 0px;
  --neeto-ui-accordion-item-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-accordion-item-hover-color: rgb(var(--neeto-ui-primary-600));
  --neeto-ui-accordion-item-open-color: rgb(var(--neeto-ui-primary-800));
}
\`\`\`

#### Output
`;

const CSSCustomization = args => (
  <Accordion {...args}>
    <Accordion.Item title="Custom Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Item>
  </Accordion>
);

CSSCustomization.storyName = "Accordion CSS Customization";

CSSCustomization.args = {
  label: "Accordion",
  className: "neetix-accordion",
};

CSSCustomization.parameters = {
  docs: { description: { story: AccordionCSSCustomization } },
};

export {
  AccordionStory,
  Styles,
  DefaultActiveKeyStory,
  AccordionWithPadding,
  AccordionWithCustomizedIcon,
  CSSCustomization,
};

export default metadata;
