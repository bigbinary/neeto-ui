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
      title="No wireframes found"
      description="We couldn’t find any wireframes. You can add new ones"
      primaryButtonProps={{
        label: "Add Wireframe"
      }}
    />
  </div>
);

export const Default = Template.bind({});

export const WithHelpText = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        title="No wireframes found"
        description="We couldn’t find any wireframes. You can add new ones"
        helpText={<>For more information, please visit our <Button style="link" label="Knowledge Base"/></>}
        primaryButtonProps={{
          label: "Add Wireframe"
        }}
      />
    </div>
  );
};
WithHelpText.storyName = "No Data with help text";
