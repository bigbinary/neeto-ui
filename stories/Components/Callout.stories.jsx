/* eslint-disable no-empty-pattern */
import React from "react";

import { Warning, CloseCircle, CheckCircle, Info } from "neetoicons";

import Callout from "components/Callout";

import { icons } from "../constants";

const Default = args => <Callout {...args}>This is a Callout!</Callout>;

const Styles = ({}) => (
  <div className="flex flex-col gap-4">
    <Callout style="success">This is a success Callout!</Callout>
    <Callout style="warning">This is a warning Callout!</Callout>
    <Callout style="danger">This is a danger Callout!</Callout>
    <Callout style="info">This is an info Callout!</Callout>
  </div>
);

const WithIcon = ({}) => (
  <Callout icon={Info} style="info">
    This is an info Callout with icon!
  </Callout>
);
WithIcon.storyName = "With icon";

const Variants = ({}) => (
  <div className="flex flex-col gap-4">
    <Callout icon={CheckCircle} style="success">
      This is a success Callout!
    </Callout>
    <Callout icon={Info} style="info">
      This is an info Callout!
    </Callout>
    <Callout icon={Warning} style="warning">
      This is a warning Callout!
    </Callout>
    <Callout icon={CloseCircle} style="danger">
      This is a danger Callout!
    </Callout>
  </div>
);

export { Default, Styles, WithIcon, Variants };

export default {
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
