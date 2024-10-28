import React, { useState } from "react";

import Stepper from "components/Stepper";

import StepperCSSCustomization from "!raw-loader!./StepperStoriesDocs/StepperCSSCustomization.mdx";
import StepperDocs from "!raw-loader!./StepperStoriesDocs/StepperDocs.mdx";

const metadata = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
    docs: { description: { component: StepperDocs } },
  },
  argTypes: {
    steps: {
      description: "To provide the array of steps",
      control: "object",
      table: {
        type: {
          summary: "array",
          detail: `Array<{
  id: string | number,
  label: string
}>`,
        },
      },
    },
    activeIndex: {
      description: "To specify the active step",
      control: "number",
      table: { type: { summary: "number" } },
    },
    setActiveIndex: {
      description: "To specify the function to set the active step",
      control: "function",
      table: { type: { summary: "func" } },
    },
  },
};

const STEPS = [
  { id: 1, label: "Connect your calendar" },
  { id: 2, label: "Connect conferencing app" },
  { id: 3, label: "Set availability" },
];

const STEPS_MAX = [
  { id: 1, label: "Installation" },
  { id: 2, label: "Customize widget" },
  { id: 3, label: "Invite users" },
  { id: 4, label: "Connect mailbox" },
  { id: 5, label: "Connect" },
];

const Default = args => {
  const [activeIndex, setActiveIndex] = useState(0);

  return <Stepper {...{ activeIndex, setActiveIndex, ...args }} />;
};

const Variant = args => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stepper {...{ activeIndex, setActiveIndex }} steps={STEPS_MAX} {...args} />
  );
};

Default.args = { steps: STEPS };

Default.storyName = "Stepper";
Variant.storyName = "Stepper with 5 steps";

const CSSCustomization = args => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="neetix-stepper">
      <Stepper {...{ activeIndex, setActiveIndex }} steps={STEPS} {...args} />
    </div>
  );
};

CSSCustomization.storyName = "Stepper CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: StepperCSSCustomization } },
};

export { Default, Variant, CSSCustomization };
export default metadata;
