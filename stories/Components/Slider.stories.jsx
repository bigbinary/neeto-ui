import React from "react";

import Slider from "components/Slider";
import SliderStoriesDocs from "!raw-loader!./SliderStoriesDocs.mdx";

const metadata = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: SliderStoriesDocs,
      },
    },
  },
};

const Default = args => <Slider {...args} />;

Default.args = {};

export { Default };

export default metadata;
