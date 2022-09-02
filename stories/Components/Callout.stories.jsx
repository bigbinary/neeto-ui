import React from "react";
import {
  Warning,
  CloseCircle,
  CheckCircle,
  Info,
} from "@bigbinary/neeto-icons";

import Callout from "../../lib/components/Callout";

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

export const SuccessCallout = () => {
  return <Callout style="success" icon={CheckCircle}>This is a success callout!</Callout>;
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
      This is a warning callout!
    </Callout>
  );
};

export const DangerCallout = () => {
  return <Callout style="danger" icon={CloseCircle}>This is a danger callout!</Callout>;
};

export const Variants = () => {
  return <div className="flex flex-col gap-4">
    <Callout style="success" icon={CheckCircle}>This is a success callout!</Callout>
    <Callout style="info" icon={Info}>
      This is an info callout!
    </Callout>
    <Callout style="warning" icon={Warning}>
      This is a warning callout!
    </Callout>
    <Callout style="danger" icon={CloseCircle}>This is a danger callout!</Callout>
  </div>;
};