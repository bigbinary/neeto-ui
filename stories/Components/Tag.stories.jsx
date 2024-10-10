import React, { useState } from "react";

import { Favorite } from "neetoicons";

import ColorPicker from "components/ColorPicker";
import Tag from "components/Tag";

import { icons } from "../constants";

import TagCSSCustomization from "!raw-loader!./TagStoriesDocs/TagCSSCustomization.mdx";
import TagDocs from "!raw-loader!./TagStoriesDocs/TagDocs.mdx";

const DEPRECATED_PROPS = {
  color: { table: { type: { summary: null } }, control: false },

  indicatorColor: {
    table: { type: { summary: null } },
    control: false,
  },
};

const metadata = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
    docs: { description: { component: TagDocs } },
  },
  argTypes: {
    icon: { options: Object.keys(icons), mapping: icons },
    ...DEPRECATED_PROPS,
  },
};

const Template = args => <Tag {...args} />;

const Default = Template.bind({});
Default.args = { label: "Label" };

const Sizes = args => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag {...args} label="Large" size="large" />
    <Tag {...args} label="Small" size="small" />
  </div>
);

const Styles = args => (
  <div className="flex flex-row items-start justify-start space-x-4">
    <Tag {...args} label="Primary" style="primary" />
    <Tag {...args} label="Secondary" style="secondary" />
    <Tag {...args} label="Info" style="info" />
    <Tag {...args} label="Success" style="success" />
    <Tag {...args} label="Warning" style="warning" />
    <Tag {...args} label="Danger" style="danger" />
  </div>
);

const Types = args => (
  <div className="space-y-4">
    <div>
      <h5 className="mb-4 capitalize">Outline</h5>
      <div className="space-x-3">
        <Tag {...args} label="Primary" style="primary" type="outline" />
        <Tag {...args} label="Secondary" style="secondary" type="outline" />
        <Tag {...args} label="Info" style="info" type="outline" />
        <Tag {...args} label="Success" style="success" type="outline" />
        <Tag {...args} label="Warning" style="warning" type="outline" />
        <Tag {...args} label="Danger" style="danger" type="outline" />
      </div>
    </div>
    <div>
      <h5 className="mb-4 capitalize">Solid</h5>
      <div className="space-x-3">
        <Tag {...args} label="Primary" style="primary" type="solid" />
        <Tag {...args} label="Secondary" style="secondary" type="solid" />
        <Tag {...args} label="Info" style="info" type="solid" />
        <Tag {...args} label="Success" style="success" type="solid" />
        <Tag {...args} label="Warning" style="warning" type="solid" />
        <Tag {...args} label="Danger" style="danger" type="solid" />
      </div>
    </div>
  </div>
);

const Colors = args => (
  <div className="space-y-4">
    <div>
      <h5 className="mb-4 capitalize">Outline</h5>
      <div className="space-x-3">
        <Tag {...args} color="green" label="green" type="outline" />
        <Tag {...args} color="#08397B" label="#08397B" type="outline" />
        <Tag {...args} color="#5319E7" label="#5319E7" type="outline" />
        <Tag {...args} color="#0E8A16" label="#0E8A16" type="outline" />
        <Tag {...args} color="#FBCA04" label="#FBCA04" type="outline" />
        <Tag {...args} color="red" label="red" type="outline" />
      </div>
    </div>
    <div>
      <h5 className="mb-4 capitalize">Solid</h5>
      <div className="space-x-3">
        <Tag {...args} color="green" label="green" type="solid" />
        <Tag {...args} color="#08397B" label="#08397B" type="solid" />
        <Tag {...args} color="#5319E7" label="#5319E7" type="solid" />
        <Tag {...args} color="#0E8A16" label="#0E8A16" type="solid" />
        <Tag {...args} color="#FBCA04" label="#FBCA04" type="solid" />
        <Tag {...args} color="red" label="red" type="solid" />
      </div>
    </div>
  </div>
);

