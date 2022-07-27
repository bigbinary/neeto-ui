import React from "react";
import { ButtonProps, SelectProps, TagProps } from "./index";

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

export const Tags: React.FC<TagsProps>;
