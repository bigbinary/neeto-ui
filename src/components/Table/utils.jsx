import React from "react";

import {
  HeaderCell,
  ReorderableHeaderCell,
  ResizableHeaderCell,
} from "./HeaderCell";

export const getHeaderCell = ({ enableColumnResize, enableColumnReorder }) => {
  if (enableColumnReorder && enableColumnResize) {
    return { cell: props => <HeaderCell {...props} /> };
  }

  if (enableColumnResize) {
    return { cell: props => <ResizableHeaderCell {...props} /> };
  }

  if (enableColumnReorder) {
    return { cell: props => <ReorderableHeaderCell {...props} /> };
  }

  return { cell: null };
};
