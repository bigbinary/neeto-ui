import { useMemo } from "react";

const useResizableColumns = ({
  columns,
  setColumns,
  isEnabled,
  onColumnUpdate,
}) => {
  if (!isEnabled) {
    return { components: {}, columns };
  }

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
            onResize: handleResize(index),
            onResizeStop: () => onColumnUpdate(columns),
          }),
        };

        if (!col.ellipsis) {
          modifiedColumn.ellipsis = true;
        }

        return modifiedColumn;
      }),
    [columns]
  );

  return { columns: computedColumnsData };
};

export default useResizableColumns;
