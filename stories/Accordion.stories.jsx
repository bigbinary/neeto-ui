import React from "react";

import Accordion from "../lib/components/Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: {
    'Accordion.Item': Accordion.Item
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Accordion } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const Template = (args) => {
  return (
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
};

export const AccordionStory = Template.bind({});
AccordionStory.storyName = "Accordion";

export const DefaultActiveKeyStory = Template.bind({});
DefaultActiveKeyStory.storyName = "Accordion with defaultActiveKey";
DefaultActiveKeyStory.args = {
  defaultActiveKey: 1
}

export const AccordionWithCustomBackground = (args) => {
  return (
    <div className="neeto-ui-bg-gray-100 p-6">
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
    </div>
  );
};

AccordionWithCustomBackground.parameters = {
  layout: "default"
}