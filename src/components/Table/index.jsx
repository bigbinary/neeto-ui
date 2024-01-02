import React, { useCallback, useEffect, useRef, useState } from "react";

import { Table as AntTable, ConfigProvider } from "antd";
import classnames from "classnames";
import { dynamicArray, modifyBy, snakeToCamelCase } from "neetocist";
import { Left, Right, MenuHorizontal } from "neetoicons";
import PropTypes from "prop-types";
import { assoc, isEmpty, mergeLeft } from "ramda";
import ReactDragListView from "react-drag-listview";
import { useHistory } from "react-router-dom";

import { useQueryParams, useTimeout } from "hooks";
import { ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES, buildUrl, noop } from "utils";

import { TABLE_SORT_ORDERS } from "./constants";
import useColumns from "./hooks/useColumns";
import useTableSort from "./hooks/useTableSort";
import { getHeaderCell } from "./utils";

import Button from "../Button";
import Typography from "../Typography";

const TABLE_PAGINATION_HEIGHT = 64;
const TABLE_DEFAULT_HEADER_HEIGHT = 40;
const TABLE_ROW_HEIGHT = 52;

const Table = ({
  allowRowClick = true,
  enableColumnResize = false,
  enableColumnReorder = false,
  enableAddColumn = false,
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
  onColumnUpdate = noop,
  components = {},
  onColumnHide,
  onColumnAdd = noop,
  onColumnDelete,
  onChange,
  ...otherProps
}) => {
  const [containerHeight, setContainerHeight] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(TABLE_DEFAULT_HEADER_HEIGHT);
  const [columns, setColumns] = useState(columnData);
  const [sortedInfo, setSortedInfo] = useState({});

  const isDefaultPageChangeHandler = handlePageChange === noop;

  const history = useHistory();

  const headerRef = useRef();
  const tableOnChangeProps = useRef({});

  const resizeObserver = useRef(
    new ResizeObserver(([entry]) =>
      setContainerHeight(entry.contentRect.height)
    )
  );

  const tableRef = useCallback(
    table => {
      if (!fixedHeight) return;

      const observer = resizeObserver.current;

      if (table !== null) {
        observer.observe(table?.parentNode);
      } else if (observer) {
        observer.disconnect();
      }
    },
    [resizeObserver.current, fixedHeight]
  );

  useTimeout(() => {
    const headerHeight = headerRef.current
      ? headerRef.current.offsetHeight
      : TABLE_DEFAULT_HEADER_HEIGHT;

    setHeaderHeight(headerHeight);
  }, 10);

  const { handleTableChange: handleTableSortChange } = useTableSort();

  const { dragProps, columns: curatedColumnsData } = useColumns({
    isReorderEnabled: enableColumnReorder,
    isResizeEnabled: enableColumnResize,
    isAddEnabled: enableAddColumn,
    onTableChange: onChange,
    columns,
    setColumns,
    onColumnUpdate,
    rowSelection,
    sortedInfo,
    setSortedInfo,
    onColumnHide,
    onColumnAdd,
    onColumnDelete,
    tableOnChangeProps,
    handleTableSortChange,
    isDefaultPageChangeHandler,
  });

  const queryParams = useQueryParams();

  const setSortFromURL = columnData =>
    modifyBy(
      { dataIndex: snakeToCamelCase(queryParams.sort_by ?? "") },
      assoc("sortOrder", TABLE_SORT_ORDERS[queryParams.order_by]),
      columnData
    );

  const sortedColumns = isDefaultPageChangeHandler
    ? setSortFromURL(curatedColumnsData)
    : curatedColumnsData;

  const locale = { emptyText: <Typography style="body2">No Data</Typography> };

  const sortedColumnsWithAlignment = sortedColumns.map(sortedColumn => ({
    ...sortedColumn,
    onHeaderCell: column => ({
      ...sortedColumn.onHeaderCell?.(column),
      "data-text-align": column.align,
    }),
  }));

  const rowSelectionProps = rowSelection
    ? {
        type: "checkbox",
        ...rowSelection,
        onChange: (selectedRowKeys, selectedRows) =>
          onRowSelect && onRowSelect(selectedRowKeys, selectedRows),
        selectedRowKeys,
      }
    : false;

  // eslint-disable-next-line @bigbinary/neeto/no-excess-function-arguments
  const handleTableChange = (pagination, filters, sorter, extras) => {
    setSortedInfo(sorter);
    isDefaultPageChangeHandler && handleTableSortChange(pagination, sorter);
    onChange?.(pagination, filters, sorter, extras);
    tableOnChangeProps.current = { pagination, filters };
  };

  const componentOverrides = {
    ...components,
    header: getHeaderCell({
      enableColumnResize,
      enableColumnReorder,
    }),
  };

  const calculateRowsPerPage = () => {
    const viewportHeight = window.innerHeight;
    const rowsPerPage = Math.floor(
      ((viewportHeight - TABLE_PAGINATION_HEIGHT) / TABLE_ROW_HEIGHT) * 3
    );

    return Math.ceil(rowsPerPage / 10) * 10;
  };

  const pageSize = shouldDynamicallyRenderRowSize
    ? calculateRowsPerPage()
    : paginationProps.pageSize || defaultPageSize;

  const calculateTableContainerHeight = () => {
    const isPaginationVisible =
      otherProps.pagination !== false && rowData.length > pageSize;

    return (
      containerHeight -
      headerHeight -
      (isPaginationVisible ? TABLE_PAGINATION_HEIGHT : 0)
    );
  };

  const calculatePageSizeOptions = () =>
    dynamicArray(5, index => (index + 1) * pageSize);

  const itemRender = (_, type, originalElement) => {
    const commonProps = { size: "small", style: "text" };

    if (type === "prev") return <Button icon={Left} {...commonProps} />;

    if (type === "next") return <Button icon={Right} {...commonProps} />;

    if (type === "jump-prev" || type === "jump-next") {
      return <Button icon={MenuHorizontal} {...commonProps} />;
    }

    return originalElement;
  };

  useEffect(() => {
    const shouldNavigateToLastPage =
      isEmpty(rowData) && !loading && currentPageNumber !== 1;

    if (!shouldNavigateToLastPage) return;

    const lastPage = Math.ceil(totalCount / pageSize);
    const page = Math.max(1, lastPage);
    const pathname = window.location.pathname;

    isDefaultPageChangeHandler
      ? history.push(buildUrl(pathname, mergeLeft({ page }, queryParams)))
      : handlePageChange(page, pageSize);
  }, [rowData]);

  useEffect(() => setColumns(columnData), [columnData]);

  const neetoUIFontBold = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--neeto-ui-font-bold"
    ),
    10
  );

  const renderTable = () => (
    <ConfigProvider
      theme={{
        token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
        components: {
          Pagination: {
            itemActiveBg: "rgb(var(--neeto-ui-primary-500))",
            itemActiveBgDisabled: "rgb(var(--neeto-ui-gray-100))",
            itemActiveColorDisabled: "rgb(var(--neeto-ui-gray-300))",
            itemBg: "rgb(var(--neeto-ui-white))",
            itemInputBg: "rgb(var(--neeto-ui-white))",
            itemLinkBg: "rgb(var(--neeto-ui-white))",

            // Global overrides
            colorBgContainer: "rgb(var(--neeto-ui-primary-500))",
            colorPrimary: "rgb(var(--neeto-ui-white))",
            colorPrimaryHover: "rgb(var(--neeto-ui-white))",
            colorBgTextHover: "rgb(var(--neeto-ui-gray-200))",
            borderRadius: 6,
          },
          Table: {
            headerBorderRadius: 0,
            bodySortBg: "rgb(var(--neeto-ui-gray-100))",
            borderColor: "rgb(var(--neeto-ui-gray-300))",
            expandIconBg: "rgb(var(--neeto-ui-white))",
            filterDropdownBg: "rgb(var(--neeto-ui-white))",
            filterDropdownMenuBg: "rgb(var(--neeto-ui-white))",
            fixedHeaderSortActiveBg: "rgb(var(--neeto-ui-gray-200))",
            footerBg: "rgb(var(--neeto-ui-gray-100))",
            footerColor: "rgb(var(--neeto-ui-gray-800))",
            headerBg: "rgb(var(--neeto-ui-gray-100))",
            headerColor: "rgb(var(--neeto-ui-gray-700))",
            headerFilterHoverBg: "rgb(var(--neeto-ui-gray-100))",
            headerSortActiveBg: "rgb(var(--neeto-ui-gray-200))",
            headerSortHoverBg: "rgb(var(--neeto-ui-gray-200))",
            headerSplitColor: "rgb(var(--neeto-ui-gray-200))",
            rowExpandedBg: "rgb(var(--neeto-ui-gray-200))",
            rowHoverBg: "rgb(var(--neeto-ui-gray-100))",
            rowSelectedBg: "rgb(var(--neeto-ui-primary-100))",
            rowSelectedHoverBg: "rgb(var(--neeto-ui-pastel-purple))",
            stickyScrollBarBg: "rgb(var(--neeto-ui-primary-100))",
            cellPaddingBlock: 10,

            // Global overrides
            colorPrimary: "rgb(var(--neeto-ui-primary-500))",
            fontSize: 14,
            fontWeightStrong: neetoUIFontBold,
            paddingContentVerticalLG: 10,
          },
        },
      }}
    >
      <AntTable
        {...{ bordered, loading, locale }}
        columns={sortedColumnsWithAlignment}
        components={componentOverrides}
        dataSource={rowData}
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
          defaultPageSize: pageSize,
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
        onChange={handleTableChange}
        onHeaderRow={() => ({
          ref: headerRef,
          className: classnames("neeto-ui-table__header", {
            "neeto-ui-table-reorderable": enableColumnReorder,
          }),
          id: "neeto-ui-table__header",
        })}
        onRow={(record, rowIndex) => ({
          onClick: event =>
            allowRowClick && onRowClick && onRowClick(event, record, rowIndex),
        })}
        {...otherProps}
      />
    </ConfigProvider>
  );

  return enableColumnReorder ? (
    <ReactDragListView.DragColumn {...dragProps}>
      {renderTable()}
    </ReactDragListView.DragColumn>
  ) : (
    renderTable()
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
   * Handles page change events. Accepts a callback with `page` and `pageSize` as parameters. If not provided, component will handle page query parameters.
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
   * Enables resizing of columns. Accepts boolean values.
   */
  enableColumnResize: PropTypes.bool,
  /**
   * Enables reordering of columns. Accepts boolean values.
   */
  enableColumnReorder: PropTypes.bool,
  /**
   * Enables adding of columns to the left or right of the current column. Accepts boolean values.
   */
  enableAddColumn: PropTypes.bool,
  /**
   * Handles column update events. Accepts a callback with `columns` as parameters.
   *
   * `onColumnUpdate={(columns) => {}}`
   */
  onColumnUpdate: PropTypes.func,
  /**
   * Function that gets called when a new column is added. Gets called with the 'position' to add the new column to as parameter.
   *
   * `onColumnAdd={(position) => {}}`
   */
  onColumnAdd: PropTypes.func,
  /**
   * Function that gets called when a custom field column is deleted. Gets called with the 'id' of the column getting deleted as parameter.
   *
   * `onColumnDelete={(key) => {}}`
   */
  onColumnDelete: PropTypes.func,
  /**
   * Additional props for row selection. Refer [row selection docs](https://ant.design/components/table/#rowSelection) from AntD Table
   * Make sure to pass `id` in `rowData` for this to work.
   */
  rowSelection: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default Table;
