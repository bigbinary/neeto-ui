import React from "react";

import Avatar from "components/Avatar";

import AvatarStoriesDocs from "!raw-loader!./AvatarStoriesDocs.mdx";

const onClick = () => {
  alert("onClick event!");
};

const metadata = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "padded",
    docs: { description: { component: AvatarStoriesDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A16",
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
      <Avatar {...args} size="small" user={{ imageUrl }} onClick={onClick} />
      <span className="text-sm">Medium</span>
      <Avatar {...args} size="medium" user={{ imageUrl }} onClick={onClick} />
      <span className="text-sm">Large</span>
      <Avatar {...args} size="large" user={{ imageUrl }} onClick={onClick} />
      <span className="text-sm">X Large</span>
      <Avatar
        {...args}
        size="extraLarge"
        user={{ imageUrl }}
        onClick={onClick}
      />
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
          {...args}
          size="small"
          user={{ name: "Akkshay Lawrence" }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="medium"
          user={{ name: "Vinay V Chandran" }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="large"
          user={{ name: "Neeraj Singh" }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="extraLarge"
          user={{ name: "Goutham Subramanyam" }}
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          {...args}
          size="small"
          status="online"
          user={{ name: "Akkshay Lawrence" }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="medium"
          status="idle"
          user={{ name: "Vinay V" }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="large"
          status="offline"
          user={{ name: "Neeraj Singh" }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="extraLarge"
          status="online"
          user={{ name: "Goutham Subramanyam" }}
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          {...args}
          size="small"
          status="online"
          user={{ name: "Akkshay Lawrence", imageUrl }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="medium"
          status="idle"
          user={{ name: "Vinay V", imageUrl }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="large"
          status="offline"
          user={{ name: "Neeraj Singh", imageUrl }}
          onClick={onClick}
        />
        <Avatar
          {...args}
          size="extraLarge"
          status="online"
          user={{ name: "Goutham Subramanyam", imageUrl }}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export {
  Default,
  Sizes,
  WithStatus,
  WithTooltip,
  WithCustomClassName,
  Variants,
};

export default metadata;
