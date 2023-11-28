import React from "react";

import { Button, Typography, Popover } from "components";

import PopoverStoriesDocs from "!raw-loader!./PopoverStoriesDocs.mdx";

const metadata = {
  title: "Overlays/Popover",
  component: Popover,
  subcomponents: { "Popover.Title": Popover.Title, Button },
  parameters: {
    layout: "padded",
    docs: { description: { component: PopoverStoriesDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1064%3A3081",
    },
  },
};

const ShowPopover = args => (
  <div className="space-y-8 p-10">
    <Popover
      referenceElement={<Button label="Show Popover" style="secondary" />}
      {...args}
    >
      <Popover.Title>What is KB keywords?</Popover.Title>
      <Typography lineHeight="normal" style="body2">
        Keywords represent the key concepts of an article. These will be shown
        on the KB and will be used for SEO
      </Typography>
      <Button
        className="neeto-ui-mt-3"
        label="View help article"
        size="small"
        style="link"
      />
    </Popover>
  </div>
);

ShowPopover.storyName = "Show Popover";

export { ShowPopover };

export default metadata;
