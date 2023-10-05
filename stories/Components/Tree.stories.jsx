import React from "react";

import Tree from "components/Tree";

const metadata = {
  title: "Components/Tree",
  component: Tree,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tree } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Default = args => <Tree {...args} />;

Default.args = {
  height: 200,
  checkable: true,
  treeData: [
    {
      title: "Animals",
      key: "animals",
      children: [
        {
          title: "Dogs",
          key: "dogs",
          children: [
            { title: "Golden Retriever", key: "goldenRetriever" },
            { title: "Beagle", key: "beagle" },
            { title: "Dalmatian", key: "dalmatian" },
          ],
        },
        {
          title: "Cats",
          key: "cats",
          children: [
            { title: "Siamese", key: "siamese" },
            { title: "Persian", key: "persian" },
            { title: "Sphynx", key: "Sphynx" },
          ],
        },
      ],
    },
    {
      title: "Cars",
      key: "cars",
      children: [
        { title: "XUV", key: "XUV" },
        { title: "Hatchack", key: "Hatchack" },
        { title: "Sedan", key: "Sedan" },
      ],
    },
  ],
};

Default.storyName = "Tree";

export { Default };
export default metadata;
