import React from "react";

import Kbd from "components/Kbd";

const description = `
\`import { Kbd } from "@bigbinary/neetoui";\`

\`Kbd\` represents user keyboard input within a document. It's typically used to
display keyboard shortcuts, key presses, or other keyboard-related information
in a web page's content.
`;

const metadata = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    keyName: {
      description: "To specify keyboard key",
      control: "text",
      table: { type: { summary: "string" } },
    },
    className: {
      description: "To provide additional class names to the Kbd.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    tooltipProps: {
      description: "To specify the props to be passed to the tooltip.",
      control: "object",
      table: { type: { summary: "object" } },
    },
  },
};

const Template = args => (
  <div className="flex gap-x-1">
    <Kbd {...args} keyName="⌘" />
    <Kbd {...args} keyName="⇧" />
    <Kbd {...args} keyName="B" />
  </div>
);

const WithTooltips = () => (
  <div className="flex gap-x-1">
    <Kbd keyName="⌘" tooltipProps={{ content: "Command", position: "top" }} />
    <Kbd keyName="⇧" tooltipProps={{ content: "Shift", position: "top" }} />
    <Kbd keyName="B" tooltipProps={{ content: "Bold", position: "top" }} />
  </div>
);

WithTooltips.storyName = "Kbd with tooltips";

const Default = Template.bind({});

const CSSCustomization = args => <Kbd {...args} />;

CSSCustomization.storyName = "Kbd CSS Customization";

CSSCustomization.args = { keyName: "⌘", className: "neetix-kbd" };

const KbdCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Kbd\`
component.

\`\`\`css
--neeto-ui-kbd-font-size: var(--neeto-ui-text-sm);
--neeto-ui-kbd-font-weight: var(--neeto-ui-font-semibold);
--neeto-ui-kbd-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-kbd-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-kbd-border-radius: var(--neeto-ui-rounded);
--neeto-ui-kbd-min-width: 24px;
--neeto-ui-kbd-height: 24px;
--neeto-ui-kbd-padding: 4px;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-kbd {
  --neeto-ui-kbd-font-size: var(--neeto-ui-text-base);
  --neeto-ui-kbd-color: rgb(var(--neeto-ui-primary-800));
  --neeto-ui-kbd-bg-color: rgb(var(--neeto-ui-primary-100));
  --neeto-ui-kbd-border-radius: var(--neeto-ui-rounded-sm);
  --neeto-ui-kbd-min-width: 32px;
  --neeto-ui-kbd-height: 32px;
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: KbdCSSCustomization } },
};

export { Default, WithTooltips, CSSCustomization };

export default metadata;
