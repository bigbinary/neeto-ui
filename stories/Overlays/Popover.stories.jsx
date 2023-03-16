import React, { useRef } from "react";

import { Button, Typography, Popover } from "components";

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


export const ShowPopover = (args) => {
  const popoverReferenceElement = useRef();
  return (
    <div className="p-10 space-y-8">
      <Button style="secondary" label="Show Popover" ref={popoverReferenceElement} />
      <Popover
        reference={popoverReferenceElement}
        {...args}
      >
        <Popover.Title>What is KB keywords?</Popover.Title>
        <Typography style="body2" lineHeight="normal">Keywords represent the key concepts of an article. These will be shown on the KB and will be used for SEO</Typography>
        <Button size="small" style="link" label="View help article" className="neeto-ui-mt-3"/>
      </Popover>
    </div>
  );
};

ShowPopover.storyName = "Show Popover";
