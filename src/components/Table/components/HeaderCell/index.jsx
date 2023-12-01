import React from "react";

import CellContent from "./CellContent";
import HeaderCell from "./HeaderCell";
import ResizableHeaderCell from "./ResizableHeaderCell";

const ReorderableHeaderCell = props => (
  <CellContent {...props} className="drag-handler" />
);

export { CellContent, ResizableHeaderCell, ReorderableHeaderCell, HeaderCell };
