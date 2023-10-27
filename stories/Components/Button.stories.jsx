import React from "react";

import { Favorite } from "neetoicons";

import Button from "components/Button";

import { icons } from "../constants";

import ButtonStoriesDocs from "!raw-loader!./ButtonStoriesDocs.mdx";

const metadata = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
    docs: { description: { component: ButtonStoriesDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A18",
    },
  },
  argTypes: {
    icon: { options: Object.keys(icons), mapping: icons },
    onClick: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const Template = args => <Button {...args} />;

const Default = Template.bind({});
Default.args = { style: "primary", label: "Button" };

const Sizes = args => (
  <div className="w-full">
    <div className="flex w-full gap-3">
      <div className="flex flex-wrap items-start gap-4">
        <Button {...args} label="Small" size="small" style="primary" />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Button {...args} label="Medium" size="medium" style="primary" />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Button {...args} label="Large" size="large" style="primary" />
      </div>
    </div>
  </div>
);

const Styles = args => (
  <div className="w-full">
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4">
        <Button {...args} label="Primary" style="primary" />
        <Button {...args} label="Secondary" style="secondary" />
        <Button {...args} label="Text" style="text" />
        <Button {...args} label="Link" style="link" />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Button {...args} label="Danger" style="danger" />
        <Button {...args} label="Danger Text" style="danger-text" />
      </div>
    </div>
  </div>
);

const IconButtons = args => (
  <div className="w-full">
    <div className="space-y-6">
      <div className="flex gap-3">
        <div className="flex flex-wrap items-start gap-4">
          <Button {...args} icon={Favorite} iconPosition="left" label="Label" />
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Button
            {...args}
            icon={Favorite}
            iconPosition="right"
            label="Label"
          />
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <Button {...args} size="small" icon={Favorite} />
          <Button {...args} size="medium" icon={Favorite} />
          <Button {...args} size="large" icon={Favorite} />
        </div>
      </div>
    </div>
  </div>
);
IconButtons.storyName = "Icon buttons";

const LoadingState = Template.bind({});
LoadingState.args = { loading: true, label: "Loading" };
LoadingState.storyName = "Loading state";

const FullWidth = args => (
  <div className="w-full">
    <div className="flex w-80 flex-wrap items-start gap-4">
      <Button {...args} fullWidth label="Primary" />
      <Button {...args} fullWidth label="Secondary" style="secondary" />
      <Button {...args} fullWidth label="Text" style="text" />
    </div>
  </div>
);
FullWidth.storyName = "Full width";

const Tooltip = Template.bind({});
Tooltip.args = {
  label: "Tooltip button",
  tooltipProps: { content: "Top", position: "top" },
};

export {
  Default,
  Sizes,
  Styles,
  IconButtons,
  LoadingState,
  FullWidth,
  Tooltip,
};

export default metadata;
