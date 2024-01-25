import { equals, props } from "ramda";

import useReorderColumns from "./useReorderColumns";
import useResizableColumns from "./useResizableColumns";

const useColumns = ({
  columns,
  setColumns,
  isResizeEnabled,
  isReorderEnabled,
  isAddEnabled,
  onColumnAdd,
  onColumnUpdate,
  onColumnDelete,
  rowSelection,
  sortedInfo,
  setSortedInfo,
  onColumnHide,
  onMoreActionClick,
  onTableChange,
  tableOnChangeProps,
  handleTableSortChange,
  isDefaultPageChangeHandler,
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

    isDefaultPageChangeHandler &&
      handleTableSortChange(
        tableOnChangeProps.current?.pagination || {},
        newSortedInfo
      );
  };

  const { columns: computedColumnsData } = useResizableColumns({
    columns,
    setColumns,
    isEnabled: isResizeEnabled,
    isAddEnabled,
    onColumnAdd,
    onColumnUpdate,
    onColumnDelete,
    handleSort,
    sortedInfo,
    onColumnHide,
    onMoreActionClick,
    tableOnChangeProps,
  });

  return { dragProps, columns: computedColumnsData };
};

export default useColumns;
