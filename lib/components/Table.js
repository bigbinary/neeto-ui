import React, { useCallback, useRef, useState } from "react";
import { Table as AntTable } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "./Typography";

const noop = () => {};

const Table = ({
  allowRowClick = true,
  className = "",
  columnData = [],
  currentPageNumber = 1,
  defaultPageSize = 100,
  handlePageChange = noop,
  loading = false,
  onRowClick,
  onRowSelect,
  rowData = [],
  totalCount = 0,
  selectedRowKeys = [],
  fixedHeight = false,
  paginationProps = {},
  scroll,
  rowSelection,
  ...otherProps
}) => {
  const [containerHeight, setContainerHeight] = useState(null);

  const locale = {
    emptyText: <Typography style="body2">No Data</Typography>,
  };

  let rowSelectionProps = false;
  if (rowSelection) {
    rowSelectionProps = {
      type: "checkbox",
      ...rowSelection,
      onChange: (selectedRowKeys, selectedRows) =>
        onRowSelect && onRowSelect(selectedRowKeys, selectedRows),
      selectedRowKeys,
    };
  }

  const resizeObserver = useRef(
    new ResizeObserver(
      ([
        {
          target,
          contentRect: { height },
        },
      ]) => {
        const { height: headerHeight } = target
          ?.querySelector(".ant-table-thead")
          ?.getBoundingClientRect();
        const { height: paginationHeight } = target
          ?.querySelector(".ant-pagination")
          ?.getBoundingClientRect() || { height: 0 };
        setContainerHeight(
          height - (headerHeight + paginationHeight ? paginationHeight + 32 : 0)
        );
      }
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
      loading={loading}
      rowClassName={classnames(
        "neeto-ui-table--row",
        { "neeto-ui-table--row_hover": allowRowClick },
        [className]
      )}
      rowSelection={rowSelectionProps}
      scroll={{
        x: "max-content",
        y: containerHeight,
        ...scroll,
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
          onClick: (event) => allowRowClick && onRowClick && onRowClick(event, record, rowIndex),
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
  /**
   * Provide external classnames to spinner component.
   */
  className: PropTypes.string,
  /**
   * To make the table fixed height.
   */
  fixedHeight: PropTypes.bool,
  /**
   * Provides the data for the table columns.
   */
  columnData: PropTypes.array.isRequired,
  /**
   * To specify the current page number.
   */
  currentPageNumber: PropTypes.number,
  /**
   * To specify the default page size.
   */
  defaultPageSize: PropTypes.number,
  /**
   * handlePageChange={(page, pageSize) => {}}
   */
  handlePageChange: PropTypes.func,
  /**
   * Show loading state in table.
   */
  loading: PropTypes.bool,
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
  /**
   * Provides the data for the table rows.
   */
  rowData: PropTypes.array.isRequired,
  /**
   * To specify the total number of items.
   */
  totalCount: PropTypes.number,
};

export default Table;
