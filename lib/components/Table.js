import React from "react";
import { Table as AntTable } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

const noop = () => {};

const Table = ({
  className,
  columnData,
  currentPageNumber,
  defaultPageSize,
  handlePageChange = noop,
  onRowClick,
  rowData,
  scrollOffset,
  ...otherProps
}) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) =>
      onRowClick(selectedRowKeys, selectedRows),
  };

  return (
    <AntTable
      columns={columnData}
      dataSource={rowData}
      rowClassName={classnames("neeto-ui-table--row", [className])}
      rowSelection={{ type: "checkbox", ...rowSelection }}
      scroll={scrollOffset && { ...scrollOffset }}
      showSorterTooltip={false}
      pagination={{
        current: currentPageNumber ?? 1,
        defaultPageSize: defaultPageSize ?? 100,
        onChange: handlePageChange,
        hideOnSinglePage: true,
      }}
      {...otherProps}
    />
  );
};

Table.PropTypes = {
  className: PropTypes.string,
  columnData: PropTypes.array,
  currentPageNumber: PropTypes.number,
  defaultPageSize: PropTypes.number,
  handlePageChange: PropTypes.func,
  onRowClick: PropTypes.func,
  rowData: PropTypes.array,
  scrollOffset: PropTypes.object,
};

export default Table;
