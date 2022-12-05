import React from "react";

import { Button, Typography, Popover } from "../../lib/components";

export default {
  title: "Overlays/Popover",
  component: Popover,
  subcomponents: { "Popover.Title": Popover.Title, Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Popover } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1064%3A3081",
    },
  },
};

const popoverContent =
  <>
    <Popover.Title>What is KB keywords?</Popover.Title>
    <Typography style="body2" lineHeight="normal">Keywords represent the key concepts of an article. These will be shown on the KB and will be used for SEO</Typography>
    <Button size="small" style="link" label="View help article" className="neeto-ui-mt-3"/>
  </>;


export const ShowPopover = (args) => {
  return (
    <div className="p-10 space-y-8">
      <Popover
        position="top"
        content={popoverContent}
        {...args}
      >
        <Button style="secondary" label="Show Popover" />
      </Popover>
    </div>
  );
};

ShowPopover.storyName = "Show Popover";

export const Themes = () => {
  return (
    <div className="p-10 space-y-8">
      <h2 className="text-xl">Themes</h2>
      <div className="flex flex-row flex-wrap items-center justify-start gap-8">
        <Popover
          position="top"
          content={popoverContent}
          theme="dark"
        >
          <Button style="secondary" label="dark" />
        </Popover>
        <Popover
          position="top"
          content={popoverContent}
          theme="light"
        >
          <Button style="secondary" label="light" />
        </Popover>
      </div>
    </div>
  );
};