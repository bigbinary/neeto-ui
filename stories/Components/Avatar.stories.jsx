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
  },
};

const Template = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  onClick,
  user: { name: "neeto UI" },
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  onClick,
  user: { name: "neeto UI" },
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  onClick,
  user: { name: "neeto UI" },
  size: "large",
};

export const Xlarge = Template.bind({});
Xlarge.args = {
  onClick,
  user: { name: "neeto UI" },
  size: "xlarge",
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.storyName = "With Custom className";
WithCustomClassName.args = {
  onClick,
  user: { name: "neeto UI" },
  size: "xlarge",
  className: "cursor-pointer",
};

export const Variants = () => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <div className="p-6">
      <div className="flex p-4 space-x-4 border border-indigo-500 border-dashed">
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
            size="xlarge"
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
            size="xlarge"
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
            size="xlarge"
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
            size="xlarge"
            isSquare
          />
        </div>
      </div>
    </div>
  );
};
