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

export const BasicUsage = () => {
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
