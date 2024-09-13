import { useMemo } from "react";

import { isPresent, noop } from "neetocist";
import { has } from "ramda";

import SortIcon from "../components/SortIcon";
import { COLUMN_FIXED_VALUES } from "../constants";
import { sortFrozenColumns } from "../utils";

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
          const fixed =
            frozenColumns.indexOf(col.dataIndex) !== -1
              ? COLUMN_FIXED_VALUES.LEFT
              : null;

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
            sortOrder:
              sortedInfo.field === col.dataIndex || sortedInfo.field === col.key
                ? sortedInfo.order
                : null,
            fixed,
          };

          if (!has("ellipsis", col)) {
            modifiedColumn.ellipsis = true;
          }

          return modifiedColumn;
        })
        .sort(sortFrozenColumns(columnData)),
    [columns, sortedInfo, tableOnChangeProps, onColumnFreeze, frozenColumns]
  );

  return { columns: computedColumnsData };
};

export default useResizableColumns;
