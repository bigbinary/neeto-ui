import React from "react";

import Avatar from "components/Avatar";

const onClick = () => {
  alert("onClick event!");
};

const description = `
\`import { Avatar } from "@bigbinary/neetoui";\`

\`Avatar\` is a graphical representation, usually an image or icon, that
represents a user or entity in a digital environment.
`;

const metadata = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A16",
    },
  },
  argTypes: {
    size: {
      description: "Specify the dimension for Avatar component.",
      control: "radio",
      options: Object.keys({
        small: 24,
        medium: 32,
        large: 40,
        extraLarge: 64,
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    user: {
      description: "User object containing image URL and name",
      control: "object",
      table: {
        type: {
          summary: "shape",
          detail: `{
  imageUrl: string,
  name: string
}`,
        },
      },
    },
    onClick: {
      description:
        "To specify the action to be triggered on clicking the Avatar.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    status: {
      description:
        "To specify the status of the user if needed in Avatar component.",
      control: "radio",
      options: Object.keys({
        online: "online",
        idle: "idle",
        offline: "offline",
      }),
      table: { type: { summary: "string" } },
    },
    showTooltip: {
      description: "To display a tooltip with name of the user.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    tooltipProps: {
      description: "To specify the props to be passed to the tooltip.",
      control: "object",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
      },
    },
    className: {
      description: "To provide external classnames to Avatar component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
  },
};

const Template = args => <Avatar {...args} />;

const Default = Template.bind({});
Default.args = { user: { name: "neeto UI" } };

const Sizes = args => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex flex-col space-y-4 p-2 ">
      <span className="text-sm">Small</span>
      <Avatar {...{ ...args, onClick }} size="small" user={{ imageUrl }} />
      <span className="text-sm">Medium</span>
      <Avatar {...{ ...args, onClick }} size="medium" user={{ imageUrl }} />
      <span className="text-sm">Large</span>
      <Avatar {...{ ...args, onClick }} size="large" user={{ imageUrl }} />
      <span className="text-sm">X Large</span>
      <Avatar {...{ ...args, onClick }} size="extraLarge" user={{ imageUrl }} />
    </div>
  );
};

const WithStatus = args => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex flex-col space-y-4 p-2 ">
      <span className="text-sm">Offline</span>
      <Avatar {...args} size="large" status="offline" user={{ imageUrl }} />
      <span className="text-sm">Online</span>
      <Avatar {...args} size="large" status="online" user={{ imageUrl }} />
      <span className="text-sm">Idle</span>
      <Avatar {...args} size="large" status="idle" user={{ imageUrl }} />
    </div>
  );
};
WithStatus.storyName = "With status";

const WithTooltip = args => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex space-x-6 ">
      <Avatar
        {...args}
        showTooltip
        size="large"
        user={{ name: "Neeraj Singh" }}
      />
      <Avatar
        {...args}
        showTooltip
        size="large"
        user={{ name: "Amal Dinesh", imageUrl }}
      />
    </div>
  );
};
WithTooltip.storyName = "With tooltip";

const WithCustomClassName = Template.bind({});
WithCustomClassName.storyName = "With custom className";
WithCustomClassName.args = {
  onClick,
  user: { name: "neeto UI" },
  size: "extraLarge",
  className: "cursor-pointer",
};
WithCustomClassName.storyName = "With custom className";

const Variants = args => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex space-x-4 p-4">
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          {...{ ...args, onClick }}
          size="small"
          user={{ name: "Akkshay Lawrence" }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="medium"
          user={{ name: "Vinay V Chandran" }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="large"
          user={{ name: "Neeraj Singh" }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="extraLarge"
          user={{ name: "Goutham Subramanyam" }}
        />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          {...{ ...args, onClick }}
          size="small"
          status="online"
          user={{ name: "Akkshay Lawrence" }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="medium"
          status="idle"
          user={{ name: "Vinay V" }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="large"
          status="offline"
          user={{ name: "Neeraj Singh" }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="extraLarge"
          status="online"
          user={{ name: "Goutham Subramanyam" }}
        />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          {...{ ...args, onClick }}
          size="small"
          status="online"
          user={{ name: "Akkshay Lawrence", imageUrl }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="medium"
          status="idle"
          user={{ name: "Vinay V", imageUrl }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="large"
          status="offline"
          user={{ name: "Neeraj Singh", imageUrl }}
        />
        <Avatar
          {...{ ...args, onClick }}
          size="extraLarge"
          status="online"
          user={{ name: "Goutham Subramanyam", imageUrl }}
        />
      </div>
    </div>
  );
};

const AvatarCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Avatar\`
component.

\`\`\`css
// Container
--neeto-ui-avatar-container-border-radius: var(--neeto-ui-rounded);
--neeto-ui-avatar-container-width: 24px;
--neeto-ui-avatar-container-height: 24px;

// Avatar
--neeto-ui-avatar-width: 1.5rem;
--neeto-ui-avatar-height: 1.5rem;
--neeto-ui-avatar-border-radius: var(--neeto-ui-rounded-full);

// Status
--neeto-ui-avatar-status-width: 0.4rem;
--neeto-ui-avatar-status-height: 0.4rem;
--neeto-ui-avatar-status-bg-color: var(--neeto-ui-white);
--neeto-ui-avatar-status-border-width: 0.5px;
--neeto-ui-avatar-status-border-color: rgb(var(--neeto-ui-white));
--neeto-ui-avatar-status-border-radius: var(--neeto-ui-rounded-full);
--neeto-ui-avatar-status-transform: translateX(-40%);
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-avatar {
  --neeto-ui-avatar-container-border-radius: var(--neeto-ui-rounded-lg);
  --neeto-ui-avatar-border-radius: var(--neeto-ui-rounded-lg);
}
\`\`\`

#### Output
`;

const CSSCustomization = args => {
  const imageUrl = "https://i.pravatar.cc/300";

  return <Avatar className="neetix-avatar" user={{ imageUrl }} {...args} />;
};

CSSCustomization.storyName = "Avatar CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: AvatarCSSCustomization } },
};

export {
  Default,
  Sizes,
  WithStatus,
  WithTooltip,
  WithCustomClassName,
  Variants,
  CSSCustomization,
};

export default metadata;