const TemporaryComponent = args => {
  const COLORS = [
    "#b60205",
    "#d93f0b",
    "#fbca04",
    "#0e8a16",
    "#006b75",
    "#1d76db",
    "#0052cc",
    "#5319e7",
    "#e99695",
    "#f9d0c4",
    "#fef2c0",
    "#c2e0c6",
    "#bfdadc",
    "#c5def5",
    "#bfd4f2",
    "#d4c5f9",
  ];

  const [color, setColor] = useState(COLORS[0].replace("#", ""));

  return (
    <div className="space-y-4">
      <style>
        {COLORS.map(color => {
          const c = color.replace("#", "");

          return `.from-${c}, .to-${c} { background-color: ${color}; }`;
        })}
      </style>
      <h5 className="mb-4">
        This is a temporary component inserted for easy PR review
      </h5>
      <div className="flex items-center gap-3">
        <span className="inline-block">
          <ColorPicker
            color={`#${color}`}
            dropdownProps={{ appendTo: document.body, zIndex: 99999 }}
            size="medium"
            colorPaletteProps={{
              color: { from: color, to: color },
              colorList: COLORS.map(color => ({
                from: color.replace("#", ""),
                to: color.replace("#", ""),
              })),
              onChange: setColor,
            }}
            onChange={({ hex }) => setColor(hex.replace("#", ""))}
          />
        </span>
        <Tag
          {...{ ...args }}
          color={`#${color}`}
          label={`#${color} - outline`}
          type="outline"
        />
        <Tag
          {...{ ...args }}
          color={`#${color}`}
          label={`#${color} - solid`}
          type="solid"
        />
      </div>
      <div>
        <h5 className="mb-4 capitalize">Outline</h5>
        <div className="flex flex-wrap gap-3">
          {COLORS.map(color => (
            <Tag
              key={color}
              {...{ ...args, color }}
              label={color}
              type="outline"
            />
          ))}
        </div>
      </div>
      <div>
        <h5 className="mb-4 capitalize">Solid</h5>
        <div className="flex flex-wrap gap-3">
          {COLORS.map(color => (
            <Tag
              key={color}
              {...{ ...args, color }}
              label={color}
              type="solid"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WithIndicator = args => (
  <div className="flex flex-row items-start justify-start space-x-4">
    <Tag {...args} indicatorStyle="primary" label="Primary" style="secondary" />
    <Tag
      {...args}
      indicatorStyle="secondary"
      label="Secondary"
      style="secondary"
    />
    <Tag {...args} indicatorStyle="info" label="Info" style="secondary" />
    <Tag {...args} indicatorStyle="success" label="Success" style="secondary" />
    <Tag {...args} indicatorStyle="warning" label="Warning" style="secondary" />
    <Tag {...args} indicatorStyle="danger" label="Danger" style="secondary" />
  </div>
);
WithIndicator.storyName = "With indicator";

const WithIcon = args => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag {...args} icon={Favorite} label="With icon" />
    <Tag {...args} icon={Favorite} label="With icon" size="large" />
  </div>
);
WithIcon.storyName = "With icon";

const WithOnClose = args => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag {...args} label="With close icon" onClose={() => {}} />
    <Tag {...args} label="With close icon" size="large" onClose={() => {}} />
  </div>
);
WithOnClose.storyName = "With on close";

const CSSCustomization = args => <Tag {...args} />;

CSSCustomization.storyName = "Tag CSS Customization";

CSSCustomization.args = {
  label: "Custom Tag",
  className: "neetix-tag--primary",
};

CSSCustomization.parameters = {
  docs: { description: { story: TagCSSCustomization } },
};

export {
  Default,
  Sizes,
  Styles,
  Types,
  Colors,
  TemporaryComponent,
  WithIndicator,
  WithIcon,
  WithOnClose,
  CSSCustomization,
};

export default metadata;
