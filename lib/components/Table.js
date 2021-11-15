import React, { useEffect } from "react";
import { Table as AntTable } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "./Typography";

const noop = () => {};

const TABLE_PAGINATION_HEIGHT = 64;
const TABLE_STICKY_HEADER_HEIGHT = 48;

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
  parentContainerRef,
  rowData,
  totalCount = 0,
  ...otherProps
}) => {
  const [containerHeight, setContainerHeight] = React.useState(null);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) =>
      onRowSelect(selectedRowKeys, selectedRows),
  };

  const locale = {
    emptyText: <Typography style="body2">No Data</Typography>,
  };

  const calculateTableContainerHeight = () =>
    containerHeight - TABLE_STICKY_HEADER_HEIGHT - TABLE_PAGINATION_HEIGHT;

  useEffect(() => {
    parentContainerRef &&
      setContainerHeight(parentContainerRef?.current?.clientHeight);
  }, [parentContainerRef]);

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
      rowSelection={{ type: "checkbox", ...rowSelection }}
      scroll={{
        x: "max-content",
        y: calculateTableContainerHeight(),
      }}
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

Table.propTypes = {
  allowRowClick: PropTypes.bool,
  className: PropTypes.string,
  columnData: PropTypes.array,
  currentPageNumber: PropTypes.number,
  defaultPageSize: PropTypes.number,
  handlePageChange: PropTypes.func,
  isLoading: PropTypes.bool,
  onRowClick: PropTypes.func,
  onRowSelect: PropTypes.func,
  parentContainerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  rowData: PropTypes.array,
  rowSelection: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  totalCount: PropTypes.number,
};

export default Table;
