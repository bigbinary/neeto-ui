import React from "react";

import Accordion from "../../lib/components/Accordion";
import WhatsNew from "../WHATS_NEW/accordian.whats_new.md";

export default {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: {
    "Accordion.Item": Accordion.Item,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Accordion } from "@bigbinary/neetoui";`',
      },
    },
    whatsNewSource: WhatsNew,
  },
};

export const AccordionStory = (args) => {
  return (
    <Accordion {...args}>
      <Accordion.Item title="Accordion 1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Accordion.Item>
    </Accordion>
  );
};

AccordionStory.storyName = "Single Accordion";

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

export const MultipleAccordionStory = Template.bind({});
MultipleAccordionStory.storyName = "Multiple Accordions";

export const DefaultActiveKeyStory = Template.bind({});
DefaultActiveKeyStory.storyName = "Accordion with defaultActiveKey";
DefaultActiveKeyStory.args = {
  defaultActiveKey: 1,
};

export const SecondaryAccordionWithPadding = (args) => {
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

SecondaryAccordionWithPadding.args = {
  padded: true,
  style: "secondary",
};

SecondaryAccordionWithPadding.parameters = {
  layout: "default",
};
