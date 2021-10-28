import React from "react";
import { Table as AntTable } from "antd";

const Table = ({ rowData, columnData, onRowClick, scrollOffset }) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) =>
      onRowClick(selectedRowKeys, selectedRows),
  };
  return (
    <AntTable
      dataSource={rowData}
      columns={columnData}
      showSorterTooltip={false}
      rowSelection={{ type: "checkbox", ...rowSelection }}
      scroll={scrollOffset && { ...scrollOffset }}
      rowClassName="neeto-ui-table--row"
    />
  );
};

export default Table;
