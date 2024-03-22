import { __, all, includes } from "ramda";

import {
  CellContent,
  HeaderCell,
  ReorderableHeaderCell,
  ResizableHeaderCell,
} from "./components/HeaderCell";

export const getHeaderCell = ({ enableColumnResize, enableColumnReorder }) => {
  if (enableColumnReorder && enableColumnResize) return { cell: HeaderCell };

  if (enableColumnResize) return { cell: ResizableHeaderCell };

  if (enableColumnReorder) return { cell: ReorderableHeaderCell };

  return { cell: CellContent };
};

export const isIncludedIn = (array1, array2) =>
  all(includes(__, array1), array2);
