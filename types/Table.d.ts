import React from "react";

export interface TableProps {
  rowData: any[];
  columnData: any[];
  allowRowClick?: boolean;
  className?: string;
  currentPageNumber?: number;
  defaultPageSize?: number;
  handlePageChange?: (page: number, pageSize: number) => void;
  loading?: boolean;
  onRowClick?: (
    event: React.MouseEvent<any, MouseEvent>,
    record: any,
    rowIndex: number
  ) => void;
  onRowSelect?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  totalCount?: number;
  selectedRowKeys?: React.Key[];
  fixedHeight?: boolean;
  paginationProps?: any;
  scroll?: {
    x?: string | number | true;
    y?: string | number;
    scrollToFirstRowOnChange?: boolean;
  };
  rowSelection?: any;
  shouldDynamicallyRenderRowSize?: boolean;
  enableColumnResize?: boolean;
  enableColumnReorder?: boolean;
  enableAddColumn?: boolean;
  onColumnUpdate?: (columns: any[]) => void;
  onColumnAdd?: (position: number) => void;
  onColumnDelete?: (key: string) => void;
  preserveTableStateInQuery?: boolean;
  onColumnHide?: (columnKey: string) => void;
  onMoreActionClick?: (actionType: string, column: any) => void;
  [key: string]: any;
}
export const Table: React.FC<TableProps>;
