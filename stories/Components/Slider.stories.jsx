import React from "react";

import Slider from "components/Slider";

const description = `
\`import { Slider } from "@bigbinary/neetoui";\`

We use Ant Design's \`Slider\` component under the hood. For extra customization,
refer [AntD Slider](https://ant.design/components/slider#api).
`;

const metadata = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    min: {
      description: "The minimum value the slider can slide to.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      description: "The maximum value the slider can slide to.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    onChange: {
      description:
        "Callback function that is fired when the user changes the slider's value.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    value: {
      description:
        "The value of slider. When `range` is false, use number, otherwise, use [number, number]",
      control: "object",
      table: { type: { summary: "oneOfType([number, array])" } },
    },
    defaultValue: {
      description:
        "The value of slider. When `range` is false, use number, otherwise, use [number, number]",
      control: "object",
      table: {
        type: { summary: "oneOfType([number, array])" },
        defaultValue: { summary: "0" },
      },
    },
  },
};

const Default = args => <Slider {...args} />;

Default.args = { min: 0, max: 100, defaultValue: 20, label: "Slider" };

const CSSCustomization = args => (
  <div className="neetix-slider">
    <Slider {...args} />
  </div>
);

CSSCustomization.storyName = "Slider CSS Customization";

CSSCustomization.args = {
  min: 0,
  max: 100,
  defaultValue: 20,
  label: "Slider",
};

const SliderCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Slider\`
component.

\`\`\`css
--neeto-ui-slider-handle-box-shadow: 0 0 0 2px rgb(var(--neeto-ui-primary-600));
--neeto-ui-slider-handle-focus-box-shadow: 0 0 0 4px rgb(var(--neeto-ui-primary-500));
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-slider {
  --neeto-ui-slider-handle-box-shadow: 0 0 0 2px rgb(var(--neeto-ui-success-600));
  --neeto-ui-slider-handle-focus-box-shadow: 0 0 0 4px rgb(var(--neeto-ui-success-500));
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: SliderCSSCustomization } },
};

export { Default, CSSCustomization };

export default metadata;
