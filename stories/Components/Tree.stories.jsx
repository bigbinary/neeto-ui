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

import TreeCSSCustomization from "!raw-loader!./TreeStoriesDocs/TreeCSSCustomization.mdx";
import TreeDocs from "!raw-loader!./TreeStoriesDocs/TreeDocs.mdx";

const metadata = {
  title: "Components/Tree",
  component: Tree,
  parameters: {
    layout: "padded",
    docs: { description: { component: TreeDocs } },
  },
  argTypes: {
    allowDrop: {
      description: "Whether to allow dropping on the node",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    autoExpandParent: {
      description: "Whether to automatically expand a parent treeNode",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    blockNode: {
      description: "Whether treeNode fill remaining horizontal space",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    checkable: {
      description: "Add a Checkbox before the treeNodes.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    checkedKeys: {
      description: "Specifies the keys of the checked treeNodes",
      control: "object",
      table: { type: { summary: "string[]" } },
    },
    checkStrictly: {
      description:
        "Check treeNode precisely; parent treeNode and children treeNodes are not associated",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    defaultCheckedKeys: {
      description: "Specifies the keys of the default checked treeNodes.",
      control: "object",
      table: { type: { summary: "string[]" } },
    },
    defaultExpandedKeys: {
      description: "Specify the keys of the default expanded treeNodes.",
      control: "object",
      table: { type: { summary: "string[]" } },
    },
    defaultSelectedKeys: {
      description: "Specifies the keys of the default selected treeNodes.",
      control: "object",
      table: { type: { summary: "string[]" } },
    },
    onCheck: {
      description: "Callback function for when the onCheck event occurs.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    disabled: {
      description: "Whether disabled the tree",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    treeData: {
      description:
        "The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array).",
      control: "object",
      table: { type: { summary: "array" } },
    },
    onSelect: {
      description: "Callback function for when the user clicks a treeNode.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    showLine: {
      description: "Shows a connecting line.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    height: {
      description:
        "Config virtual scroll height. Will not support horizontal scroll when enable this.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    draggable: {
      description: "Specifies whether this Tree or the node is draggable.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    onDragEnter: {
      description: "Callback function for when the onDragEnter event occurs",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onDragStart: {
      description: "Callback function for when the onDragStart event occurs",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onDragEnd: {
      description: "Callback function for when the onDragEnter event occurs",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onDragLeave: {
      description: "Callback function for when the onDragLeave event occurs",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onDragOver: {
      description: "Callback function for when the onDragOver event occurs",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onDrop: {
      description: "Callback function for when the onDrop event occurs",
      control: "function",
      table: { type: { summary: "func" } },
    },
    filterTreeNode: {
      description:
        "Defines a function to filter (highlight) treeNodes. When the function returns true, the corresponding treeNode will be highlighted",
      control: "function",
      table: { type: { summary: "func" } },
    },
    loadData: {
      description: "Load data asynchronously",
      control: "function",
      table: { type: { summary: "func" } },
    },
    loadedKeys: {
      description: "Set loaded tree nodes. Need work with loadData",
      control: "object",
      table: { type: { summary: "string[]" } },
    },
    selectable: {
      description: "Whether can be selected",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    selectedKeys: {
      description:
        "Specifies the keys of the selected treeNodes, multiple selection needs to set multiple to true",
      control: "object",
      table: { type: { summary: "string[]" } },
    },
    multiple: {
      description: "Allows selecting multiple treeNodes",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    titleRender: {
      description: "Customize tree node title render",
      control: "function",
      table: { type: { summary: "func" } },
    },
    virtual: {
      description: "Disable virtual scroll when set to false",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    onExpand: {
      description:
        "Callback function for when a treeNode is expanded or collapsed",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onLoad: {
      description: "Callback function for when a treeNode is loaded",
      control: "function",
      table: { type: { summary: "func" } },
    },
    switcherIcon: {
      description: "Customize collapse/expand icon of tree node",
      control: "object",
      table: { type: { summary: "node" } },
    },
  },
};

const Default = args => <Tree {...args} />;

Default.args = { height: 200, treeData: TREE_DATA };

Default.storyName = "Tree";

const DraggableTree = () => {
  const [treeData, setTreeData] = useState(TREE_DATA);
  const onDrop = info => handleOnDrop({ info, treeData, setTreeData });

  return <Tree {...{ onDrop, treeData }} blockNode draggable />;
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
        {...{ onChange }}
        label="Search"
        placeholder="Input search text"
        prefix={<Search />}
        type="search"
        value={searchValue}
      />
      <Tree {...{ autoExpandParent, expandedKeys, onExpand, treeData }} />
    </div>
  );
};

SearchableTree.storyName = "Searchable tree";
SearchableTree.parameters = {
  docs: { source: { code: SEARCHABLE_TREE_CODE } },
};

const CSSCustomization = args => <Tree {...args} />;

CSSCustomization.storyName = "Tree CSS Customization";
CSSCustomization.args = {
  height: 200,
  treeData: TREE_DATA,
  checkable: true,
  className: "neetix-tree",
};

CSSCustomization.parameters = {
  docs: { description: { story: TreeCSSCustomization } },
};

export { Default, DraggableTree, SearchableTree, CSSCustomization };
export default metadata;
