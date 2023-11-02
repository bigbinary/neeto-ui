import React from "react";

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

const Default = args => <Stepper {...args} />;

Default.args = {};

Default.storyName = "Stepper";

export { Default };
export default metadata;
