import React, { forwardRef, useState  } from "react";

import { Button, Tooltip, Typography, Input } from "../../lib/components";
import TooltipDocs from "!raw-loader!./TooltipDocs.mdx";

export default {
  title: "Overlays/Tooltip",
  component: Tooltip,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tooltip } from "@bigbinary/neetoui";`',
      },
    },
  },
};

export const FollowCursor = (args) => {
  return (
    <div className="p-10 space-y-8">
      <Tooltip
        position="top"
        followCursor={"horizontal"}
        content={"Content is string"}
      >
        <Button style="secondary" label="Follow Cursor" />
      </Tooltip>
    </div>
  );
};

export const JSXContentInside = (args) => {
  return (
    <div className="p-10 space-y-8">
      <Tooltip
        position="top"
        trigger={"click"}
        content={
          <span>
            Content is a <b>JSX</b> <u>Element</u>
          </span>
        }
      >
        <Button style="secondary" label="On Click" />
      </Tooltip>
    </div>
  );
};

export const positions = () => {
  return (
    <div className="p-10 space-y-8">
      <div className="flex items-center justify-start gap-8">
        <Tooltip position="top" content="Tooltip">
          <Button style="secondary" label="top" />
        </Tooltip>
        <Tooltip position="top-start" content="Tooltip">
          <Button style="secondary" label="top-start" />
        </Tooltip>
        <Tooltip position="top-end" content="Tooltip">
          <Button style="secondary" label="top-end" />
        </Tooltip>
      </div>
      <div className="flex items-center justify-start gap-8">
        <Tooltip position="right" content="Tooltip">
          <Button style="secondary" label="right" />
        </Tooltip>
        <Tooltip position="right-start" content="Tooltip">
          <Button style="secondary" label="right-start" />
        </Tooltip>
        <Tooltip position="right-end" content="Tooltip">
          <Button style="secondary" label="right-end" />
        </Tooltip>
      </div>
      <div className="flex items-center justify-start gap-8">
        <Tooltip position="bottom" content="Tooltip">
          <Button style="secondary" label="bottom" />
        </Tooltip>
        <Tooltip position="bottom-start" content="Tooltip">
          <Button style="secondary" label="bottom-start" />
        </Tooltip>
        <Tooltip position="bottom-end" content="Tooltip">
          <Button style="secondary" label="bottom-end" />
        </Tooltip>
      </div>
      <div className="flex items-center justify-start gap-8">
        <Tooltip position="left" content="Tooltip">
          <Button style="secondary" label="left" />
        </Tooltip>
        <Tooltip position="left-start" content="Tooltip">
          <Button style="secondary" label="left-start" />
        </Tooltip>
        <Tooltip position="left-end" content="Tooltip">
          <Button style="secondary" label="left-end" />
        </Tooltip>
      </div>
    </div>
  );
};

export const Themes = () => {
  return (
    <div className="p-10 space-y-8">
      <h2 className="text-xl">Theme</h2>
      <div className="flex flex-row flex-wrap items-center justify-start gap-8">
        <Tooltip position="top" content="Tooltip" theme="dark">
          <Button style="secondary" label="dark" />
        </Tooltip>
        <Tooltip position="top" content="Tooltip" theme="light">
          <Button style="secondary" label="light" />
        </Tooltip>
      </div>
    </div>
  );
};

export const TooltipOnText = () => {
  return (
    <div className="flex items-center justify-center p-10 space-x-6 ">
      <Tooltip position="top" content="Tooltip">
        <Typography>Top</Typography>
      </Tooltip>
      <Tooltip position="bottom" content="Tooltip">
        <Typography>Bottom</Typography>
      </Tooltip>
      <Tooltip position="left" content="Tooltip">
        <Typography>Left</Typography>
      </Tooltip>
      <Tooltip position="right" content="Tooltip">
        <Typography>Right</Typography>
      </Tooltip>
    </div>
  );
};

export const TooltipOnCustomComponent = () => {
  const CustomComponent = forwardRef(({ text }, ref) => (
    <div
      ref={ref}
      className="items-center justify-center p-10 rounded-md shadow-lg cursor-pointer neeto-ui-bg-black neeto-ui-text-white"
    >
      {text}
    </div>
  ));
  return (
    <div className="flex items-center justify-center p-10 space-x-6 ">
      <Tooltip position="top" content="Tooltip">
        <CustomComponent text="Custom Component" />
      </Tooltip>
    </div>
  );
};

export const AutoHidingTooltip = () => {
  const DEFAULT_EMAIL = "oliver@example.";
  const [email, setEmail] = useState(DEFAULT_EMAIL);

  const handleKeyPress = ({ key }) => {
    if (key === "Escape") setEmail(DEFAULT_EMAIL);
  }

  return (
    <div className="flex items-center justify-center p-10 space-x-6">
      <Tooltip position="top" content="Press esc to reset input after typing" hideAfter={3000}>
        <Input
          label="Enter email"
          className="max-w-max"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          onKeyDown={handleKeyPress}
        />
      </Tooltip>
    </div>
  );
};

TooltipOnCustomComponent.parameters = {
  docs: { description: { story: TooltipDocs } },
};
