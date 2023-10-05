import React, { forwardRef } from "react";

import { Tree as TreeComponent } from "antd";
import { Down, Up } from "neetoicons";
import PropTypes from "prop-types";

import { noop } from "utils";

const SwitcherIcon = ({ expanded }) =>
  expanded ? <Up size={20} /> : <Down size={20} />;

const Tree = forwardRef(
  (
    {
      defaultCheckedKeys = [],
      defaultExpandedKeys = [],
      defaultSelectedKeys = [],
      onCheck = noop,
      treeData = [],
      onSelect = noop,
      showLine = true,
      checkable = false,
      ...otherProps
    },
    ref
  ) => (
    <TreeComponent
      checkable={checkable}
      defaultCheckedKeys={defaultCheckedKeys}
      defaultExpandedKeys={defaultExpandedKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      ref={ref}
      showLine={showLine}
      switcherIcon={SwitcherIcon}
      treeData={treeData}
      onCheck={onCheck}
      onSelect={onSelect}
      {...otherProps}
    />
  )
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
};

export default Tree;
