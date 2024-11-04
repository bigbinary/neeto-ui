import React, { useState } from "react";

import Stepper from "components/Stepper";

const description = `
\`import { Stepper } from "@bigbinary/neetoui";\`

Use \`Stepper\` to help users keep track of their progress when completing a
specific task divided in a set of steps.
`;

const metadata = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
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

const StepperCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Stepper\`
component.

\`\`\`css
// Wrapper
--neeto-ui-stepper-wrapper-gap: 8px;

// Item
--neeto-ui-stepper-item-gap: 8px;
--neeto-ui-stepper-item-padding: 8px;

// Item Separator
--neeto-ui-stepper-item-separator-width: 48px;
--neeto-ui-stepper-item-separator-border-top: 2px dashed rgb(var(--neeto-ui-gray-400));
--neeto-ui-stepper-item-separator-margin-left: 8px;

// Item - Done Separator
--neeto-ui-stepper-item-done-separator-border-top-style: solid;
--neeto-ui-stepper-item-done-separator-border-color: rgb(
  var(--neeto-ui-primary-500)
);

// Stage
--neeto-ui-stepper-stage-width: 28px;
--neeto-ui-stepper-stage-height: 28px;
--neeto-ui-stepper-stage-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-stepper-stage-border-radius: var(--neeto-ui-rounded-full);

// Stage Done
--neeto-ui-stepper-item-done-stage-bg-color: rgb(var(--neeto-ui-success-800));

// Stage Active
--neeto-ui-stepper-item-active-stage-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-stepper-item-active-stage-inner-width: 18px;
--neeto-ui-stepper-item-active-stage-inner-height: 18px;
--neeto-ui-stepper-item-active-stage-inner-border-width: 2px;
--neeto-ui-stepper-item-active-stage-inner-border-color: rgb(
  var(--neeto-ui-white)
);
--neeto-ui-stepper-item-active-stage-inner-border-radius: var(
  --neeto-ui-rounded-full
);

// Label
--neeto-ui-stepper-label-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-stepper-label-font-size: var(--neeto-ui-text-sm);
--neeto-ui-stepper-label-line-height: 16px;

// Label Hover
--neeto-ui-stepper-label-hover-color: rgb(var(--neeto-ui-black));

// Label Active
--neeto-ui-stepper-label-active-color: rgb(var(--neeto-ui-black));
--neeto-ui-stepper-label-active-font-weight: var(--neeto-ui-font-semibold);
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-stepper {
  --neeto-ui-stepper-stage-bg-color: rgb(var(--neeto-ui-success-100));
  --neeto-ui-stepper-item-active-stage-bg-color: rgb(
    var(--neeto-ui-success-800)
  );
  --neeto-ui-stepper-item-done-separator-border-color: rgb(
    var(--neeto-ui-success-800)
  );
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: StepperCSSCustomization } },
};

export { Default, Variant, CSSCustomization };
export default metadata;
