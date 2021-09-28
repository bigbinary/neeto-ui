import React from "react";
import { Info, Warning } from "@bigbinary/neeto-icons";

import Callout from "../lib/components/Callout";

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
};

export const InfoCallout = () => {
  return (
    <Callout style="info" icon={Info}>
      This is an info callout!
    </Callout>
  );
};

export const WarningCallout = () => {
  return (
    <Callout style="warning" icon={Warning}>
      This is an info callout!
    </Callout>
  );
};

export const DangerCallout = () => {
  return (
    <Callout style="danger">
      This is an info callout!
    </Callout>
  );
};
