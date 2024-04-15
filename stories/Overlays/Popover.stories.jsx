import React, { useRef } from "react";

import { Button, Typography, Popover } from "components";

import PopoverCSSCustomization from "!raw-loader!./PopoverStoriesDocs/PopoverCSSCustomization.mdx";
import PopoverDocs from "!raw-loader!./PopoverStoriesDocs/PopoverDocs.mdx";

const metadata = {
  title: "Overlays/Popover",
  component: Popover,
  subcomponents: { "Popover.Title": Popover.Title, Button },
  parameters: {
    layout: "padded",
    docs: { description: { component: PopoverDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1064%3A3081",
    },
  },
};

const ShowPopover = args => {
  const popoverReferenceElement = useRef();

  return (
    <div className="space-y-8 p-10">
      <Button
        className="m-80"
        label="Show Popover"
        ref={popoverReferenceElement}
        style="secondary"
      />
      <Popover
        reference={popoverReferenceElement}
        {...args}
        arrowType="sharp"
        trigger="click"
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
};

ShowPopover.storyName = "Show Popover";

const CSSCustomization = args => {
  const popoverReferenceElement = useRef();

  return (
    <div className="neetix-popover">
      <Button
        label="Show Popover"
        ref={popoverReferenceElement}
        style="secondary"
      />
      <Popover reference={popoverReferenceElement} {...args}>
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
};

CSSCustomization.storyName = "Popover CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: PopoverCSSCustomization } },
};

export { ShowPopover, CSSCustomization };

export default metadata;
