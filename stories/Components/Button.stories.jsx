/* eslint-disable no-empty-pattern */
import React from "react";
import { Favorite } from "@bigbinary/neeto-icons";

import Button from "components/Button";
import { icons } from "../constants";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Button } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A18",
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    onClick: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" }
      }
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: "primary",
  label: "Button",
};

export const Sizes = ({}) => {
  return (
    <div className="w-full">
      <div className="flex w-full gap-3">
        <div className="flex flex-wrap items-start gap-4">
          <Button style="primary" label="Small" size="small" />
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Button style="primary" label="Medium" size="medium" />
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Button style="primary" label="Large" size="large" />
        </div>
      </div>
    </div>
  );
};

export const Styles = ({}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <Button style="primary" label="Primary" />
          <Button style="secondary" label="Secondary" />
          <Button style="text" label="Text" />
          <Button style="link" label="Link" />
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Button style="danger" label="Danger" />
          <Button style="danger-text" label="Danger Text" />
        </div>
      </div>
    </div>
  );
};

export const IconButtons = ({}) => {
  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="flex gap-3">
          <div className="flex flex-wrap items-start gap-4">
            <Button label="Label" iconPosition="left" icon={Favorite} />
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <Button label="Label" iconPosition="right" icon={Favorite} />
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <Button icon={Favorite} />
          </div>
        </div>
      </div>
    </div>
  );
};
IconButtons.storyName = "Icon buttons";

export const LoadingState = Template.bind({});
LoadingState.args = {
  loading: true,
  label: "Loading",
};
LoadingState.storyName = "Loading state";

export const FullWidth = ({}) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-start gap-4 w-80">
        <Button label="Primary" fullWidth />
        <Button style="secondary" label="Secondary" fullWidth />
        <Button style="text" label="Text" fullWidth />
      </div>
    </div>
  );
};
FullWidth.storyName = "Full width";

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: "Tooltip button",
  tooltipProps: {
    content: "Top",
    position: "top",
  },
};
