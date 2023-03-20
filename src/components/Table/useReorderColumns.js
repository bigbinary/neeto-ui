import React, { useMemo } from "react";
import { move } from "ramda";

const useReorderColumns = ({
  isEnabled,
  columns,
  setColumns,
  onColumnUpdate,
  rowSelection,
}) => {
  if (!isEnabled) return { dragProps: {}, columns };

  const modifiedColumns = useMemo(
    () =>
      columns.map((col) => ({
        ...col,
        title: () => {
          let { title } = col;
          if (typeof col.title === "function") {
            title = title();
          }
          return <span className="dragHandler">{title}</span>;
        },
      })),
    [columns]
  );

  const isColumnFixed = (column) => !!column.fixed;

  const dragProps = {
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
    handleSelector: ".dragHandler",
    ignoreSelector: "react-resizable-handle",
  };

  return { dragProps, columns: modifiedColumns };
};

export default useReorderColumns;
