import React from "react";

import Kbd from "components/Kbd";

import KbdCSSCustomization from "!raw-loader!./KbdStoriesDocs/KbdCSSCustomization.mdx";
import KbdDocs from "!raw-loader!./KbdStoriesDocs/KbdDocs.mdx";

const metadata = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "padded",
    docs: { description: { component: KbdDocs } },
  },
};

const Template = args => (
  <div className="flex gap-x-1">
    <Kbd {...args} keyName="⌘" />
    <Kbd {...args} keyName="⇧" />
    <Kbd {...args} keyName="B" />
  </div>
);

const WithTooltips = () => (
  <div className="flex gap-x-1">
    <Kbd keyName="⌘" tooltipProps={{ content: "Command", position: "top" }} />
    <Kbd keyName="⇧" tooltipProps={{ content: "Shift", position: "top" }} />
    <Kbd keyName="B" tooltipProps={{ content: "Bold", position: "top" }} />
  </div>
);

WithTooltips.storyName = "Kbd with tooltips";

const Default = Template.bind({});

const CSSCustomization = args => <Kbd {...args} />;

CSSCustomization.storyName = "Kbd CSS Customization";

CSSCustomization.args = { keyName: "⌘", className: "neetix-kbd" };

CSSCustomization.parameters = {
  docs: { description: { story: KbdCSSCustomization } },
};

export { Default, WithTooltips, CSSCustomization };

export default metadata;
