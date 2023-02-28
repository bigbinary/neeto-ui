/* eslint-disable no-empty-pattern */
import React from "react";

import Avatar from "../../lib/components/Avatar";

const onClick = () => {
  alert("onClick event!");
};

export default {
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
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A16",
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: { name: "neeto UI" },
};

// eslint-disable-next-line no-empty-pattern
export const Sizes = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <div className="flex flex-col p-2 space-y-4 ">
      <span className="text-sm">Small</span>
      <Avatar onClick={onClick} user={{ imageUrl }} size="small" />
      <span className="text-sm">Medium</span>
      <Avatar onClick={onClick} user={{ imageUrl }} size="medium" />
      <span className="text-sm">Large</span>
      <Avatar onClick={onClick} user={{ imageUrl }} size="large" />
      <span className="text-sm">X Large</span>
      <Avatar onClick={onClick} user={{ imageUrl }} size="extraLarge" />
    </div>
  );
};

// eslint-disable-next-line no-empty-pattern
export const WithStatus = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <div className="flex flex-col p-2 space-y-4 ">
      <span className="text-sm">Offline</span>
      <Avatar user={{ imageUrl }} status="offline" size="large" />
      <span className="text-sm">Online</span>
      <Avatar user={{ imageUrl }} status="online" size="large" />
      <span className="text-sm">Idle</span>
      <Avatar user={{ imageUrl }} status="idle" size="large" />
    </div>
  );
};
WithStatus.storyName = "With status";

// eslint-disable-next-line no-empty-pattern
export const WithTooltip = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <div className="flex space-x-6 ">
      <Avatar user={{ name: "Neeraj Singh" }} size="large" showTooltip />
      <Avatar
        user={{ name: "Amal Dinesh", imageUrl }}
        size="large"
        showTooltip
      />
    </div>
  );
};
WithTooltip.storyName = "With tooltip";

export const WithCustomClassName = Template.bind({});
WithCustomClassName.storyName = "With custom className";
WithCustomClassName.args = {
  onClick,
  user: { name: "neeto UI" },
  size: "extraLarge",
  className: "cursor-pointer",
};
WithCustomClassName.storyName = "With custom className";

export const Variants = ({}) => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <div className="flex p-4 space-x-4">
      <div className="flex flex-col p-2 space-y-4">
        <Avatar
          onClick={onClick}
          user={{ name: "Akkshay Lawrence" }}
          size="small"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Vinay V Chandran" }}
          size="medium"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Neeraj Singh" }}
          size="large"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Goutham Subramanyam" }}
          size="extraLarge"
        />
      </div>
      <div className="flex flex-col p-2 space-y-4">
        <Avatar
          onClick={onClick}
          user={{ name: "Akkshay Lawrence" }}
          size="small"
          status="online"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Vinay V" }}
          size="medium"
          status="idle"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Neeraj Singh" }}
          size="large"
          status="offline"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Goutham Subramanyam" }}
          size="extraLarge"
          status="online"
        />
      </div>
      <div className="flex flex-col p-2 space-y-4">
        <Avatar
          onClick={onClick}
          user={{ name: "Akkshay Lawrence" }}
          size="small"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Vinay V" }}
          size="medium"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Neeraj Singh" }}
          size="large"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Goutham Subramanyam" }}
          size="extraLarge"
          isSquare
        />
      </div>
      <div className="flex flex-col p-2 space-y-4">
        <Avatar
          onClick={onClick}
          user={{ name: "Akkshay Lawrence" }}
          size="small"
          status="online"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Vinay V" }}
          size="medium"
          status="idle"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Neeraj Singh" }}
          size="large"
          status="offline"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Goutham Subramanyam" }}
          size="extraLarge"
          status="online"
          isSquare
        />
      </div>
      <div className="flex flex-col p-2 space-y-4">
        <Avatar
          onClick={onClick}
          user={{ name: "Akkshay Lawrence", imageUrl }}
          status="online"
          size="small"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Vinay V", imageUrl }}
          status="idle"
          size="medium"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Neeraj Singh", imageUrl }}
          status="offline"
          size="large"
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Goutham Subramanyam", imageUrl }}
          status="online"
          size="extraLarge"
        />
      </div>
      <div className="flex flex-col p-2 space-y-4">
        <Avatar
          onClick={onClick}
          user={{ name: "Akkshay Lawrence", imageUrl }}
          size="small"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Vinay V", imageUrl }}
          size="medium"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Neeraj Singh", imageUrl }}
          size="large"
          isSquare
        />
        <Avatar
          onClick={onClick}
          user={{ name: "Goutham Subramanyam", imageUrl }}
          size="extraLarge"
          isSquare
        />
      </div>
    </div>
  );
};
