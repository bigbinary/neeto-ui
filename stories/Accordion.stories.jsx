import React, { useState } from "react";

import Accordion from "../lib/components/Accordion";
// import Button from "../lib/components/Button";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Accordion } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const AccordionStory = () => {
  return (
    <Accordion>
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
AccordionStory.storyName = "Accordion";
