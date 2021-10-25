import React, { forwardRef } from "react";

import Button from "../lib/components/Button";
import Tooltip from "../lib/components/Tooltip";
import Typography from "../lib/components/Typography";
import TooltipDocs from "!raw-loader!./TooltipDocs.mdx";

export default {
  title: "Overlays/Tooltip",
  component: Tooltip,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tooltip } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const FollowCursor = (args) => {
  return (
    <div className="space-y-8 p-10">
      <Tooltip
        placement={"top"}
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
    <div className="space-y-8 p-10">
      <Tooltip
        placement={"top"}
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

export const Placements = () => {
  return (
    <div className="space-y-8 p-10">
      <div className="flex items-center justify-start gap-8">
        <Tooltip placement={"top"} content={"Tooltip"}>
          <Button style="secondary" label="top" />
        </Tooltip>
        <Tooltip placement={"top-start"} content={"Tooltip"}>
          <Button style="secondary" label="top-start" />
        </Tooltip>
        <Tooltip placement={"top-end"} content={"Tooltip"}>
          <Button style="secondary" label="top-end" />
        </Tooltip>
      </div>
      <div className="flex items-center justify-start gap-8">
        <Tooltip placement={"right"} content={"Tooltip"}>
          <Button style="secondary" label="right" />
        </Tooltip>
        <Tooltip placement={"right-start"} content={"Tooltip"}>
          <Button style="secondary" label="right-start" />
        </Tooltip>
        <Tooltip placement={"right-end"} content={"Tooltip"}>
          <Button style="secondary" label="right-end" />
        </Tooltip>
      </div>
      <div className="flex items-center justify-start gap-8">
        <Tooltip placement={"bottom"} content={"Tooltip"}>
          <Button style="secondary" label="bottom" />
        </Tooltip>
        <Tooltip placement={"bottom-start"} content={"Tooltip"}>
          <Button style="secondary" label="bottom-start" />
        </Tooltip>
        <Tooltip placement={"bottom-end"} content={"Tooltip"}>
          <Button style="secondary" label="bottom-end" />
        </Tooltip>
      </div>
      <div className="flex items-center justify-start gap-8">
        <Tooltip placement={"left"} content={"Tooltip"}>
          <Button style="secondary" label="left" />
        </Tooltip>
        <Tooltip placement={"left-start"} content={"Tooltip"}>
          <Button style="secondary" label="left-start" />
        </Tooltip>
        <Tooltip placement={"left-end"} content={"Tooltip"}>
          <Button style="secondary" label="left-end" />
        </Tooltip>
      </div>
    </div>
  );
};

export const Themes = () => {
  return (
    <div className="space-y-8 p-10">
      <h2 className="text-xl">Theme</h2>
      <div className="flex flex-row flex-wrap items-center justify-start gap-8">
        <Tooltip placement={"top"} content={"Tooltip"} theme={"dark"}>
          <Button style="secondary" label="dark" />
        </Tooltip>
        <Tooltip placement={"top"} content={"Tooltip"} theme={"light"}>
          <Button style="secondary" label="light" />
        </Tooltip>
      </div>
    </div>
  );
};

export const TooltipOnText = () => {
  return (
    <div className=" p-10 flex items-center justify-center space-x-6">
      <Tooltip placement="top" content={"Tooltip"}>
        <Typography>Top</Typography>
      </Tooltip>
      <Tooltip placement="bottom" content={"Tooltip"}>
        <Typography>Bottom</Typography>
      </Tooltip>
      <Tooltip placement="left" content={"Tooltip"}>
        <Typography>Left</Typography>
      </Tooltip>
      <Tooltip placement="right" content={"Tooltip"}>
        <Typography>Right</Typography>
      </Tooltip>
    </div>
  );
};

const CustomComponent = forwardRef(({ text }, ref) => (
  <div ref={ref} className="neeto-ui-shadow-lg p-10 rounded-md justify-center items-center neeto-ui-bg-black neeto-ui-text-white cursor-pointer">
    {text}
  </div>
));

export const TooltipOnCustomComponent = () => {
  const CustomComponent = forwardRef(({ text }, ref) => (
    <div ref={ref} className="shadow-lg p-10 rounded-md justify-center items-center neeto-ui-bg-black neeto-ui-text-white cursor-pointer">
      {text}
    </div>
  ));
  return (
    <div className=" p-10 flex items-center justify-center space-x-6">
      <Tooltip placement="top" content={"Tooltip"}>
        <CustomComponent text="Custom Component" />
      </Tooltip>
    </div>
  );
};

TooltipOnCustomComponent.parameters = {
  docs: {description: { story: TooltipDocs }}
}