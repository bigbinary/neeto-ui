import React, { useState } from "react";

import Stepper from "components/Stepper";

import StepperStoriesDocs from "!raw-loader!./StepperStoriesDocs.mdx";

const metadata = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
    docs: { description: { component: StepperStoriesDocs } },
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

  return (
    <Stepper
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      {...args}
    />
  );
};

const Variant = args => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stepper
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      steps={STEPS_MAX}
      {...args}
    />
  );
};

Default.args = { steps: STEPS };

Default.storyName = "Stepper";
Variant.storyName = "Stepper with 5 steps";

export { Default, Variant };
export default metadata;
