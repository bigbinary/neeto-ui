import React, { useCallback, useRef } from "react";
import { Table as AntTable } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "./Typography";

const noop = () => {};

const TABLE_PAGINATION_HEIGHT = 64;
const TABLE_STICKY_HEADER_HEIGHT = 40;

const Table = ({
  allowRowClick = true,
  className,
  columnData,
  currentPageNumber = 1,
  defaultPageSize = 100,
  handlePageChange = noop,
  isLoading,
  onRowClick,
  onRowSelect,
  rowData,
  totalCount = 0,
  selectedRowKeys,
  fixedHeight = false,
  paginationProps = {},
  ...otherProps
}) => {
  const [containerHeight, setContainerHeight] = React.useState(null);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) =>
      onRowSelect && onRowSelect(selectedRowKeys, selectedRows),
    selectedRowKeys,
  };

  const locale = {
    emptyText: <Typography style="body2">No Data</Typography>,
  };

  const isPanginationVisible = rowData.length > defaultPageSize;
  const calculateTableContainerHeight = () =>
    containerHeight -
    TABLE_STICKY_HEADER_HEIGHT -
    (isPanginationVisible ? TABLE_PAGINATION_HEIGHT : 0);

  const resizeObserver = useRef(
    new ResizeObserver(
      ([
        {
          contentRect: { height },
        },
      ]) => setContainerHeight(height)
    )
  );

  const tableRef = useCallback(
    (table) => {
      if (fixedHeight) {
        if (table !== null) {
          resizeObserver.current.observe(table?.parentNode);
        } else {
          if (resizeObserver.current) resizeObserver.current.disconnect();
        }
      }
    },
    [resizeObserver.current, fixedHeight]
  );

  return (
    <AntTable
      ref={tableRef}
      columns={columnData}
      dataSource={rowData}
      loading={isLoading}
      rowClassName={classnames(
        "neeto-ui-table--row",
        { "neeto-ui-table--row_hover": allowRowClick },
        [className]
      )}
      rowSelection={{ type: "checkbox", ...rowSelection }}
      scroll={{
        x: "max-content",
        y: calculateTableContainerHeight(),
      }}
      showSorterTooltip={false}
      pagination={{
        ...paginationProps,
        total: totalCount ?? 0,
        current: currentPageNumber ?? 1,
        defaultPageSize: defaultPageSize ?? 100,
        onChange: handlePageChange,
        hideOnSinglePage: true,
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => onRowClick && onRowClick(event, record, rowIndex),
        };
      }}
      locale={locale}
      rowKey={"id"}
      {...otherProps}
    />
  );
};

Table.propTypes = {
  /**
   * Adds cursor: pointer to each table row.
   */
  allowRowClick: PropTypes.bool,
  className: PropTypes.string,
  /**
   * To make the table fixed height.
   */
  fixedHeight: PropTypes.bool,
  columnData: PropTypes.array,
  currentPageNumber: PropTypes.number,
  defaultPageSize: PropTypes.number,
  /**
   * handlePageChange={(page, pageSize) => {}}
   */
  handlePageChange: PropTypes.func,
  /**
   * Show loading state in table.
   */
  isLoading: PropTypes.bool,
  /**
   * Callback trigger when a row is clicked.
   *  onRowClick={(event, record, rowIndex) => {}}
   */
  onRowClick: PropTypes.func,
  /**
   * Callback trigger when a row is selected.
   *  onRowSelect={(selectedRowKeys, selectedRows) => {}}
   */
  onRowSelect: PropTypes.func,
  /**
   * Keys of the rows that are selected.
   */
  selectedRowKeys: PropTypes.array,
  /**
   * Options to be passed to table pagination.
   */
  paginationProps: PropTypes.object,
  rowData: PropTypes.array,
  totalCount: PropTypes.number,
};

export default Table;
