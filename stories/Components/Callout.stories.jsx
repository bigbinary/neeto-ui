import React from "react";

import { Warning, CloseCircle, CheckCircle, Info } from "neetoicons";

import Callout from "components/Callout";

import { icons } from "../constants";

const metadata = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Callout } from "@bigbinary/neetoui";`',
      },
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
  },
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

export { Default, Styles, WithIcon, Variants };

export default metadata;
