import React from "react";
import { Favorite } from "@bigbinary/neeto-icons";

import Tag from "../../lib/components/Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tag } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};

export const TagColorStory = (props) => (
  <div className="p-6">
    <Tag {...props} />
  </div>
);

TagColorStory.storyName = "Tag with Color";
TagColorStory.args = {
  color: "green",
  style: "outline",
  label: "Label",
  size: "large",
  onClose: null,
};

export const AllVariants = () => {
  const onClose = () => alert("onClose Triggered!");

  return (
    <div className="p-6">
      <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
        <div className="flex flex-col p-2 space-y-6">
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Outline Small: </h5>
            <Tag label="Label" />
            <Tag icon={Favorite} label="Label" />
            <Tag onClose={onClose} label="Label" />
            <Tag icon={Favorite} onClose={onClose} label="Label" />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Outline Large: </h5>
            <Tag size="large" label="Label" />
            <Tag size="large" icon={Favorite} label="Label" />
            <Tag size="large" onClose={onClose} label="Label" />
            <Tag size="large" icon={Favorite} onClose={onClose} label="Label" />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Colored Outline Large : </h5>
            <Tag
              style="outline"
              size="large"
              color="gray"
              icon={Favorite}
              onClose={onClose}
              label="Label"
            />
            <Tag style="outline" size="large" color="red" label="Label" />
            <Tag
              style="outline"
              size="large"
              color="green"
              icon={Favorite}
              label="Label"
            />
            <Tag
              style="outline"
              size="large"
              color="blue"
              onClose={onClose}
              label="Label"
            />
            <Tag
              style="outline"
              size="large"
              color="yellow"
              icon={Favorite}
              onClose={onClose}
              label="Label"
            />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Solid Small: </h5>
            <Tag style="solid" label="Label" />
            <Tag style="solid" icon={Favorite} label="Label" />
            <Tag style="solid" onClose={onClose} label="Label" />
            <Tag
              style="solid"
              icon={Favorite}
              onClose={onClose}
              label="Label"
            />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Solid Large : </h5>
            <Tag style="solid" size="large" label="Label" />
            <Tag style="solid" size="large" icon={Favorite} label="Label" />
            <Tag style="solid" size="large" onClose={onClose} label="Label" />
            <Tag
              style="solid"
              size="large"
              icon={Favorite}
              onClose={onClose}
              label="Label"
            />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>Solid With Colors : </h5>
            <Tag size="large" style="solid" label="Label" color="gray" />
            <Tag size="large" style="solid" label="Label" color="red" />
            <Tag size="large" style="solid" label="Label" color="green" />
            <Tag size="large" style="solid" label="Label" color="blue" />
            <Tag size="large" style="solid" label="Label" color="yellow" />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>With Indicator : </h5>
            <Tag label="Label" indicatorColor="green" />
            <Tag label="Label" indicatorColor="yellow" />
            <Tag label="Label" indicatorColor="blue" />
            <Tag label="Label" indicatorColor="red" />
            <Tag label="Label" indicatorColor="gray" />
          </div>
          <div className="flex flex-row items-start justify-start space-x-4">
            <h5>With Indicator Large : </h5>
            <Tag size="large" label="Label" indicatorColor="green" />
            <Tag size="large" label="Label" indicatorColor="yellow" />
            <Tag size="large" label="Label" indicatorColor="blue" />
            <Tag size="large" label="Label" indicatorColor="red" />
            <Tag size="large" label="Label" indicatorColor="gray" />
          </div>
        </div>
      </div>
    </div>
  );
};
