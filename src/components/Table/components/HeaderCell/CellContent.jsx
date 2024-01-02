import React from "react";

import { isPresent, noop } from "neetocist";

import HeaderCellMenu from "./HeaderCellMenu";

const CellContent = ({
  children,
  isSortable,
  isAddEnabled,
  sortedInfo,
  onSort,
  isHidable = true,
  isDeletable = false,
  onColumnHide,
  onAddColumn,
  onColumnDelete,
  column,
  ...headerProps
}) => {
  const isColumnHidable = isHidable && isPresent(onColumnHide);
  const isColumnDeletable = isDeletable && isPresent(onColumnDelete);
  const hasMoreMenu =
    isSortable ||
    isPresent(column?.description) ||
    isColumnHidable ||
    isAddEnabled ||
    isColumnDeletable;

  return (
    <th
      {...headerProps}
      title=""
      onClick={isSortable ? noop : headerProps.onClick}
    >
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-grow">{children}</div>
        {hasMoreMenu && (
          <HeaderCellMenu
            {...{
              column,
              isAddEnabled,
              isColumnDeletable,
              isSortable,
              onAddColumn,
              onColumnDelete,
              onColumnHide,
              onSort,
              sortedInfo,
            }}
            columnTitle={headerProps.title}
            isHidable={isColumnHidable}
          />
        )}
      </div>
    </th>
  );
};

export default CellContent;
