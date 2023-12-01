import { equals, props } from "ramda";

import useReorderColumns from "./useReorderColumns";
import useResizableColumns from "./useResizableColumns";

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
  tableOnChangeProps,
}) => {
  const { dragProps } = useReorderColumns({
    isEnabled: isReorderEnabled,
    columns,
    setColumns,
    onColumnUpdate,
    rowSelection,
  });

  const handleSort = sorter => {
    let newSortedInfo = { ...sorter };
    if (
      equals(
        props(["field", "order"], newSortedInfo),
        props(["field", "order"], sortedInfo)
      )
    ) {
      newSortedInfo = {
        field: null,
        order: null,
        column: null,
        columnKey: null,
      };
    }
    setSortedInfo(newSortedInfo);
    onTableChange?.(
      tableOnChangeProps.current?.pagination || {},
      tableOnChangeProps.current?.filters || {},
      { ...newSortedInfo }
    );
  };

  const { columns: computedColumnsData } = useResizableColumns({
    columns,
    setColumns,
    isEnabled: isResizeEnabled,
    onColumnUpdate,
    handleSort,
    sortedInfo,
    onColumnHide,
    tableOnChangeProps,
  });

  return { dragProps, columns: computedColumnsData };
};

export default useColumns;
