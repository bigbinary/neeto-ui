import React, { useState, useMemo } from "react";

import { Search } from "neetoicons";

import Input from "components/Input";
import Tree from "components/Tree";

import {
  TREE_DATA,
  TREE_DATA_LIST,
  DRAGGABLE_TREE_CODE,
  SEARCHABLE_TREE_CODE,
} from "./constants";
import { handleOnDrop } from "./utils";

import TreeStoriesDocs from "!raw-loader!./TreeStoriesDocs.mdx";

const metadata = {
  title: "Components/Tree",
  component: Tree,
  parameters: {
    layout: "padded",
    docs: { description: { component: TreeStoriesDocs } },
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

DraggableTree.parameters = {
  docs: { source: { code: DRAGGABLE_TREE_CODE } },
};

const getParentKey = (key, tree) => {
  let parentKey;
  tree.forEach(item => {
    const node = item;
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  });

  return parentKey;
};

const SearchableTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = newExpandedKeys => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = ({ target: { value } }) => {
    const newExpandedKeys = TREE_DATA_LIST.map(item => {
      if (item.title.indexOf(value) > -1) {
        return getParentKey(item.key, TREE_DATA);
      }

      return null;
    }).filter((item, i, self) => !!(item && self.indexOf(item) === i));
    setExpandedKeys(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const treeData = useMemo(() => {
    const loop = data =>
      data.map(item => {
        const strTitle = item.title;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);

        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return {
            title,
            key: item.key,
            children: loop(item.children),
          };
        }

        return { title, key: item.key };
      });

    return loop(TREE_DATA);
  }, [searchValue]);

  return (
    <div className="space-y-3">
      <Input
        label="Search"
        placeholder="Input search text"
        prefix={<Search />}
        type="search"
        value={searchValue}
        onChange={onChange}
      />
      <Tree
        autoExpandParent={autoExpandParent}
        expandedKeys={expandedKeys}
        treeData={treeData}
        onExpand={onExpand}
      />
    </div>
  );
};

SearchableTree.storyName = "Searchable tree";
SearchableTree.parameters = {
  docs: { source: { code: SEARCHABLE_TREE_CODE } },
};

export { Default, DraggableTree, SearchableTree };
export default metadata;
