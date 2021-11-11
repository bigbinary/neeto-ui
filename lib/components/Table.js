import React from "react";
import { Table as AntTable } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "./Typography";

const noop = () => {};

const Table = ({
  allowRowClick = true,
  allowRowSelection = true,
  className,
  columnData,
  currentPageNumber = 1,
  defaultPageSize = 100,
  handlePageChange = noop,
  isLoading,
  onRowClick,
  onRowSelect,
  rowData,
  scrollOffset,
  totalCount = 0,
  ...otherProps
}) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) =>
      onRowSelect(selectedRowKeys, selectedRows),
  };

  const locale = {
    emptyText: <Typography style="body2">No Data</Typography>,
  };

  return (
    <AntTable
      columns={columnData}
      dataSource={rowData}
      loading={isLoading}
      rowClassName={classnames(
        "neeto-ui-table--row",
        { "neeto-ui-table--row_hover": allowRowClick },
        [className]
      )}
      rowSelection={allowRowSelection && { type: "checkbox", ...rowSelection }}
      scroll={scrollOffset && { ...scrollOffset }}
      showSorterTooltip={false}
      pagination={{
        total: totalCount ?? 0,
        current: currentPageNumber ?? 1,
        defaultPageSize: defaultPageSize ?? 100,
        onChange: handlePageChange,
        hideOnSinglePage: true,
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => onRowClick(event, record, rowIndex),
        };
      }}
      locale={locale}
      {...otherProps}
    />
  );
};

Table.PropTypes = {
  allowRowClick: PropTypes.bool,
  allowRowSelection: PropTypes.bool,
  className: PropTypes.string,
  columnData: PropTypes.array,
  currentPageNumber: PropTypes.number,
  defaultPageSize: PropTypes.number,
  handlePageChange: PropTypes.func,
  isLoading: PropTypes.bool,
  onRowClick: PropTypes.func,
  onRowSelect: PropTypes.func,
  rowData: PropTypes.array,
  scrollOffset: PropTypes.object,
  totalCount: PropTypes.number,
};

export default Table;
