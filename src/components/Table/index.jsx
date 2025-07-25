import React, { useEffect, useMemo, useRef, useState } from "react";

import { Table as AntTable, ConfigProvider } from "antd";
import classnames from "classnames";
import {
  dynamicArray,
  isNotEmpty,
  modifyBy,
  snakeToCamelCase,
} from "neetocist";
import { Left, Right, MenuHorizontal } from "neetoicons";
import PropTypes from "prop-types";
import { assoc, isEmpty, mergeLeft, pluck } from "ramda";
import ReactDragListView from "react-drag-listview";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { ANTD_LOCALE } from "components/constants";
import { useQueryParams, useTimeout } from "hooks";
import { ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES, buildUrl, noop } from "utils";

import AllRowsSelectedCallout from "./components/AllRowsSelectedCallout";
import SelectAllRowsCallout from "./components/SelectAllRowsCallout";
import { TABLE_SORT_ORDERS, TABLE_DEFAULT_HEADER_HEIGHT } from "./constants";
import useColumns from "./hooks/useColumns";
import { useScroll } from "./hooks/useScroll";
import useTableSort from "./hooks/useTableSort";
import { useVirtualScroll } from "./hooks/useVirtualScroll";
import { getHeaderCell, isIncludedIn, calculateRowsPerPage } from "./utils";

import Button from "../Button";
import Spinner from "../Spinner";
import Typography from "../Typography";

