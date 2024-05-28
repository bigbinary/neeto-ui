import React from "react";

import ProgressBar from "components/ProgressBar";

import ProgressBarCSSCustomization from "!raw-loader!./ProgressBarDocs/ProgressBarCSSCustomization.mdx";
import ProgressBarDocs from "!raw-loader!./ProgressBarDocs/ProgressBarDocs.mdx";

const metadata = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "padded",
    docs: { description: { component: ProgressBarDocs } },
  },
};

const Default = args => <ProgressBar {...args} />;

Default.args = { progressPercentage: 50, progressValue: "50%", className: "" };

const CSSCustomization = args => (
  <div className="neetix-progress-bar">
    <ProgressBar {...args} />
  </div>
);

CSSCustomization.storyName = "ProgressBar CSS Customization";

CSSCustomization.args = {
  progressPercentage: 50,
  progressValue: "50%",
  className: "",
};

CSSCustomization.parameters = {
  docs: { description: { story: ProgressBarCSSCustomization } },
};

export { Default, CSSCustomization };

export default metadata;
