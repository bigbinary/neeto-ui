import React from "react";

import classNames from "classnames";

import CellContent from "./CellContent";
import HeaderCell from "./HeaderCell";
import ResizableHeaderCell from "./ResizableHeaderCell";

const ReorderableHeaderCell = ({ className, ...props }) => (
  <CellContent {...props} className={classNames(className, "drag-handler")} />
);

export { CellContent, ResizableHeaderCell, ReorderableHeaderCell, HeaderCell };
