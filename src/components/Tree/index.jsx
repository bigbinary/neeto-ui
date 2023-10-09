import React from "react";

import { Tree as TreeComponent } from "antd";
import PropTypes from "prop-types";

import { noop } from "utils";

import SwitcherIcon from "./SwitcherIcon";

const Tree = ({
  defaultCheckedKeys = [],
  defaultExpandedKeys = [],
  defaultSelectedKeys = [],
  onCheck = noop,
  treeData = [],
  onSelect = noop,
  showLine = true,
  checkable = false,
  draggable = false,
  ...otherProps
}) => (
  <TreeComponent
    checkable={checkable}
    className="neeto-ui-tree draggable-tree"
    defaultCheckedKeys={defaultCheckedKeys}
    defaultExpandedKeys={defaultExpandedKeys}
    defaultSelectedKeys={defaultSelectedKeys}
    draggable={draggable}
    showLine={showLine}
    switcherIcon={SwitcherIcon}
    treeData={treeData}
    onCheck={onCheck}
    onSelect={onSelect}
    {...otherProps}
  />
);

Tree.displayName = "Tree";

Tree.propTypes = {
  /**
   * Add a Checkbox before the treeNodes.
   */
  checkable: PropTypes.bool,
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
};

export default Tree;
