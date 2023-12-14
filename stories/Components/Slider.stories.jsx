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
