import React from "react";

type TreeItemNested = {
  label: string;
  value: string;
  disabled: Boolean;
  children: Array<TreeItemNested>;
};

type TreeItem = {
  id: string;
  label: string;
  value: string;
  disabled: Boolean;
  pId: string;
};

export type TreeSelectProps = {
  allowClear?: Boolean;
  className?: string;
  disabled?: Boolean;
  error?: string;
  fieldNames?: { label?: string; value?: string };
  label?: string;
  onChange: (value: string) => void;
  onSearch?: (searchValue: string) => void;
  placeholder?: string;
  required?: Boolean;
  searchValue?: string;
  showSearch?: Boolean;
  size?: "small" | "middle" | "large";
  suffixIcon?: React.ReactNode;
  switcherIcon?: React.ReactNode;
  treeDataSimpleMode?: Boolean;
  value: string;
  treeData: Array<TreeItemNested> | Array<TreeItem>;
};

export const TreeSelect: React.FC<TreeSelectProps>;
