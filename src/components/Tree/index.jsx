import React from "react";

import { ConfigProvider, Tree as TreeComponent } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import { ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES } from "utils";

import SwitcherIcon from "./SwitcherIcon";

const Tree = props => (
  <ConfigProvider
    theme={{
      token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
      components: {
        Tree: {
          directoryNodeSelectedBg: "rgb(var(--neeto-ui-primary-500))",
          directoryNodeSelectedColor: "rgb(var(--neeto-ui-white))",
          nodeHoverBg: "rgb(var(--neeto-ui-gray-100))",
          nodeSelectedBg: "rgb(var(--neeto-ui-primary-100))",
        },
      },
    }}
  >
    <TreeComponent
      switcherIcon={SwitcherIcon}
      {...props}
      className={classnames("neeto-ui-tree", props.className)}
    />
  </ConfigProvider>
);

Tree.propTypes = {
  /**
   * Whether to allow dropping on the node
   */
  allowDrop: PropTypes.bool,
  /**
   * Whether to automatically expand a parent treeNode
   */
  autoExpandParent: PropTypes.bool,
  /**
   * Whether treeNode fill remaining horizontal space
   */
  blockNode: PropTypes.bool,
  /**
   * Add a Checkbox before the treeNodes.
   */
  checkable: PropTypes.bool,
  /**
   * Specifies the keys of the checked treeNodes
   */
  checkedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Check treeNode precisely; parent treeNode and children treeNodes are not associated
   */
  checkStrictly: PropTypes.bool,
  /**
   * Specifies the keys of the default checked treeNodes.
   */
  defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Specify the keys of the default expanded treeNodes.
   */
  defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Specifies the keys of the default selected treeNodes.
   */
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback function for when the onCheck event occurs.
   */
  onCheck: PropTypes.func,
  /**
   * Whether disabled the tree
   */
  disabled: PropTypes.bool,
  /**
   * The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array).
   */
  treeData: PropTypes.array,
  /**
   * Callback function for when the user clicks a treeNode.
   */
  onSelect: PropTypes.func,
  /**
   * Shows a connecting line.
   */
  showLine: PropTypes.bool,
  /**
   * Config virtual scroll height. Will not support horizontal scroll when enable this.
   */
  height: PropTypes.number,
  /**
   * Specifies whether this Tree or the node is draggable.
   */
  draggable: PropTypes.bool,
  /**
   * Callback function for when the onDragEnter event occurs
   */
  onDragEnter: PropTypes.func,
  /**
   * Callback function for when the onDragStart event occurs
   */
  onDragStart: PropTypes.func,
  /**
   * Callback function for when the onDragEnter event occurs
   */
  onDragEnd: PropTypes.func,
  /**
   * Callback function for when the onDragLeave event occurs
   */
  onDragLeave: PropTypes.func,
  /**
   * Callback function for when the onDragOver event occurs
   */
  onDragOver: PropTypes.func,
  /**
   * Callback function for when the onDrop event occurs
   */
  onDrop: PropTypes.func,
  /**
   * Defines a function to filter (highlight) treeNodes. When the function returns true, the corresponding treeNode will be highlighted
   */
  filterTreeNode: PropTypes.func,
  /**
   * Load data asynchronously
   */
  loadData: PropTypes.func,
  /**
   *  Set loaded tree nodes. Need work with loadData
   */
  loadedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Whether can be selected
   */
  selectable: PropTypes.bool,
  /**
   * Specifies the keys of the selected treeNodes, multiple selection needs to set multiple to true
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * Allows selecting multiple treeNodes
   */
  multiple: PropTypes.bool,
  /**
   * Customize tree node title render
   */
  titleRender: PropTypes.func,
  /**
   * Disable virtual scroll when set to false
   */
  virtual: PropTypes.bool,
  /**
   * Callback function for when a treeNode is expanded or collapsed
   */
  onExpand: PropTypes.func,
  /**
   * Callback function for when a treeNode is loaded
   */
  onLoad: PropTypes.func,
  /**
   * Customize collapse/expand icon of tree node
   */
  switcherIcon: PropTypes.node,
};

export default Tree;
