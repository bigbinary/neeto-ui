import React from "react";
import { Favorite } from "@bigbinary/neeto-icons";

import Tag from "../lib/components/Tag";

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

export const Tags = () => {
  const onClose = () => alert("onClose Triggered!");

  return (
    <div className="p-6">
      <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
        <div className="flex flex-col space-y-6 p-2">
          <div className="flex flex-row justify-start items-start space-x-4">
            <h5>Outline Small: </h5>
            <Tag label="Label" />
            <Tag icon={Favorite} label="Label" />
            <Tag onClose={onClose} label="Label" />
            <Tag icon={Favorite} onClose={onClose} label="Label" />
          </div>
          <div className="flex flex-row justify-start items-start space-x-4">
            <h5>Outline Large: </h5>
            <Tag size="large" label="Label" />
            <Tag size="large" icon={Favorite} label="Label" />
            <Tag size="large" onClose={onClose} label="Label" />
            <Tag size="large" icon={Favorite} onClose={onClose} label="Label" />
          </div>
          <div className="flex flex-row justify-start items-start space-x-4">
            <h5>Colored Outline Large : </h5>
            <Tag
              style="outline"
              size="large"
              color="grey"
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
          <div className="flex flex-row justify-start items-start space-x-4">
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
          <div className="flex flex-row justify-start items-start space-x-4">
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
          <div className="flex flex-row justify-start items-start space-x-4">
            <h5>Solid With Colors : </h5>
            <Tag size="large" style="solid" label="Label" color="grey" />
            <Tag size="large" style="solid" label="Label" color="red" />
            <Tag size="large" style="solid" label="Label" color="green" />
            <Tag size="large" style="solid" label="Label" color="blue" />
            <Tag size="large" style="solid" label="Label" color="yellow" />
          </div>
          <div className="flex flex-row justify-start items-start space-x-4">
            <h5>With Indicator : </h5>
            <Tag label="Label" indicator="bg-green-500" />
            <Tag label="Label" indicator="bg-yellow-500" />
            <Tag label="Label" indicator="bg-blue-500" />
            <Tag label="Label" indicator="bg-red-500" />
          </div>
          <div className="flex flex-row justify-start items-start space-x-4">
            <h5>With Indicator Large : </h5>
            <Tag size="large" label="Label" indicator="bg-green-500" />
            <Tag size="large" label="Label" indicator="bg-yellow-500" />
            <Tag size="large" label="Label" indicator="bg-blue-500" />
            <Tag size="large" label="Label" indicator="bg-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const TagColorStory = (props) => (
  <div className="flex items-center justify-center">
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
