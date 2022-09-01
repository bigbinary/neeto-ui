import React, { useCallback, useRef, useState } from "react";
import { Table as AntTable } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import { Left, Right, MenuHorizontal } from "@bigbinary/neeto-icons";

import Typography from "./Typography";
import Button from "./Button";

const noop = () => {};

const TABLE_PAGINATION_HEIGHT = 64;
const TABLE_STICKY_HEADER_HEIGHT = 40;

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
    TABLE_STICKY_HEADER_HEIGHT -
    (isPaginationVisible ? TABLE_PAGINATION_HEIGHT : 0);

  const resizeObserver = useRef(
    new ResizeObserver(([{ contentRect: { height } }]) =>
      setContainerHeight(height)
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

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <Button style="text" className="" icon={Left} />;
    }

    if (type === "next") {
      return <Button style="text" className="" icon={Right} />;
    }

    if (type === "jump-prev") {
      return <Button style="text" className="" icon={MenuHorizontal} />;
    }

    if (type === "jump-next") {
      return <Button style="text" className="" icon={MenuHorizontal} />;
    }

    return originalElement;
  };

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
        y: calculateTableContainerHeight(),
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
        itemRender: itemRender,
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) =>
            allowRowClick && onRowClick && onRowClick(event, record, rowIndex),
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
