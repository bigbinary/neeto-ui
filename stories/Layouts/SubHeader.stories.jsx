import React from "react";
import { Delete } from "@bigbinary/neeto-icons";

import SubHeader from "components/layouts/SubHeader";
import Button from "components/Button";
import Typography from "components/Typography";


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
          <Button label="Delete" style="secondary" icon={Delete} />
          <Button label="Disable" style="secondary" />
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
          <Button label="Delete" style="secondary" icon={Delete} />
          <Button label="Disable" style="secondary" />
        </>
      }
    />
  );
};
WithRightActionBlock.storyName = "With right action block";
