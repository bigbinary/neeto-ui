import React, { useMemo } from "react";

import { isPresent, noop } from "neetocist";
import { DownArrow, UpArrow } from "neetoicons";
import { move } from "ramda";

const useColumns = ({
  columns,
  setColumns,
  isResizeEnabled,
  isReorderEnabled,
  onColumnUpdate,
  rowSelection,
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
            description: col.description,
          }),
          sortIcon: ({ sortOrder }) => {
            if (sortOrder === "ascend") return <UpArrow size={14} />;

            if (sortOrder === "descend") return <DownArrow size={14} />;

            return null;
          },
        };

        if (!col.ellipsis) {
          modifiedColumn.ellipsis = true;
        }

        return modifiedColumn;
      }),
    [columns]
  );

  return { dragProps, columns: computedColumnsData };
};

export default useColumns;
