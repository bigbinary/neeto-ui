import { isPresent, snakeToCamelCase, camelToSnakeCase } from "neetocist";
import { __, all, equals, filter, includes, pipe, pluck } from "ramda";

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
  TABLE_SORT_ORDERS,
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
  equals(sortedInfo.field, col.dataIndex) || equals(sortedInfo.field, col.key)
    ? sortedInfo.order
    : null;

export const getColumFixedValue = (col, frozenColumns) =>
  frozenColumns?.indexOf(col.dataIndex) !== -1
    ? COLUMN_FIXED_VALUES.LEFT
    : null;

export const getFrozenColumnsLocalStorageKey = localStorageKeyPrefix => {
  const prefix = isPresent(localStorageKeyPrefix)
    ? localStorageKeyPrefix
    : convertLocationPathnameToId();

  return `NEETOUI-${prefix}-FIXED_COLUMNS`;
};

export const getSortInfoFromQueryParams = queryParams => {
  const sortedInfo = {};
  if (
    isPresent(queryParams.sort_by) &&
    isPresent(queryParams.order_by) &&
    isPresent(TABLE_SORT_ORDERS[queryParams.order_by])
  ) {
    sortedInfo.field = queryParams.sort_by.includes("+")
      ? queryParams.sort_by.split("+").map(snakeToCamelCase)
      : snakeToCamelCase(queryParams.sort_by);
    sortedInfo.order = TABLE_SORT_ORDERS[queryParams.order_by];
  }

  return sortedInfo;
};

export const getSortField = field => {
  if (Array.isArray(field)) {
    return field.map(camelToSnakeCase).join("+");
  }

  return camelToSnakeCase(field);
};
