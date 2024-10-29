import React from "react";

import { Warning, CloseCircle, CheckCircle, Info } from "neetoicons";

import Callout from "components/Callout";

const description = `
\`import { Callout } from "@bigbinary/neetoui";\`

\`Callout\` is a visually distinct element used to draw attention to important
information, messages, or notifications on a web page.
`;

const metadata = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    icon: {
      description:
        "To specify the icon to be used in Callout component. By default, icons are based on the style of the Callout component. Passing false will hide the icon.",
      control: "object",
      table: { type: { summary: "elementType" } },
    },
    style: {
      description: "To specify the style of Callout component.",
      control: "radio",
      options: Object.values({
        info: "info",
        warning: "warning",
        danger: "danger",
        success: "success",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "info" },
      },
    },
    className: {
      description: "To provide external classnames to Callout component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    children: {
      description:
        "To specify the content to be rendered inside the Callout component.",
      control: "object",
      table: { type: { summary: "node" } },
    },
  },
};

const Default = args => <Callout {...args}>This is a Callout!</Callout>;

const Styles = args => (
  <div className="flex flex-col gap-4">
    <Callout {...args} style="success">
      This is a success Callout!
    </Callout>
    <Callout {...args} style="warning">
      This is a warning Callout!
    </Callout>
    <Callout {...args} style="danger">
      This is a danger Callout!
    </Callout>
    <Callout {...args} style="info">
      This is an info Callout!
    </Callout>
  </div>
);

const WithIcon = args => (
  <Callout {...args} icon={Info} style="info">
    This is an info Callout with icon!
  </Callout>
);
WithIcon.storyName = "With icon";

const Variants = args => (
  <div className="flex flex-col gap-4">
    <Callout {...args} icon={CheckCircle} style="success">
      This is a success Callout!
    </Callout>
    <Callout {...args} icon={Info} style="info">
      This is an info Callout!
    </Callout>
    <Callout {...args} icon={Warning} style="warning">
      This is a warning Callout!
    </Callout>
    <Callout {...args} icon={CloseCircle} style="danger">
      This is a danger Callout!
    </Callout>
  </div>
);

const CalloutCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Callout\`
component.

\`\`\`css
--neeto-ui-callout-padding-x: 12px;
--neeto-ui-callout-padding-y: 9px;
--neeto-ui-callout-font-size: var(--neeto-ui-text-sm);
--neeto-ui-callout-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-callout-line-height: 16px;
--neeto-ui-callout-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-callout-bg-color: transparent;
--neeto-ui-callout-border-width: 1px;
--neeto-ui-callout-border-color: transparent;
--neeto-ui-callout-border-radius: var(--neeto-ui-rounded-md);
--neeto-ui-callout-gap: 12px;
--neeto-ui-callout-icon-size: 20px;
--neeto-ui-callout-icon-color: rgb(var(--neeto-ui-gray-800));
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-callout--success {
  --neeto-ui-callout-bg-color: rgb(var(--neeto-ui-primary-100));
  --neeto-ui-callout-border-color: rgb(var(--neeto-ui-primary-500));
  --neeto-ui-callout-icon-color: rgb(var(--neeto-ui-primary-500));
}
\`\`\`

#### Output
`;

const CSSCustomization = args => (
  <Callout className="neetix-callout--success" style="success" {...args}>
    This is a custom Callout!
  </Callout>
);

CSSCustomization.storyName = "Callout CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: CalloutCSSCustomization } },
};

export { Default, Styles, WithIcon, Variants, CSSCustomization };

export default metadata;
