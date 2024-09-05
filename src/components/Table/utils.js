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
