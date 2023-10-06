import React, { useState } from "react";

import Tree from "components/Tree";

import { TREE_DATA } from "./constants";
import { handleOnDrop } from "./utils";

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

Default.args = { height: 200, treeData: TREE_DATA };

Default.storyName = "Tree";

const DraggableTree = () => {
  const [treeData, setTreeData] = useState(TREE_DATA);
  const onDrop = info => handleOnDrop({ info, treeData, setTreeData });

  return <Tree blockNode draggable treeData={treeData} onDrop={onDrop} />;
};

DraggableTree.args = {};

DraggableTree.storyName = "Draggable tree";

export { Default, DraggableTree };
export default metadata;