const Table = ({
  allowRowClick = true,
  enableColumnResize = true,
  enableColumnReorder = false,
  enableColumnFreeze = true,
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
  selectedRowKeys: initialSelectedRowKeys = [],
  fixedHeight = false,
  paginationProps = {},
  rowKey = "id",
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
  onMoreActionClick,
  bulkSelectAllRowsProps,
  localStorageKeyPrefix,
  virtual = false,
  ...otherProps
}) => {
  const { i18n } = useTranslation();
  const [headerHeight, setHeaderHeight] = useState(TABLE_DEFAULT_HEADER_HEIGHT);
  const [columns, setColumns] = useState(columnData);
  const [bulkSelectedAllRows, setBulkSelectedAllRows] = useState(false);
  const [columnChanges, setColumnChanges] = useState({});
  const {
    handleTableChange: handleTableSortChange,
    sortedInfo,
    setSortedInfo,
  } = useTableSort();

  const { setBulkSelectedAllRows: handleSetBulkSelectedAllRows } =
    bulkSelectAllRowsProps ?? {};

  const isDefaultPageChangeHandler = handlePageChange === noop;

  const history = useHistory();

  const headerRef = useRef();
  const tableOnChangeProps = useRef({});

  useTimeout(() => {
    const headerHeight = headerRef.current
      ? headerRef.current.offsetHeight
      : TABLE_DEFAULT_HEADER_HEIGHT;

    setHeaderHeight(headerHeight);
  }, 10);

  const handleColumnUpdateWithChanges = updatedColumns => {
    const newChanges = {};

    updatedColumns.forEach(col => {
      const originalCol = columnData.find(c => c.dataIndex === col.dataIndex);
      const changes = {};

      if (col.width && col.width !== originalCol?.width) {
        changes.width = col.width;
      }

      if (Object.keys(changes).length > 0) {
        newChanges[col.dataIndex] = changes;
      }
    });

    setColumnChanges(prev => ({ ...prev, ...newChanges }));
    onColumnUpdate(updatedColumns);
  };

  const { dragProps, columns: curatedColumnsData } = useColumns({
    isReorderEnabled: enableColumnReorder,
    isResizeEnabled: enableColumnResize,
    isAddEnabled: enableAddColumn,
    isColumnFreezeEnabled: enableColumnFreeze,
    onTableChange: onChange,
    columns,
    columnData,
    setColumns,
    onColumnUpdate: handleColumnUpdateWithChanges,
    rowSelection,
    sortedInfo,
    setSortedInfo,
    onColumnHide,
    onMoreActionClick,
    onColumnAdd,
    onColumnDelete,
    tableOnChangeProps,
    handleTableSortChange,
    isDefaultPageChangeHandler,
    localStorageKeyPrefix,
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

  const selectedRowKeys = bulkSelectedAllRows
    ? pluck(rowKey, rowData)
    : initialSelectedRowKeys;

  const showBulkSelectionCallout = useMemo(
    () =>
      isIncludedIn(selectedRowKeys, pluck(rowKey, rowData)) &&
      selectedRowKeys.length !== totalCount &&
      !bulkSelectedAllRows,
    [selectedRowKeys, rowKey, rowData, totalCount, bulkSelectedAllRows]
  );

  const shouldShowSelectAllRowsCallout =
    bulkSelectAllRowsProps && showBulkSelectionCallout;

  const shouldShowAllRowsSelectedCallout =
    bulkSelectAllRowsProps && bulkSelectedAllRows;

  const pageSize = shouldDynamicallyRenderRowSize
    ? calculateRowsPerPage()
    : paginationProps.pageSize || defaultPageSize;

  const { tableRef, tableContainerRef, handleScroll, calculatedScroll } = (
    virtual ? useVirtualScroll : useScroll
  )({
    fixedHeight,
    enableColumnReorder,
    loading,
    otherProps,
    rowData,
    pageSize,
    shouldShowSelectAllRowsCallout,
    shouldShowAllRowsSelectedCallout,
    headerHeight,
  });

  const handleRowChange = (selectedRowKeys, selectedRows) => {
    const tableWrapper = document.querySelector(
      '[data-testid="table-wrapper"]'
    );

    if (selectedRowKeys.length !== defaultPageSize) {
      setBulkSelectedAllRows(false);
      handleSetBulkSelectedAllRows?.(false);
      tableWrapper?.classList.remove("neeto-ui-overflow-hidden");
    } else {
      tableWrapper?.classList.add("neeto-ui-overflow-hidden");
    }
    onRowSelect?.(selectedRowKeys, selectedRows);
  };

  const rowSelectionProps = rowSelection
    ? {
        type: "checkbox",
        preserveSelectedRowKeys: true,
        columnWidth: 48,
        ...rowSelection,
        onChange: handleRowChange,
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
    if (isNotEmpty(initialSelectedRowKeys)) return;

    setBulkSelectedAllRows(false);
    handleSetBulkSelectedAllRows?.(false);
  }, [handleSetBulkSelectedAllRows, initialSelectedRowKeys]);

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

  useEffect(() => {
    const mergedColumns = columnData.map(col => ({
      ...col,
      ...columnChanges[col.dataIndex], // Apply any column changes
    }));
    setColumns(mergedColumns);
  }, [columnData, columnChanges]);

  const neetoUIFontBold = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--neeto-ui-font-bold"
    ),
    10
  );

  const renderTable = () => (
    <ConfigProvider
      locale={ANTD_LOCALE[i18n.language || "en"]}
      theme={{
        token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
        components: {
          Pagination: {
            itemActiveBg: "rgb(var(--neeto-ui-primary-500))",
            itemActiveBgDisabled: "rgb(var(--neeto-ui-gray-50))",
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
            bodySortBg: "rgb(var(--neeto-ui-gray-50))",
            borderColor: "rgb(var(--neeto-ui-gray-200))",
            expandIconBg: "rgb(var(--neeto-ui-white))",
            filterDropdownBg: "rgb(var(--neeto-ui-white))",
            filterDropdownMenuBg: "rgb(var(--neeto-ui-white))",
            fixedHeaderSortActiveBg: "rgb(var(--neeto-ui-gray-200))",
            footerBg: "rgb(var(--neeto-ui-gray-100))",
            footerColor: "rgb(var(--neeto-ui-black))",
            headerBg: "rgb(var(--neeto-ui-gray-100))",
            headerColor: "rgb(var(--neeto-ui-black))",
            headerFilterHoverBg: "rgb(var(--neeto-ui-gray-100))",
            headerSortActiveBg: "rgb(var(--neeto-ui-gray-200))",
            headerSortHoverBg: "rgb(var(--neeto-ui-gray-200))",
            headerSplitColor: "rgb(var(--neeto-ui-gray-100))",
            rowExpandedBg: "rgb(var(--neeto-ui-gray-100))",
            rowHoverBg: "rgb(var(--neeto-ui-gray-50))",
            rowSelectedBg: "rgb(var(--neeto-ui-accent-50))",
            rowSelectedHoverBg: "rgb(var(--neeto-ui-accent-50))",
            stickyScrollBarBg: "rgb(var(--neeto-ui-gray-300))",
            cellPaddingBlock: 11,

            // Global overrides
            colorPrimary: "rgb(var(--neeto-ui-primary-500))",
            fontSize: 14,
            fontWeightStrong: neetoUIFontBold,
            paddingContentVerticalLG: 11,
          },
        },
      }}
    >
      {shouldShowSelectAllRowsCallout && (
        <SelectAllRowsCallout
          {...bulkSelectAllRowsProps}
          onBulkSelectAllRows={() => {
            setBulkSelectedAllRows(true);
            handleSetBulkSelectedAllRows?.(true);
          }}
        />
      )}
      {shouldShowAllRowsSelectedCallout && (
        <AllRowsSelectedCallout
          {...bulkSelectAllRowsProps}
          onClearSelection={() => {
            setBulkSelectedAllRows(false);
            handleSetBulkSelectedAllRows?.(false);
            handleRowChange([], []);
          }}
        />
      )}
      <AntTable
        {...{ bordered, locale, rowKey, virtual }}
        columns={sortedColumns}
        components={componentOverrides}
        dataSource={rowData}
        loading={{ spinning: loading, indicator: <Spinner /> }}
        ref={tableRef}
        rowSelection={rowSelectionProps}
        scroll={{ ...calculatedScroll, ...scroll }}
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
        onChange={handleTableChange}
        onScroll={handleScroll}
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

  const renderTableVirtual = () =>
    virtual ? (
      <div ref={tableContainerRef}>{renderTable()}</div>
    ) : (
      renderTable()
    );

  return enableColumnReorder ? (
    <ReactDragListView.DragColumn {...dragProps}>
      {renderTableVirtual()}
    </ReactDragListView.DragColumn>
  ) : (
    renderTableVirtual()
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
   * Function that gets called when a more action item in header is clicked.
   *
   * `onMoreActionClick={(type, column) => {}}`
   */
  onMoreActionClick: PropTypes.func,
  /**
   * Additional props for row selection. Refer [row selection docs](https://ant.design/components/table/#rowSelection) from AntD Table
   * Make sure to pass `id` in `rowData` for this to work.
   */
  rowSelection: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
   * Props for adding `Select all rows` option for multi-page table.
   */
  bulkSelectAllRowsProps: PropTypes.shape({
    selectAllRowMessage: PropTypes.string.isRequired,
    selectAllRowButtonLabel: PropTypes.string.isRequired,
    setBulkSelectedAllRows: PropTypes.func.isRequired,
    allRowsSelectedMessage: PropTypes.string,
    clearSelectionButtonLabel: PropTypes.string,
  }),
  /**
   * String to set as the prefix of the local storage key where the data is persisted, eg: fixed columns.
   */
  localStorageKeyPrefix: PropTypes.string,
  /**
   * Whether to use virtual scrolling (beta).
   */
  virtual: PropTypes.bool,
};

export default Table;
