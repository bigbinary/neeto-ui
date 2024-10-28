import React from "react";

import Slider from "components/Slider";

import SliderCSSCustomization from "!raw-loader!./SliderStoriesDocs/SliderCSSCustomization.mdx";
import SliderDocs from "!raw-loader!./SliderStoriesDocs/SliderDocs.mdx";

const metadata = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
    docs: { description: { component: SliderDocs } },
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

CSSCustomization.parameters = {
  docs: { description: { story: SliderCSSCustomization } },
};

export { Default, CSSCustomization };

export default metadata;
