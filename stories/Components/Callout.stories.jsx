import React from "react";

import { Warning, CloseCircle, CheckCircle, Info } from "neetoicons";

import Callout from "components/Callout";

import { icons } from "../constants";

import CalloutCSSCustomization from "!raw-loader!./CalloutStoriesDocs/CalloutCSSCustomization.mdx";
import CalloutDocs from "!raw-loader!./CalloutStoriesDocs/CalloutDocs.mdx";

const metadata = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "padded",
    docs: { description: { component: CalloutDocs } },
  },
  argTypes: { icon: { options: Object.keys(icons), mapping: icons } },
};

const Default = args => <Callout {...args}>This is a Callout!</Callout>;

const Styles = args => (
  <div className="flex flex-col gap-4">
    <Callout {...args} style="success">
      This is a success Callout!
    </Callout>
    <Callout {...args} style="warning">
      This is a warning Callout!
    </Callout>
    <Callout {...args} style="danger">
      This is a danger Callout!
    </Callout>
    <Callout {...args} style="info">
      This is an info Callout!
    </Callout>
  </div>
);

const WithIcon = args => (
  <Callout {...args} icon={Info} style="info">
    This is an info Callout with icon!
  </Callout>
);
WithIcon.storyName = "With icon";

const Variants = args => (
  <div className="flex flex-col gap-4">
    <Callout {...args} icon={CheckCircle} style="success">
      This is a success Callout!
    </Callout>
    <Callout {...args} icon={Info} style="info">
      This is an info Callout!
    </Callout>
    <Callout {...args} icon={Warning} style="warning">
      This is a warning Callout!
    </Callout>
    <Callout {...args} icon={CloseCircle} style="danger">
      This is a danger Callout!
    </Callout>
  </div>
);

const CSSCustomization = args => (
  <Callout className="neetix-callout--success" style="success" {...args}>
    This is a custom Callout!
  </Callout>
);

CSSCustomization.storyName = "Callout CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: CalloutCSSCustomization } },
};

export { Default, Styles, WithIcon, Variants, CSSCustomization };

export default metadata;
