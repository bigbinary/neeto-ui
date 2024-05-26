import React from "react";

import { Help } from "neetoicons";

import Button from "components/Button";
import Label from "components/Label";
import Popover from "components/Popover";
import Tooltip from "components/Tooltip";
import Typography from "components/Typography";

import LabelCSSCustomization from "!raw-loader!./LabelStoriesDocs/LabelCSSCustomization.mdx";
import LabelDocs from "!raw-loader!./LabelStoriesDocs/LabelDocs.mdx";

const metadata = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: { description: { component: LabelDocs } },
  },
  subcomponents: { Tooltip },
};

const Template = ({ children, ...args }) => <Label {...args}>{children}</Label>;

const Default = Template.bind({});
Default.args = { children: "This is a default Label" };

const Required = Template.bind({});
Required.args = {
  children: "This is a required Label",
  required: true,
};

const WithHelpIconAndPopover = Template.bind({});
WithHelpIconAndPopover.args = {
  children: "This is a Label with a help icon",
  required: true,
  helpIconProps: {
    onClick: () => window.open("https://neetoui.onrender.com"),
    icon: Help,
    popoverProps: {
      content: (
        <>
          <Popover.Title>What is KB keywords?</Popover.Title>
          <Typography lineHeight="normal" style="body2">
            Keywords represent the key concepts of an article. These will be
            shown on the KB and will be used for SEO
          </Typography>
          <Button
            className="neeto-ui-mt-3"
            label="View help article"
            size="small"
            style="link"
            onClick={() => window.open("https://neetoui.onrender.com")}
          />
        </>
      ),
      position: "auto",
    },
  },
};
WithHelpIconAndPopover.storyName = "With help icon and Popover";

const WithHelpIconAndTooltip = Template.bind({});
WithHelpIconAndTooltip.args = {
  children: "This is a Label with a help icon",
  required: true,
  helpIconProps: {
    onClick: () => window.open("https://neetoui.onrender.com"),
    icon: Help,
    tooltipProps: { content: "Help icon tooltip", position: "auto" },
  },
};
WithHelpIconAndTooltip.storyName = "With help icon and Tooltip";

const CSSCustomization = args => <Label {...args} />;

CSSCustomization.storyName = "Label CSS Customization";

CSSCustomization.args = {
  children: "This is a custom label",
  className: "neetix-label",
};

CSSCustomization.parameters = {
  docs: { description: { story: LabelCSSCustomization } },
};

export {
  Default,
  Required,
  WithHelpIconAndTooltip,
  WithHelpIconAndPopover,
  CSSCustomization,
};

export default metadata;
