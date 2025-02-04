import { isPresent } from "neetocist";
import { __, all, filter, includes, pipe, pluck } from "ramda";

import {
  CellContent,
  HeaderCell,
  ReorderableHeaderCell,
  ResizableHeaderCell,
} from "./components/HeaderCell";
import {
  COLUMN_FIXED_VALUES,
  SELECT_ALL_ROWS_CALLOUT_DESKTOP_HEIGHT,
  SELECT_ALL_ROWS_CALLOUT_MOBILE_HEIGHT,
} from "./constants";

const convertLocationPathnameToId = () => {
  const pathname = decodeURIComponent(window.location.pathname).replace(
    /^\//,
    ""
  );

  let hash = 0;
  for (let i = 0; i < pathname.length; i++) {
    const char = pathname.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash).toString(16).toUpperCase();
};

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

export const sortFrozenColumns = columnData => {
  const originalIndices = new Map(
    columnData.map((col, index) => [col.dataIndex, index])
  );

  return (a, b) => {
    const aFixed = isPresent(a.fixed);
    const bFixed = isPresent(b.fixed);
    const aIndex = originalIndices.get(a.dataIndex);
    const bIndex = originalIndices.get(b.dataIndex);

    if (aFixed !== bFixed) return aFixed ? -1 : 1;

    return aIndex - bIndex;
  };
};

export const getFixedColumns = columnData =>
  pipe(
    filter(({ fixed }) => isPresent(fixed)),
    pluck("dataIndex")
  )(columnData);

export const getColumnSortOrder = (col, sortedInfo) =>
  sortedInfo.field === col.dataIndex || sortedInfo.field === col.key
    ? sortedInfo.order
    : null;

export const getColumFixedValue = (col, frozenColumns) =>
  frozenColumns.indexOf(col.dataIndex) !== -1 ? COLUMN_FIXED_VALUES.LEFT : null;

export const getFrozenColumnsLocalStorageKey = localStorageKeyPrefix => {
  const prefix = isPresent(localStorageKeyPrefix)
    ? localStorageKeyPrefix
    : convertLocationPathnameToId();

  return `NEETOUI-${prefix}-FIXED_COLUMNS`;
};
