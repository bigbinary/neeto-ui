import { isPresent } from "neetocist";
import { __, all, includes } from "ramda";

import {
  CellContent,
  HeaderCell,
  ReorderableHeaderCell,
  ResizableHeaderCell,
} from "./components/HeaderCell";
import {
  SELECT_ALL_ROWS_CALLOUT_DESKTOP_HEIGHT,
  SELECT_ALL_ROWS_CALLOUT_MOBILE_HEIGHT,
} from "./constants";

export const getHeaderCell = ({ enableColumnResize, enableColumnReorder }) => {
  if (enableColumnReorder && enableColumnResize) return { cell: HeaderCell };

  if (enableColumnResize) return { cell: ResizableHeaderCell };

  if (enableColumnReorder) return { cell: ReorderableHeaderCell };

  return { cell: CellContent };
};

export const isIncludedIn = (array1, array2) =>
  all(includes(__, array1), array2);

export const getSelectAllRowsCalloutHeight = () =>
  window.innerWidth < 768
    ? SELECT_ALL_ROWS_CALLOUT_MOBILE_HEIGHT
    : SELECT_ALL_ROWS_CALLOUT_DESKTOP_HEIGHT;

export const sortFrozenColumns = (columns, columnData) => {
  const originalIndices = new Map(
    columnData.map((col, index) => [col.dataIndex, index])
  );

  return columns.sort((a, b) => {
    const aFixed = isPresent(a.fixed);
    const bFixed = isPresent(b.fixed);
    const aIndex = originalIndices.get(a.dataIndex);
    const bIndex = originalIndices.get(b.dataIndex);

    if (aFixed !== bFixed) return aFixed ? -1 : 1;

    return aIndex - bIndex;
  });
};
