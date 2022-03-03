import React, { useState } from "react";
import { Favorite } from "@bigbinary/neeto-icons";

import Button from "../../lib/components/Button";
import Typography from "../../lib/components/Typography";

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
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: "secondary",
  label: "Button",
};

export const Danger = Template.bind({});
Danger.args = {
  style: "danger",
  label: "Button",
};

export const Text = Template.bind({});
Text.args = {
  style: "text",
  label: "Button",
};

export const Link = Template.bind({});
Link.args = {
  style: "link",
  label: "Button",
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: "Tooltip button",
  tooltipProps: {
    content: "Top",
    position: "top",
  },
};

export const AllVariants = () => {
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setLoading(!loading);
  };
  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <Button onClick={toggle} label="Toggle Loading State" className="self-end" />
          <div className="w-full flex flex-col gap-3 border-indigo-500 border-dashed border p-4">
            <h2 className="text-xl">Styles</h2>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} icon={Favorite} loading={loading} label="Primary" size="large" />
              <Button style="secondary" onClick={toggle} icon={Favorite} loading={loading} label="Secondary" size="large" />
              <Button style="text" onClick={toggle} icon={Favorite} loading={loading} label="Text" size="large" />
              <Button style="link" onClick={toggle} icon={Favorite} loading={loading} label="Link" size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="danger" onClick={toggle} icon={Favorite} loading={loading} label="Danger" size="large" />
              <Button style="danger-secondary" onClick={toggle} icon={Favorite} loading={loading} label="Danger Secondary" size="large" />
              <Button style="danger-text" onClick={toggle} icon={Favorite} loading={loading} label="Danger Text" size="large" />
            </div>
          </div>
          <Button onClick={toggle} label="Toggle Loading State" className="self-end" />
          <div className="w-full flex flex-col gap-3 border-indigo-500 border-dashed border p-4">
            <h2 className="text-xl">Sizes</h2>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="xlarge" />
              <Button style="secondary" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="xlarge" />
              <Button style="text" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="xlarge" />
              <Button style="danger" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="xlarge" />
              <Button style="danger-secondary" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="xlarge" />
              <Button style="danger-text" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="xlarge" />
              <Button style="link" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="xlarge" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="large" />
              <Button style="secondary" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="large" />
              <Button style="text" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="large" />
              <Button style="danger" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="large" />
              <Button style="danger-secondary" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="large" />
              <Button style="danger-text" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="large" />
              <Button style="link" onClick={toggle} icon={Favorite} loading={loading} label="Label" size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} icon={Favorite} loading={loading} label="Label" />
              <Button style="secondary" onClick={toggle} icon={Favorite} loading={loading} label="Label" />
              <Button style="text" onClick={toggle} icon={Favorite} loading={loading} label="Label" />
              <Button style="danger" onClick={toggle} icon={Favorite} loading={loading} label="Label"  />
              <Button style="danger-secondary" onClick={toggle} icon={Favorite} loading={loading} label="Label"  />
              <Button style="danger-text" onClick={toggle} icon={Favorite} loading={loading} label="Label"  />
              <Button style="link" onClick={toggle} icon={Favorite} loading={loading} label="Label" />
            </div>
          </div>
          <Button onClick={toggle} label="Toggle Loading State" className="self-end" />
          <div className="w-full flex flex-col gap-3 border-indigo-500 border-dashed border p-4">
            <h2 className="text-xl">Icon Only</h2>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} icon={Favorite} loading={loading} size="xlarge" />
              <Button style="secondary" onClick={toggle} icon={Favorite} loading={loading} size="xlarge" />
              <Button style="text" onClick={toggle} icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger" onClick={toggle} icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger-secondary" onClick={toggle} icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger-text" onClick={toggle} icon={Favorite} loading={loading} size="xlarge" />
              <Button style="link" onClick={toggle} icon={Favorite} loading={loading} size="xlarge" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} icon={Favorite} loading={loading} size="large" />
              <Button style="secondary" onClick={toggle} icon={Favorite} loading={loading} size="large" />
              <Button style="text" onClick={toggle} icon={Favorite} loading={loading} size="large" />
              <Button style="danger" onClick={toggle} icon={Favorite} loading={loading} size="large" />
              <Button style="danger-secondary" onClick={toggle} icon={Favorite} loading={loading} size="large" />
              <Button style="danger-text" onClick={toggle} icon={Favorite} loading={loading} size="large" />
              <Button style="link" onClick={toggle} icon={Favorite} loading={loading} size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} icon={Favorite} loading={loading} />
              <Button style="secondary" onClick={toggle} icon={Favorite} loading={loading} />
              <Button style="text" onClick={toggle} icon={Favorite} loading={loading} />
              <Button style="danger" onClick={toggle} icon={Favorite} loading={loading} />
              <Button style="danger-secondary" onClick={toggle} icon={Favorite} loading={loading} />
              <Button style="danger-text" onClick={toggle} icon={Favorite} loading={loading} />
              <Button style="link" onClick={toggle} icon={Favorite} loading={loading} />
            </div>
          </div>
          <Button onClick={toggle} label="Toggle Loading State" className="self-end" />
          <div className="w-full flex flex-col gap-3 border-indigo-500 border-dashed border p-4">
            <h2 className="text-xl">Label Only</h2>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" loading={loading} size="xlarge" />
              <Button style="secondary" onClick={toggle} label="Label" loading={loading} size="xlarge" />
              <Button style="text" onClick={toggle} label="Label" loading={loading} size="xlarge" />
              <Button style="danger" onClick={toggle} label="Label" loading={loading} size="xlarge" />
              <Button style="danger-secondary" onClick={toggle} label="Label" loading={loading} size="xlarge" />
              <Button style="danger-text" onClick={toggle} label="Label" loading={loading} size="xlarge" />
              <Button style="link" onClick={toggle} label="Label" loading={loading} size="xlarge" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" loading={loading} size="large" />
              <Button style="secondary" onClick={toggle} label="Label" loading={loading} size="large" />
              <Button style="text" onClick={toggle} label="Label" loading={loading} size="large" />
              <Button style="danger" onClick={toggle} label="Label" loading={loading} size="large" />
              <Button style="danger-secondary" onClick={toggle} label="Label" loading={loading} size="large" />
              <Button style="danger-text" onClick={toggle} label="Label" loading={loading} size="large" />
              <Button style="link" onClick={toggle} label="Label" loading={loading} size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" loading={loading} />
              <Button style="secondary" onClick={toggle} label="Label" loading={loading} />
              <Button style="text" onClick={toggle} label="Label" loading={loading} />
              <Button style="danger" onClick={toggle} label="Label" loading={loading} />
              <Button style="danger-secondary" onClick={toggle} label="Label" loading={loading} />
              <Button style="danger-text" onClick={toggle} label="Label" loading={loading} />
              <Button style="link" onClick={toggle} label="Label" loading={loading} />
            </div>
          </div>
          <Button onClick={toggle} label="Toggle Loading State" className="self-end" />
          <div className="w-full flex flex-col gap-3 border-indigo-500 border-dashed border p-4">
            <h2 className="text-xl">With left Icon</h2>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="secondary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="text" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger-secondary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger-text" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="link" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="xlarge" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="secondary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="text" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="danger" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-secondary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-text" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="link" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} />
              <Button style="secondary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} />
              <Button style="text" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} />
              <Button style="danger" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} />
              <Button style="danger-secondary" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} />
              <Button style="danger-text" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} />
              <Button style="link" onClick={toggle} label="Label" iconPosition="left" icon={Favorite} loading={loading} />
            </div>
          </div>
          <Button onClick={toggle} label="Toggle Loading State" className="self-end" />
          <div className="w-full flex flex-col gap-3 border-indigo-500 border-dashed border p-4">
            <h2 className="text-xl">With right Icon</h2>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="secondary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="text" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger-secondary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="danger-text" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="xlarge" />
              <Button style="link" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="xlarge" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="secondary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="text" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="danger" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-secondary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-text" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="link" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap">
              <Button style="primary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} />
              <Button style="secondary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} />
              <Button style="text" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} />
              <Button style="danger" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} />
              <Button style="danger-secondary" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} />
              <Button style="danger-text" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} />
              <Button style="link" onClick={toggle} label="Label" iconPosition="right" icon={Favorite} loading={loading} />
            </div>
          </div>
          <Button onClick={toggle} label="Toggle Loading State" className="self-end" />
          <div className="w-full flex flex-col gap-3 border-indigo-500 border-dashed border p-4">
            <h2 className="text-xl">Full width</h2>
            <div className="flex gap-4 items-start flex-wrap w-80">
              <Button style="primary" onClick={toggle} label="Label" fullWidth iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="secondary" onClick={toggle} label="Label" fullWidth iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="text" onClick={toggle} label="Label" fullWidth iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="danger" onClick={toggle} label="Label" fullWidth iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-secondary" onClick={toggle} label="Label" fullWidth iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-text" onClick={toggle} label="Label" fullWidth iconPosition="right" icon={Favorite} loading={loading} size="large" />
              <Button style="link" onClick={toggle} label="Label" fullWidth iconPosition="right" icon={Favorite} loading={loading} size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap w-80">
              <Button style="primary" onClick={toggle} label="Label" fullWidth iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="secondary" onClick={toggle} label="Label" fullWidth iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="text" onClick={toggle} label="Label" fullWidth iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="danger" onClick={toggle} label="Label" fullWidth iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-secondary" onClick={toggle} label="Label" fullWidth iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="danger-text" onClick={toggle} label="Label" fullWidth iconPosition="left" icon={Favorite} loading={loading} size="large" />
              <Button style="link" onClick={toggle} label="Label" fullWidth iconPosition="left" icon={Favorite} loading={loading} size="large" />
            </div>
            <div className="flex gap-4 items-start flex-wrap w-80">
              <Button style="primary" onClick={toggle} label="Label" fullWidth loading={loading} size="large" />
              <Button style="secondary" onClick={toggle} label="Label" fullWidth loading={loading} size="large" />
              <Button style="text" onClick={toggle} label="Label" fullWidth loading={loading} size="large" />
              <Button style="danger" onClick={toggle} label="Label" fullWidth loading={loading} size="large" />
              <Button style="danger-secondary" onClick={toggle} label="Label" fullWidth loading={loading} size="large" />
              <Button style="danger-text" onClick={toggle} label="Label" fullWidth loading={loading} size="large" />
              <Button style="link" onClick={toggle} label="Label" fullWidth loading={loading} size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
