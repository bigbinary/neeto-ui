/* eslint-disable no-empty-pattern */
import React from "react";
import {
  Warning,
  CloseCircle,
  CheckCircle,
  Info,
} from "@bigbinary/neeto-icons";

import Callout from "../../lib/components/Callout";
import { icons } from "../constants";

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

export const Default = (args) => {
  return <Callout {...args}>This is a callout!</Callout>;
};

export const Styles = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <Callout style="success">This is a success callout!</Callout>
      <Callout style="warning">This is a warning callout!</Callout>
      <Callout style="danger">This is a danger callout!</Callout>
      <Callout style="info">This is an info callout!</Callout>
    </div>
  );
};

export const WithIcon = ({}) => {
  return (
    <Callout style="info" icon={Info}>
      This is an info callout with icon!
    </Callout>
  );
};
WithIcon.storyName = "With icon";

export const Variants = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <Callout style="success" icon={CheckCircle}>
        This is a success callout!
      </Callout>
      <Callout style="info" icon={Info}>
        This is an info callout!
      </Callout>
      <Callout style="warning" icon={Warning}>
        This is a warning callout!
      </Callout>
      <Callout style="danger" icon={CloseCircle}>
        This is a danger callout!
      </Callout>
    </div>
  );
};
