import React from "react";

import { isPresent, noop } from "neetocist";
import { isEmpty } from "ramda";

import { hyphenize } from "utils";

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
      <div
        className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-between"
        data-cy={`${hyphenize(headerProps.title)}-header-title`}
      >
        <div className="neeto-ui-min-w-0 neeto-ui-flex-grow neeto-ui-truncate">
          {children}
        </div>
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
            isHidable={isColumnHidable}
          />
        )}
      </div>
    </th>
  );
};

export default CellContent;
