import React from "react";

import Spinner from "components/Spinner";

import SpinnerCSSCustomization from "!raw-loader!./SpinnerStoriesDocs/SpinnerCSSCustomization.mdx";
import SpinnerDocs from "!raw-loader!./SpinnerStoriesDocs/SpinnerDocs.mdx";

const metadata = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "padded",
    docs: { description: { component: SpinnerDocs } },
  },
};

const Template = args => (
  <div className="flex h-20 w-20 items-center justify-center">
    <Spinner {...args} />
  </div>
);

const Default = Template.bind({});

const LightTheme = args => (
  <div className="neeto-ui-bg-black flex h-20 w-20 items-center justify-center">
    <Spinner {...args} theme="light" />
  </div>
);
LightTheme.storyName = "Light theme";

const SizeCutomization = args => (
  <div className="flex items-center gap-8">
    <div className="flex h-20 w-20 items-center justify-center">
      <Spinner {...args} size="small" />
    </div>
    <div className="flex h-20 w-20 items-center justify-center">
      <Spinner {...args} size="medium" />
    </div>
  </div>
);
SizeCutomization.storyName = "Size Cutomization";

const CSSCustomization = args => (
  <div className="flex h-20 w-20 items-center justify-center">
    <Spinner {...args} />
  </div>
);

CSSCustomization.storyName = "Spinner CSS Customization";

CSSCustomization.args = { className: "neetix-spinner" };

CSSCustomization.parameters = {
  docs: { description: { story: SpinnerCSSCustomization } },
};

export { Default, LightTheme, SizeCutomization, CSSCustomization };

export default metadata;
