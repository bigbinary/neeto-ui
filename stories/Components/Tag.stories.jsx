import React from "react";
import { Favorite } from "@bigbinary/neeto-icons";

import Tag from "../../lib/components/Tag";
import { icons } from "../constants";

const DEPRECATED_PROPS = {
  color: {
    table: { type: { summary: null } },
    control: false,
  },

  indicatorColor: {
    table: { type: { summary: null } },
    control: false,
  },
};

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tag } from "@bigbinary/neetoui";`',
      },
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    ...DEPRECATED_PROPS,
  },
};

const Template = ({ onClose, ...args }) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};

// eslint-disable-next-line no-empty-pattern
export const Sizes = ({}) => {
  return (
    <div className="p-6">
      <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
        <div className="flex flex-col p-2 space-y-6">
          <div className="flex flex-row items-center justify-start space-x-4">
            <Tag label="Large" size="large" />
            <Tag label="Small" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Types = () => {
  const TYPE_TAGS = ["outline", "solid"];
  const STATUS_TAGS = [
    { style: "success", label: "Success" },
    { style: "warning", label: "Warning" },
    { style: "danger", label: "Danger" },
    { style: "primary", label: "Primary" },
    { style: "inactive", label: "Inactive" },
  ];

  return (
    <div className="space-y-4">
      {TYPE_TAGS.map((type) => (
        <>
          <h5 className="capitalize">{type}</h5>
          <div key={type} className="space-x-2">
            {STATUS_TAGS.map((tag) => (
              <Tag
                size="large"
                type={type}
                key={tag.label}
                style={tag.style}
                label={tag.label}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

// eslint-disable-next-line no-empty-pattern
export const Styles = ({}) => {
  return (
    <div className="p-6">
      <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
        <div className="flex flex-col p-2 space-y-6">
          <div className="flex flex-row items-start justify-start space-x-4">
            <Tag label="Gray" style="inactive" />
            <Tag label="Red" style="danger" />
            <Tag label="Green" style="success" />
            <Tag label="Blue" style="primary" />
            <Tag label="Yellow" style="warning" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Variants = () => {
  const STATUS_TAGS = [
    { style: "success", label: "Success" },
    { style: "warning", label: "Warning" },
    { style: "danger", label: "Danger" },
    { style: "primary", label: "Primary" },
    { style: "inactive", label: "Inactive" },
  ];

  const INDICATOR_COLORS = [
    { style: "success", label: "Success" },
    { style: "warning", label: "Warning" },
    { style: "danger", label: "Danger" },
    { style: "primary", label: "Primary" },
    { style: "inactive", label: "Inactive" },
  ];

  const onClose = () => alert("onClose Triggered!");

  return (
    <div className="p-6">
      <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
        <div className="flex flex-col p-2 space-y-6">
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Outline Small: </h5>
            <Tag label="Label" />
            <Tag icon={Favorite} label="Label" />
            <Tag onClose={onClose} label="Label" />
            <Tag icon={Favorite} onClose={onClose} label="Label" />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Outline Large: </h5>
            <Tag size="large" label="Label" />
            <Tag size="large" icon={Favorite} label="Label" />
            <Tag size="large" onClose={onClose} label="Label" />
            <Tag size="large" icon={Favorite} onClose={onClose} label="Label" />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Colored Outline Large : </h5>
            <Tag
              type="outline"
              size="large"
              style="gray"
              icon={Favorite}
              onClose={onClose}
              label="Label"
            />
            <Tag type="outline" size="large" style="red" label="Label" />
            <Tag
              type="outline"
              size="large"
              style="green"
              icon={Favorite}
              label="Label"
            />
            <Tag
              type="outline"
              size="large"
              style="blue"
              onClose={onClose}
              label="Label"
            />
            <Tag
              type="outline"
              size="large"
              style="yellow"
              icon={Favorite}
              onClose={onClose}
              label="Label"
            />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Solid Small: </h5>
            {STATUS_TAGS.map((tag) => (
              <Tag
                type="solid"
                size="small"
                key={tag.label}
                style={tag.style}
                label={tag.label}
              />
            ))}
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Solid Large : </h5>
            {STATUS_TAGS.map((tag) => (
              <Tag
                type="solid"
                size="large"
                key={tag.label}
                style={tag.style}
                label={tag.label}
              />
            ))}
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Solid With Colors : </h5>
            {STATUS_TAGS.map((tag) => (
              <Tag
                type="solid"
                size="large"
                key={tag.label}
                style={tag.style}
                label={tag.label}
              />
            ))}
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Outline With Colors : </h5>
            {STATUS_TAGS.map((tag) => (
              <Tag
                type="outline"
                size="large"
                key={tag.label}
                style={tag.style}
                label={tag.label}
              />
            ))}
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>With Indicator : </h5>
            {INDICATOR_COLORS.map((tag) => (
              <Tag
                type="outline"
                size="large"
                key={tag.label}
                label={tag.label}
                indicatorStatus={tag.style}
              />
            ))}
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>With Indicator Large : </h5>
            {INDICATOR_COLORS.map((tag) => (
              <Tag
                type="outline"
                size="large"
                key={tag.label}
                label={tag.label}
                indicatorStatus={tag.style}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
