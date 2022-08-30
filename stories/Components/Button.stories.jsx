/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import { Favorite } from "@bigbinary/neeto-icons";

import Button from "../../lib/components/Button";
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
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-4 items-start flex-wrap">
          <Button
            style="primary"
            label="X Large"
            size="xlarge"
          />
        </div>
        <div className="flex gap-4 items-start flex-wrap">
          <Button
            style="primary"
            label="Large"
            size="large"
          />
        </div>
        <div className="flex gap-4 items-start flex-wrap">
          <Button
            style="primary"
            label="Default"
          />
        </div>
      </div>
    </div>
  );
};

export const IconButtons = ({}) => {
  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-start flex-wrap">
            <Button
              style="primary"
              label="Label"
              iconPosition="left"
              icon={Favorite}
            />
          </div>
          <div className="flex gap-4 items-start flex-wrap">
            <Button
              style="primary"
              label="Label"
              iconPosition="right"
              icon={Favorite}
            />
          </div>
          <div className="flex gap-4 items-start flex-wrap">
            <Button
              style="primary"
              icon={Favorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  loading: true,
  label: "Loading"
};

export const FullWidth = ({}) => {
  return (
    <div className="w-full">
      <div className="flex gap-4 items-start flex-wrap w-80">
        <Button
          label="Primary"
          fullWidth
        />
        <Button
          style="secondary"
          label="Secondary"
          fullWidth
        />
        <Button
          style="text"
          label="Text"
          fullWidth
        />
      </div>
    </div>
  );
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: "Tooltip button",
  tooltipProps: {
    content: "Top",
    position: "top",
  },
};
export const Variants = ({}) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-4 items-center flex-wrap">
          <Button
            style="primary"
            label="Primary"
            size="large"
          />
          <Button
            style="secondary"
            label="Secondary"
            size="large"
          />
          <Button
            style="text"
            label="Text"
            size="large"
          />
          <Button
            style="link"
            label="Link"
            size="large"
          />
        </div>
        <div className="flex gap-4 items-start flex-wrap">
          <Button
            style="danger"
            label="Danger"
            size="large"
          />
          <Button
            style="danger-text"
            label="Danger Text"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};
