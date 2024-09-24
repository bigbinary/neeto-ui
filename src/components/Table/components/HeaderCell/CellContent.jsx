import React from "react";

import { isPresent, noop } from "neetocist";
import { isEmpty } from "ramda";

import HeaderCellMenu from "./HeaderCellMenu";

const CellContent = ({
  children,
  isSortable,
  isAddEnabled,
  sortedInfo,
  onSort,
  isHidable = true,
  isDeletable = false,
  isFixedColumn,
  isColumnFreezeEnabled,
  onColumnHide,
  onAddColumn,
  onColumnDelete,
  onColumnFreeze,
  onMoreActionClick,
  column,
  moreActions = [],
  ...headerProps
}) => {
  const isColumnHidable = isHidable && isPresent(onColumnHide);
  const isColumnDeletable = isDeletable && isPresent(onColumnDelete);
  const hasMoreActions = !isEmpty(moreActions) && isPresent(onMoreActionClick);
  const hasMoreMenu =
    isSortable ||
    isPresent(column?.description) ||
    isColumnHidable ||
    isAddEnabled ||
    hasMoreActions ||
    (isPresent(column) && isColumnFreezeEnabled);

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
              hasMoreActions,
              isAddEnabled,
              isColumnDeletable,
              isColumnFreezeEnabled,
              isFixedColumn,
              isSortable,
              moreActions,
              onAddColumn,
              onColumnDelete,
              onColumnFreeze,
              onColumnHide,
              onMoreActionClick,
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
