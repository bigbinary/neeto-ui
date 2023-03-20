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

  const dragProps = {
    onDragEnd: (fromIndex, toIndex) => {
      let from = fromIndex;
      let to = toIndex;
      if (rowSelection) {
        from = fromIndex - 1;
        to = toIndex - 1;
      }
      if (columns[from].isActionColumn || columns[to].isActionColumn) return;
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
