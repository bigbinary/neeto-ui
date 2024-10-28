import React from "react";

import { Favorite } from "neetoicons";

import Button from "components/Button";

import { icons } from "../constants";

import ButtonCSSCustomization from "!raw-loader!./ButtonStoriesDocs/ButtonCSSCustomization.mdx";
import ButtonDocs from "!raw-loader!./ButtonStoriesDocs/ButtonDocs.mdx";

const metadata = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
    docs: { description: { component: ButtonDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A18",
    },
  },
  argTypes: {
    style: {
      description: "To specify the style of the Button.",
      control: "select",
      options: Object.values({
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
        danger: "danger",
        danger_text: "danger-text",
        text: "text",
        link: "link",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      description: "To set the size of the Button.",
      control: "select",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    iconPosition: {
      description: "To specify the position of the icon.",
      control: "radio",
      options: Object.values({ left: "left", right: "right" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "right" },
      },
    },
    iconSize: {
      description: "To specify the size of the icon.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 16 },
      },
    },
    label: {
      description: "To set the text to be displayed inside the Button.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    loading: {
      description:
        "Indicates if a Button is in loading state and shows spinner if true.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: "To set Button as disabled.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    icon: {
      description: "To set the icon to be shown in the Button.",
      options: Object.keys(icons),
      mapping: icons,
    },
    onClick: {
      description:
        "To specify the action to be triggered on clicking the Button.",
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
    to: {
      description:
        "To specify an internal route to which the Button points to.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    href: {
      description: "To specify an external link to which the Button points to.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    type: {
      description: "To specify the type of Button.",
      control: "select",
      options: Object.values({
        button: "button",
        reset: "reset",
        submit: "submit",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "button" },
      },
    },
    fullWidth: {
      description: "To set the Button to full width of the container.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    className: {
      description: "To provide external classnames to Button component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    tooltipProps: {
      description: "To specify the props to be passed to the tooltip.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    children: {
      description: "To specify the children to be rendered inside the Button.",
      control: "text",
      table: { type: { summary: "string" } },
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
        <Button {...args} label="Tertiary" style="tertiary" />
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
          <Button {...args} icon={Favorite} size="small" />
          <Button {...args} icon={Favorite} size="medium" />
          <Button {...args} icon={Favorite} size="large" />
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

const CSSCustomization = args => <Button {...args} />;

CSSCustomization.storyName = "Button CSS Customization";

CSSCustomization.args = {
  label: "Button",
  className: "neetix-button--primary",
};

CSSCustomization.parameters = {
  docs: { description: { story: ButtonCSSCustomization } },
};

export {
  Default,
  Sizes,
  Styles,
  IconButtons,
  LoadingState,
  FullWidth,
  Tooltip,
  CSSCustomization,
};

export default metadata;
