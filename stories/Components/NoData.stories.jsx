import React from "react";

import NoData from "../../lib/components/NoData";
import Button from "../../lib/components/Button";
import { ChatOffline } from "@bigbinary/neeto-icons";

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

export const WithDescription = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        title="There are no tickets to show"
        description="You can try adding a new ticket"
        primaryButtonProps={{
          label: "Add new ticket"
        }}
      />
    </div>
  );
};

WithDescription.storyName = "No Data with description";

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

export const WithCustomImageAsSVG = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        image={<ChatOffline size={200}/>}
        title="There are no conversations to show"
        primaryButtonProps={{
          label: "Start new conversation"
        }}
      />
    </div>
  );
};

WithCustomImageAsSVG.storyName = "No Data with custom image as SVG";

export const WithCustomImageFromURL = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        image="https://cdn-icons-png.flaticon.com/512/15/15457.png"
        title="There are no tickets to show"
        primaryButtonProps={{
          label: "Add new ticket"
        }}
      />
    </div>
  );
};

WithCustomImageFromURL.storyName = "No Data with custom image from URL";
