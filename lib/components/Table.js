import React from "react";
import { Table as AntTable } from "antd";

const noop = () => {};

const Table = ({
  columnData,
  onRowClick,
  rowData,
  scrollOffset,
  handlePageChange = noop,
  defaultPageSize,
  currentPageNumber,
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
      rowClassName="neeto-ui-table--row"
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

export default Table;
