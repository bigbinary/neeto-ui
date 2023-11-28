import { useMemo } from "react";

import { isPresent, noop } from "neetocist";
import { equals, move, props } from "ramda";

import SortIcon from "../components/SortIcon";

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
      newSortedInfo
    );
  };

  const handleResize =
    index =>
    (_, { size }) => {
      const nextColumns = [...columns];
      nextColumns[index] = { ...nextColumns[index], width: size.width };
      setColumns(nextColumns);
    };

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
            onSort: handleSort,
            sortedInfo,
            onColumnHide,
            isHidable: col.isHidable,
            column: col,
          }),
          sortIcon: SortIcon,
          sortOrder:
            sortedInfo.field === col.dataIndex ? sortedInfo.order : null,
        };

        if (!col.ellipsis) {
          modifiedColumn.ellipsis = true;
        }

        return modifiedColumn;
      }),
    [columns, sortedInfo, tableOnChangeProps]
  );

  return { dragProps, columns: computedColumnsData };
};

export default useColumns;
