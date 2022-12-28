import React from "react";

import NoData from "../../lib/components/NoData";
import Button from "../../lib/components/Button";

export default {
  title: "Components/NoData",
  component: NoData,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { NoData } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = () => (
  <div className="w-full flex items-center justify-center">
    <NoData
      title="There are no tickets to show"
      primaryButtonProps={{
        label: "Add new ticket"
      }}
    />
  </div>
);

export const Default = Template.bind({});

export const WithHelpText = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        title="There are no tickets to show"
        helpText={<>For more information, please visit our <Button style="link" label="Knowledge Base"/></>}
        primaryButtonProps={{
          label: "Add new ticket"
        }}
      />
    </div>
  );
};

WithHelpText.storyName = "No Data with help text";
