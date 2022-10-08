import React from "react";
import {
  ButtonProps,
  CheckboxProps,
  DropdownProps,
  InputProps,
  SelectProps,
  TagProps,
} from "./index";

interface Option {
  label: string;
  value: string;
}

export interface TagsProps {
  label?: string;
  allTags?: Option[];
  selectedTags?: Option[];
  onTagSelect?: (e: any) => void;
  onTagCreate?: (e: any) => void;
  onTagDelete?: (e: any) => void;
  tagProps?: TagProps;
  selectProps?: SelectProps;
  buttonProps?: ButtonProps;
}

export interface ColumnsProps {
  actionBlock?: React.ReactNode;
  checkboxProps?: CheckboxProps;
  columnData: Object[];
  dropdownProps?: DropdownProps,
  fixedColumns?: String[];
  isSearchable?: boolean;
  localStorageKey: string;
  noColumnMessage?: string;
  searchProps?: InputProps;
  setColumns: (columns: any[]) => void;
}

export const Tags: React.FC<TagsProps>;
