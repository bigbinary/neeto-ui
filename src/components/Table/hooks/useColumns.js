import { useMemo } from "react";

import { isPresent, noop } from "neetocist";
import { move } from "ramda";

import SortIcon from "../SortIcon";

const useColumns = ({
  columns,
  setColumns,
  isResizeEnabled,
  isReorderEnabled,
  onColumnUpdate,
  rowSelection,
  sortedInfo,
  setSortedInfo,
  onColumnHide,
  onTableChange,
}) => {
  const isColumnFixed = column => !!column.fixed;

  const dragProps = isReorderEnabled && {
    onDragEnd: (fromIndex, toIndex) => {
      let from = fromIndex;
      let to = toIndex;
      if (rowSelection) {
        from = fromIndex - 1;
        to = toIndex - 1;
      }

      if (isColumnFixed(columns[from]) || isColumnFixed(columns[to])) return;
      const newColumns = move(from, to, columns);
      setColumns(newColumns);
      onColumnUpdate(newColumns);
    },
    nodeSelector: "th",
    handleSelector: ".drag-handler",
    ignoreSelector: ".react-resizable-handle",
  };

  const handleSort = (columnKey, order) => {
    setSortedInfo({ order, columnKey });
    onTableChange(null, null, { field: columnKey, order });
  };

  const handleResize =
    index =>
    (_, { size }) => {
      const nextColumns = [...columns];
      nextColumns[index] = { ...nextColumns[index], width: size.width };
      setColumns(nextColumns);
    };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const computedColumnsData = useMemo(
    () =>
      columns.map((col, index) => {
        const modifiedColumn = {
          ...col,
          onHeaderCell: column => ({
            width: column.width,
            onResize: isResizeEnabled ? handleResize(index) : noop,
            onResizeStop: () =>
              isResizeEnabled ? onColumnUpdate(columns) : noop,
            isSortable: isPresent(col.sorter),
            onSort: handleSort,
            sortedInfo,
            columnKey: col.key,
            columnDescription: col.description,
            onColumnHide,
            isHidable: col.isHidable,
          }),
          sortIcon: SortIcon,
          sortOrder: sortedInfo.columnKey === col.key ? sortedInfo.order : null,
        };

        if (!col.ellipsis) {
          modifiedColumn.ellipsis = true;
        }

        return modifiedColumn;
      }),
    [columns, sortedInfo]
  );

  return { dragProps, columns: computedColumnsData };
};

export default useColumns;
