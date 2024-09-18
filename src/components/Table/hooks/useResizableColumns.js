import { useMemo } from "react";

import { isPresent, noop } from "neetocist";
import { has } from "ramda";

import SortIcon from "../components/SortIcon";
import {
  getColumFixedValue,
  getColumnSortOrder,
  sortFrozenColumns,
} from "../utils";

const useResizableColumns = ({
  columns,
  columnData,
  frozenColumns,
  setColumns,
  isEnabled,
  isAddEnabled,
  onColumnAdd,
  onColumnUpdate,
  onColumnDelete,
  handleSort,
  sortedInfo,
  onColumnHide,
  onColumnFreeze,
  onMoreActionClick,
  tableOnChangeProps,
}) => {
  const handleResize =
    index =>
    (_, { size }) => {
      const nextColumns = [...columns];
      nextColumns[index] = { ...nextColumns[index], width: size.width };
      setColumns(nextColumns);
    };

  const computedColumnsData = useMemo(
    () =>
      columns
        .map((col, index) => {
          const fixed = getColumFixedValue(col, frozenColumns);

          const modifiedColumn = {
            ...col,
            onHeaderCell: column => ({
              width: column.width,
              onResize: isEnabled ? handleResize(index) : noop,
              onResizeStop: () => (isEnabled ? onColumnUpdate(columns) : noop),
              isSortable: isPresent(col.sorter),
              onSort: handleSort,
              sortedInfo,
              onColumnHide,
              onColumnFreeze,
              onMoreActionClick,
              isAddEnabled: isAddEnabled && !fixed,
              onAddColumn: positionOffset =>
                onColumnAdd(index + positionOffset),
              isFixedColumn: !!fixed,
              onColumnDelete,
              isHidable: col.isHidable,
              isDeletable: col.isDeletable,
              moreActions: col.moreActions,
              column: col,
            }),
            sortIcon: SortIcon,
            sortOrder: getColumnSortOrder(col, sortedInfo),
            fixed,
          };

          if (!has("ellipsis", col)) modifiedColumn.ellipsis = true;

          return modifiedColumn;
        })
        .sort(sortFrozenColumns(columnData)),
    [
      columns,
      sortedInfo,
      tableOnChangeProps,
      onColumnFreeze,
      frozenColumns,
      columnData,
    ]
  );

  return { columns: computedColumnsData };
};

export default useResizableColumns;
