import React, { useCallback, useRef, useState } from "react";

import { Table as AntTable } from "antd";
import classnames from "classnames";
import { Left, Right, MenuHorizontal } from "neetoicons";
import PropTypes from "prop-types";

import { useTimeout } from "hooks";
import { noop } from "utils";

import Button from "./Button";
import Typography from "./Typography";

const TABLE_PAGINATION_HEIGHT = 64;
const TABLE_DEFAULT_HEADER_HEIGHT = 40;
const TABLE_ROW_HEIGHT = 52;

const Table = ({
  allowRowClick = true,
  className = "",
  columnData = [],
  currentPageNumber = 1,
  defaultPageSize = 30,
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
  shouldDynamicallyRenderRowSize = false,
  bordered = true,
  ...otherProps
}) => {
  const [containerHeight, setContainerHeight] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(TABLE_DEFAULT_HEADER_HEIGHT);

  const headerRef = useRef();

  const resizeObserver = useRef(
    new ResizeObserver(
      ([
        {
          contentRect: { height },
        },
      ]) => setContainerHeight(height)
    )
  );

  useTimeout(() => {
    const headerHeight = headerRef.current
      ? headerRef.current.offsetHeight
      : TABLE_DEFAULT_HEADER_HEIGHT;
    setHeaderHeight(headerHeight);
  }, 0);

  const tableRef = useCallback(
    table => {
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

  const locale = {
    emptyText: <Typography style="body2">No Data</Typography>,
  };

  const isPaginationVisible = rowData.length > defaultPageSize;

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

  const calculateTableContainerHeight = () =>
    containerHeight -
    headerHeight -
    (isPaginationVisible ? TABLE_PAGINATION_HEIGHT : 0);

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <Button className="" icon={Left} style="text" />;
    }

    if (type === "next") {
      return <Button className="" icon={Right} style="text" />;
    }

    if (type === "jump-prev") {
      return <Button className="" icon={MenuHorizontal} style="text" />;
    }

    if (type === "jump-next") {
      return <Button className="" icon={MenuHorizontal} style="text" />;
    }

    return originalElement;
  };

  const calculateRowsPerPage = () => {
    const viewportHeight = window.innerHeight;
    const rowsPerPage = Math.floor(
      ((viewportHeight - TABLE_PAGINATION_HEIGHT) / TABLE_ROW_HEIGHT) * 3
    );

    return Math.ceil(rowsPerPage / 10) * 10;
  };

  const calculatePageSizeOptions = () => {
    const rowsPerPage = shouldDynamicallyRenderRowSize
      ? calculateRowsPerPage()
      : defaultPageSize;

    const pageSizeOptions = [...Array(5).keys()].map(
      i => (i + 1) * rowsPerPage
    );

    return pageSizeOptions;
  };

  return (
    <AntTable
      bordered={bordered}
      columns={columnData}
      dataSource={rowData}
      loading={loading}
      locale={locale}
      ref={tableRef}
      rowKey="id"
      rowSelection={rowSelectionProps}
      showSorterTooltip={false}
      pagination={{
        hideOnSinglePage: true,
        ...paginationProps,
        showSizeChanger: false,
        total: totalCount ?? 0,
        current: currentPageNumber,
        defaultPageSize: shouldDynamicallyRenderRowSize
          ? calculateRowsPerPage()
          : defaultPageSize,
        pageSizeOptions: calculatePageSizeOptions(),
        onChange: handlePageChange,
        itemRender,
      }}
      rowClassName={classnames(
        "neeto-ui-table--row",
        { "neeto-ui-table--row_hover": allowRowClick },
        [className]
      )}
      scroll={{
        x: "max-content",
        y: calculateTableContainerHeight(),
        ...scroll,
      }}
      onHeaderRow={() => ({
        ref: headerRef,
        className: "neeto-ui-table__header",
        id: "neeto-ui-table__header",
      })}
      onRow={(record, rowIndex) => ({
        onClick: event =>
          allowRowClick && onRowClick && onRowClick(event, record, rowIndex),
      })}
      {...otherProps}
    />
  );
};

Table.propTypes = {
  /**
   * Enables row click event. Accepts boolean values.
   */
  allowRowClick: PropTypes.bool,
  /**
   * Dynamically renders the number of rows based on the viewport height.
   */
  shouldDynamicallyRenderRowSize: PropTypes.bool,
  /**
   * Custom classnames for each row.
   */
  className: PropTypes.string,
  /**
   * To make the Table fixed height.
   */
  fixedHeight: PropTypes.bool,
  /**
   * Columns of the Table. Accepts an array of [column definitions](#column_data).
   */
  columnData: PropTypes.array.isRequired,
  /**
   * Active page number.
   */
  currentPageNumber: PropTypes.number,
  /**
   * Sets the number of rows in a page.
   */
  defaultPageSize: PropTypes.number,
  /**
   * Handles page change events. Accepts a callback with `page` and `pageSize` as parameters.
   *
   * `handlePageChange={(page, pageSize) => {}}`
   */
  handlePageChange: PropTypes.func,
  /**
   * Show loading state in Table.
   */
  loading: PropTypes.bool,
  /**
   * Handles click event on each row. Accepts a callback with `event`, `record`, and `index` as parameters.
   *
   * `onRowClick={(event, record, rowIndex) => {}}`
   */
  onRowClick: PropTypes.func,
  /**
   * Handles select event on each row. Accepts a callback with `selectedRowKeys` and `selectedRows` as parameters.
   * Make sure to pass `id` in `rowData` for this to work.
   * `onRowSelect={(selectedRowKeys, selectedRows) => {}}`
   */
  onRowSelect: PropTypes.func,
  /**
   * Keys of the rows that are selected.
   */
  selectedRowKeys: PropTypes.array,
  /**
   * Additional props for pagination. Refer [pagination docs](https://ant.design/components/pagination/#API) from AntD Table.
   */
  paginationProps: PropTypes.object,
  /**
   * Data for rows to be displayed. Accepts an array of JavaScript Objects.
   */
  rowData: PropTypes.array.isRequired,
  /**
   * Total number of data items.
   */
  totalCount: PropTypes.number,

  /**
   * Additional props for row selection. Refer [row selection docs](https://ant.design/components/table/#rowSelection) from AntD Table
   * Make sure to pass `id` in `rowData` for this to work.
   */
  rowSelection: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default Table;
