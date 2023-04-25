import React from "react";

import { Delete } from "neetoicons";

import Button from "components/Button";
import SubHeader from "components/layouts/SubHeader";
import Typography from "components/Typography";

const metadata = {
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

const Default = args => (
  <SubHeader
    {...args}
    leftActionBlock={
      <Typography component="h4" style="h4">
        118 Contacts
      </Typography>
    }
    rightActionBlock={
      <>
        <Button icon={Delete} label="Delete" style="secondary" />
        <Button label="Disable" style="secondary" />
      </>
    }
  />
);

const WithLeftActionBlock = args => (
  <SubHeader
    {...args}
    leftActionBlock={
      <Typography component="h4" style="h4">
        118 Contacts
      </Typography>
    }
  />
);
WithLeftActionBlock.storyName = "With left action block";

const WithRightActionBlock = args => (
  <SubHeader
    {...args}
    rightActionBlock={
      <>
        <Button icon={Delete} label="Delete" style="secondary" />
        <Button label="Disable" style="secondary" />
      </>
    }
  />
);
WithRightActionBlock.storyName = "With right action block";

export { Default, WithLeftActionBlock, WithRightActionBlock };

export default metadata;
