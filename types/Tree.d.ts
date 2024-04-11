import React from "react";
import { DataNode, AntTreeNodeProps } from "antd";

export type TreeProps = {
  className?: string;
  allowDrop?: boolean;
  autoExpandParent?: boolean;
  blockNode: boolean;
  checkable: boolean;
  checkedKeys: string[] | { checked: string[]; halfChecked: string[] };
  checkStrictly: boolean;
  defaultCheckedKeys: string[];
  defaultExpandAll: boolean;
  defaultExpandedKeys: string[];
  defaultExpandParent: boolean;
  defaultSelectedKeys: string[];
  disabled: boolean;
  draggable:
    | boolean
    | ((node: DataNode) => boolean)
    | {
        icon?: React.ReactNode | false;
        nodeDraggable?: (node: DataNode) => boolean;
      };
  expandedKeys: string[];
  fieldNames: object;
  filterTreeNode: Function;
  height: number;
  icon: ReactNode;
  loadData: Function;
  loadedKeys: string[];
  multiple: boolean;
  selectable: boolean;
  selectedKeys: string[];
  showIcon: boolean;
  showLine:
    | boolean
    | {
        showLeafIcon:
          | boolean
          | ReactNode
          | ((props: AntTreeNodeProps) => ReactNode);
      };
  switcherIcon: ReactNode | ((props: AntTreeNodeProps) => ReactNode);
  titleRender: Function;
  treeData: array<{ key; title; children; [disabled, selectable] }>;
  virtual: boolean;
  onCheck: Function;
  onDragEnd: Function;
  onDragEnter: Function;
  onDragLeave: Function;
  onDragOver: Function;
  onDragStart: Function;
  onDrop: Function;
  onExpand: Function;
  onLoad: Function;
  onRightClick: Function;
  onSelect: Function;
};

export const Tree: React.FC<TreeProps>;
export default Tree;
