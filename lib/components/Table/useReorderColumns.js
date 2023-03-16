import React, { useMemo } from "react";

const useReorderColumns = ({ isEnabled, columns, setColumns }) => {
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
    onDragEnd(fromIndex, toIndex) {
      const newColumns = [...columns];
      const item = newColumns.splice(fromIndex, 1)[0];
      newColumns.splice(toIndex, 0, item);
      setColumns(newColumns);
    },
    nodeSelector: "th",
    handleSelector: ".dragHandler",
    ignoreSelector: "react-resizable-handle",
  };

  return { dragProps, columns: modifiedColumns };
};

export default useReorderColumns;
