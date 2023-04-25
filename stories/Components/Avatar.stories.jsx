/* eslint-disable no-empty-pattern */
import React from "react";

import Avatar from "components/Avatar";

const onClick = () => {
  alert("onClick event!");
};

const metadata = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Avatar } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A16",
    },
  },
};

const Template = args => <Avatar {...args} />;

const Default = Template.bind({});
Default.args = {
  user: { name: "neeto UI" },
};

const Sizes = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex flex-col space-y-4 p-2 ">
      <span className="text-sm">Small</span>
      <Avatar size="small" user={{ imageUrl }} onClick={onClick} />
      <span className="text-sm">Medium</span>
      <Avatar size="medium" user={{ imageUrl }} onClick={onClick} />
      <span className="text-sm">Large</span>
      <Avatar size="large" user={{ imageUrl }} onClick={onClick} />
      <span className="text-sm">X Large</span>
      <Avatar size="extraLarge" user={{ imageUrl }} onClick={onClick} />
    </div>
  );
};

const WithStatus = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex flex-col space-y-4 p-2 ">
      <span className="text-sm">Offline</span>
      <Avatar size="large" status="offline" user={{ imageUrl }} />
      <span className="text-sm">Online</span>
      <Avatar size="large" status="online" user={{ imageUrl }} />
      <span className="text-sm">Idle</span>
      <Avatar size="large" status="idle" user={{ imageUrl }} />
    </div>
  );
};
WithStatus.storyName = "With status";

const WithTooltip = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex space-x-6 ">
      <Avatar showTooltip size="large" user={{ name: "Neeraj Singh" }} />
      <Avatar
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

const Variants = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex space-x-4 p-4">
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          size="small"
          user={{ name: "Akkshay Lawrence" }}
          onClick={onClick}
        />
        <Avatar
          size="medium"
          user={{ name: "Vinay V Chandran" }}
          onClick={onClick}
        />
        <Avatar
          size="large"
          user={{ name: "Neeraj Singh" }}
          onClick={onClick}
        />
        <Avatar
          size="extraLarge"
          user={{ name: "Goutham Subramanyam" }}
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          size="small"
          status="online"
          user={{ name: "Akkshay Lawrence" }}
          onClick={onClick}
        />
        <Avatar
          size="medium"
          status="idle"
          user={{ name: "Vinay V" }}
          onClick={onClick}
        />
        <Avatar
          size="large"
          status="offline"
          user={{ name: "Neeraj Singh" }}
          onClick={onClick}
        />
        <Avatar
          size="extraLarge"
          status="online"
          user={{ name: "Goutham Subramanyam" }}
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col space-y-4 p-2">
        <Avatar
          size="small"
          status="online"
          user={{ name: "Akkshay Lawrence", imageUrl }}
          onClick={onClick}
        />
        <Avatar
          size="medium"
          status="idle"
          user={{ name: "Vinay V", imageUrl }}
          onClick={onClick}
        />
        <Avatar
          size="large"
          status="offline"
          user={{ name: "Neeraj Singh", imageUrl }}
          onClick={onClick}
        />
        <Avatar
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
