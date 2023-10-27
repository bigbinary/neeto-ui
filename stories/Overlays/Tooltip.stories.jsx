import React, { forwardRef, useState } from "react";

import { Button, Tooltip, Typography, Input } from "components";

import TooltipDocs from "!raw-loader!./TooltipDocs.mdx";

const metadata = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          '`import { Tooltip } from "@bigbinary/neetoui";` \n\n `Tooltip` is a small, informational pop-up that appears when users hover their cursor over an element.',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1064%3A3081",
    },
  },
};

const FollowCursor = args => (
  <div className="space-y-8 p-10">
    <Tooltip
      content="Content is string"
      followCursor="horizontal"
      position="top"
      {...args}
    >
      <Button label="Follow cursor" style="secondary" />
    </Tooltip>
  </div>
);
FollowCursor.storyName = "Follow cursor";

const JSXContentInside = args => (
  <div className="space-y-8 p-10">
    <Tooltip
      position="top"
      trigger="click"
      content={
        <span>
          Content is a <b>JSX</b> <u>Element</u>
        </span>
      }
      {...args}
    >
      <Button label="On click" style="secondary" />
    </Tooltip>
  </div>
);
JSXContentInside.storyName = "JSX content inside";

const Positions = args => (
  <div className="space-y-8 p-10">
    <div className="flex items-center justify-start gap-8">
      <Tooltip {...args} content="Tooltip" position="top">
        <Button label="top" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="top-start">
        <Button label="top-start" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="top-end">
        <Button label="top-end" style="secondary" />
      </Tooltip>
    </div>
    <div className="flex items-center justify-start gap-8">
      <Tooltip {...args} content="Tooltip" position="right">
        <Button label="right" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="right-start">
        <Button label="right-start" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="right-end">
        <Button label="right-end" style="secondary" />
      </Tooltip>
    </div>
    <div className="flex items-center justify-start gap-8">
      <Tooltip {...args} content="Tooltip" position="bottom">
        <Button label="bottom" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="bottom-start">
        <Button label="bottom-start" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="bottom-end">
        <Button label="bottom-end" style="secondary" />
      </Tooltip>
    </div>
    <div className="flex items-center justify-start gap-8">
      <Tooltip {...args} content="Tooltip" position="left">
        <Button label="left" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="left-start">
        <Button label="left-start" style="secondary" />
      </Tooltip>
      <Tooltip {...args} content="Tooltip" position="left-end">
        <Button label="left-end" style="secondary" />
      </Tooltip>
    </div>
  </div>
);

const Themes = args => (
  <div className="space-y-8 p-10">
    <h2 className="text-xl">Theme</h2>
    <div className="flex flex-row flex-wrap items-center justify-start gap-8">
      <Tooltip
        {...args}
        content="Tooltip"
        position="top"
        theme="dark"
        trigger="click"
      >
        <Button label="dark" style="secondary" />
      </Tooltip>
      <Tooltip
        {...args}
        content="Tooltip"
        position="top"
        theme="light"
        trigger="click"
      >
        <Button label="light" style="secondary" />
      </Tooltip>
    </div>
  </div>
);

const TooltipOnText = args => (
  <div className="flex items-center justify-center space-x-6 p-10 ">
    <Tooltip {...args} content="Tooltip" position="top">
      <Typography>Top</Typography>
    </Tooltip>
    <Tooltip {...args} content="Tooltip" position="bottom">
      <Typography>Bottom</Typography>
    </Tooltip>
    <Tooltip {...args} content="Tooltip" position="left">
      <Typography>Left</Typography>
    </Tooltip>
    <Tooltip {...args} content="Tooltip" position="right">
      <Typography>Right</Typography>
    </Tooltip>
  </div>
);
TooltipOnText.storyName = "Tooltip on text";

const TooltipOnCustomComponent = args => {
  const CustomComponent = forwardRef(({ text }, ref) => (
    <div
      className="neeto-ui-bg-black neeto-ui-text-white neeto-ui-rounded-md neeto-ui-shadow-lg cursor-pointer items-center justify-center p-10"
      ref={ref}
    >
      {text}
    </div>
  ));

  CustomComponent.displayName = "CustomComponent";

  return (
    <div className="flex items-center justify-center space-x-6 p-10 ">
      <Tooltip {...args} content="Tooltip" position="top">
        <CustomComponent text="Custom component" />
      </Tooltip>
    </div>
  );
};
TooltipOnCustomComponent.storyName = "Tooltip on custom component";

const AutoHidingTooltip = args => {
  const DEFAULT_EMAIL = "oliver@example.";
  const [email, setEmail] = useState(DEFAULT_EMAIL);

  const handleKeyPress = ({ key }) => {
    if (key === "Escape") setEmail(DEFAULT_EMAIL);
  };

  return (
    <div className="flex items-center justify-center space-x-6 p-10">
      <Tooltip
        {...args}
        content="Press esc to reset input after typing"
        hideAfter={3000}
        position="top"
      >
        <Input
          className="max-w-max"
          label="Enter email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          onKeyDown={handleKeyPress}
        />
      </Tooltip>
    </div>
  );
};
AutoHidingTooltip.storyName = "Auto hiding Tooltip";
TooltipOnCustomComponent.parameters = {
  docs: { description: { story: TooltipDocs } },
};

const HidingTooltipOnTargetExit = args => (
  <div className="neeto-ui-bg-gray-300 max-h-56 space-y-2 overflow-auto p-10">
    {Array.from({ length: 6 }).map((_, key) => (
      <div
        className="neeto-ui-rounded neeto-ui-bg-white neeto-ui-shadow-sm h-6 w-full"
        key={key}
      />
    ))}
    <Tooltip
      {...args}
      hideOnTargetExit
      content="Press esc to reset input after typing"
      position="top"
    >
      <Typography className="neeto-ui-bg-white mx-auto h-6 w-full text-center">
        Hover me and scroll
      </Typography>
    </Tooltip>
    {Array.from({ length: 6 }).map((_, key) => (
      <div
        className="neeto-ui-rounded neeto-ui-bg-white neeto-ui-shadow-sm h-6 w-full"
        key={key}
      />
    ))}
  </div>
);
HidingTooltipOnTargetExit.storyName = "Hiding Tooltip on target exit";

export {
  FollowCursor,
  JSXContentInside,
  Positions,
  Themes,
  TooltipOnText,
  TooltipOnCustomComponent,
  AutoHidingTooltip,
  HidingTooltipOnTargetExit,
};

export default metadata;
