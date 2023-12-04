import React from "react";

import Accordion from "components/Accordion";

import AccordionCSSCustomization from "!raw-loader!./AccordionStoriesDocs/AccordionCSSCustomization.mdx";
import AccordionDocs from "!raw-loader!./AccordionStoriesDocs/AccordionDocs.mdx";

const metadata = {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { "Accordion.Item": Accordion.Item },
  parameters: {
    layout: "padded",
    docs: { description: { component: AccordionDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A15",
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
