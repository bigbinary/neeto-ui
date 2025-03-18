import { move } from "ramda";

const useReorderColumns = ({
  isEnabled,
  columns,
  setColumns,
  onColumnUpdate,
  rowSelection,
}) => {
  if (!isEnabled) return { dragProps: {}, columns };

  const isColumnFixed = column => !!column.fixed;

  const dragProps = {
    onDragEnd: (fromIndex, toIndex) => {
      let from = fromIndex;
      let to = toIndex;
      if (rowSelection) {
        from = fromIndex - 1;
        to = toIndex - 1;
      }

      if (!columns[from] || !columns[to]) return;

      if (isColumnFixed(columns[from]) || isColumnFixed(columns[to])) return;

      const newColumns = move(from, to, columns);
      setColumns(newColumns);
      onColumnUpdate(newColumns);
    },
    nodeSelector:
      "th:not(.ant-table-cell-fix-left):not(.ant-table-cell-scrollbar)",
    handleSelector: ".drag-handler",
    ignoreSelector: ".react-resizable-handle",
  };

  return { dragProps, columns };
};

export default useReorderColumns;
