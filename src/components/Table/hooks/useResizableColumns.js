import { useMemo } from "react";

import { isPresent, noop } from "neetocist";

import SortIcon from "../components/SortIcon";

const useResizableColumns = ({
  columns,
  setColumns,
  isEnabled,
  isAddEnabled,
  onColumnAdd,
  onColumnUpdate,
  onColumnDelete,
  handleSort,
  sortedInfo,
  onColumnHide,
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
      columns.map((col, index) => {
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
            onMoreActionClick,
            isAddEnabled: isAddEnabled && !col.fixed,
            onAddColumn: positionOffset => onColumnAdd(index + positionOffset),
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
        };

        if (!col.ellipsis) {
          modifiedColumn.ellipsis = true;
        }

        return modifiedColumn;
      }),
    [columns, sortedInfo, tableOnChangeProps]
  );

  return { columns: computedColumnsData };
};

export default useResizableColumns;
