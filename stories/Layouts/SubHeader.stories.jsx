import React from "react";

import SubHeader from "../../lib/components/layouts/SubHeader";
import Button from "../../lib/components/Button";
import Typography from "../../lib/components/Typography";

import { Delete } from "@bigbinary/neeto-icons";

export default {
  title: "Layouts/SubHeader",
  component: SubHeader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { SubHeader } from "@bigbinary/neetoui/layouts";`',
      },
    },
  },
};

export const Default = () => {
  return (
    <SubHeader
      leftActionBlock={
        <Typography style="h4" component="h4">
          118 Contacts
        </Typography>
      }
      rightActionBlock={
        <>
          <Button size="small" label="Delete" style="secondary" icon={Delete} />
          <Button size="small" label="Disable" style="secondary" />
        </>
      }
    />
  );
};

export const WithLeftActionBlock = () => {
  return (
    <SubHeader
      leftActionBlock={
        <Typography style="h4" component="h4">
          118 Contacts
        </Typography>
      }
    />
  );
};
WithLeftActionBlock.storyName = "With left action block";

export const WithRightActionBlock = () => {
  return (
    <SubHeader
      rightActionBlock={
        <>
          <Button size="small" label="Delete" style="secondary" icon={Delete} />
          <Button size="small" label="Disable" style="secondary" />
        </>
      }
    />
  );
};
WithRightActionBlock.storyName = "With right action block";
