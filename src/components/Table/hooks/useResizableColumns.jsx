import React, { useMemo } from "react";

import { isPresent } from "neetocist";
import { Settings } from "neetoicons";

const useResizableColumns = ({
  columns,
  setColumns,
  isEnabled,
  onColumnUpdate,
}) => {
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
            onResize: isEnabled ? handleResize(index) : null,
            onResizeStop: isEnabled ? () => onColumnUpdate(columns) : null,
            isSortable: isPresent(col.sorter),
          }),
          sortIcon: () => <Settings />,
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
