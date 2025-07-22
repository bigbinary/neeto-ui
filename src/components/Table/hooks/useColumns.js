import { useCallback, useEffect } from "react";

import { append, equals, isEmpty, props, without } from "ramda";

import useLocalStorage from "hooks/useLocalStorage";

import useReorderColumns from "./useReorderColumns";
import useResizableColumns from "./useResizableColumns";

import { getFixedColumns, getFrozenColumnsLocalStorageKey } from "../utils";

const useColumns = ({
  columns,
  columnData,
  setColumns,
  isResizeEnabled,
  isReorderEnabled,
  isAddEnabled,
  isColumnFreezeEnabled,
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
  localStorageKeyPrefix,
}) => {
  const [frozenColumns, setFrozenColumns] = useLocalStorage(
    getFrozenColumnsLocalStorageKey(localStorageKeyPrefix)
  );

  const onColumnFreeze = useCallback(
    (isFixedColumn, { dataIndex }) => {
      const updatedColumns = isFixedColumn
        ? without([dataIndex], frozenColumns)
        : append(dataIndex, frozenColumns);

      setFrozenColumns(updatedColumns);
    },
    [frozenColumns, setFrozenColumns]
  );

  useEffect(() => {
    if (isEmpty(columnData) || frozenColumns) return;

    const fixedCols = getFixedColumns(columnData);
    setFrozenColumns(fixedCols);
  }, [columnData, setFrozenColumns]);

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
    columnData,
    frozenColumns,
    setColumns,
    isEnabled: isResizeEnabled,
    isAddEnabled,
    isColumnFreezeEnabled,
    onColumnAdd,
    onColumnUpdate,
    onColumnDelete,
    handleSort,
    sortedInfo,
    onColumnHide,
    onMoreActionClick,
    tableOnChangeProps,
    onColumnFreeze,
  });

  return { dragProps, columns: computedColumnsData };
};

export default useColumns;
