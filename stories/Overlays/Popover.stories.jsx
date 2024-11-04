import React, { useRef } from "react";

import { Button, Typography, Popover } from "components";

const description = `
\`import { Popover } from "@bigbinary/neetoui";\`

\`Popover\` appears as a floating card when triggered by clicking or hovering over
a specific element, providing supplementary information or options related to
the element that was interacted with.
`;

const metadata = {
  title: "Overlays/Popover",
  component: Popover,
  subcomponents: { "Popover.Title": Popover.Title, Button },
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
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

const PopoverCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Popover\`
component.

\`\`\`css
--neeto-ui-popover-border-width: 1px;
--neeto-ui-popover-border-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-popover-padding-x: 1rem;
--neeto-ui-popover-padding-y: 1rem;

// Light theme
--neeto-ui-popover-light-theme-border-color: rgb(var(--neeto-ui-gray-400));
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-popover {
  --neeto-ui-popover-padding-x: 1.5rem;
  --neeto-ui-popover-padding-y: 1.5rem;
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: PopoverCSSCustomization } },
};

export { ShowPopover, CSSCustomization };

export default metadata;
