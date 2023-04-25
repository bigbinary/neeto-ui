/* eslint-disable no-empty-pattern */
import React from "react";

import { Favorite } from "neetoicons";

import Button from "components/Button";

import { icons } from "../constants";

const Template = args => <Button {...args} />;

const Default = Template.bind({});
Default.args = {
  style: "primary",
  label: "Button",
};

const Sizes = ({}) => (
  <div className="w-full">
    <div className="flex w-full gap-3">
      <div className="flex flex-wrap items-start gap-4">
        <Button label="Small" size="small" style="primary" />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Button label="Medium" size="medium" style="primary" />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Button label="Large" size="large" style="primary" />
      </div>
    </div>
  </div>
);

const Styles = ({}) => (
  <div className="w-full">
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4">
        <Button label="Primary" style="primary" />
        <Button label="Secondary" style="secondary" />
        <Button label="Text" style="text" />
        <Button label="Link" style="link" />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Button label="Danger" style="danger" />
        <Button label="Danger Text" style="danger-text" />
      </div>
    </div>
  </div>
);

const IconButtons = ({}) => (
  <div className="w-full">
    <div className="space-y-6">
      <div className="flex gap-3">
        <div className="flex flex-wrap items-start gap-4">
          <Button icon={Favorite} iconPosition="left" label="Label" />
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Button icon={Favorite} iconPosition="right" label="Label" />
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Button icon={Favorite} />
        </div>
      </div>
    </div>
  </div>
);
IconButtons.storyName = "Icon buttons";

const LoadingState = Template.bind({});
LoadingState.args = {
  loading: true,
  label: "Loading",
};
LoadingState.storyName = "Loading state";

const FullWidth = ({}) => (
  <div className="w-full">
    <div className="flex w-80 flex-wrap items-start gap-4">
      <Button fullWidth label="Primary" />
      <Button fullWidth label="Secondary" style="secondary" />
      <Button fullWidth label="Text" style="text" />
    </div>
  </div>
);
FullWidth.storyName = "Full width";

const Tooltip = Template.bind({});
Tooltip.args = {
  label: "Tooltip button",
  tooltipProps: {
    content: "Top",
    position: "top",
  },
};

export { Default, Sizes, Styles, IconButtons, LoadingState, Tooltip };

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
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A18",
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
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};
