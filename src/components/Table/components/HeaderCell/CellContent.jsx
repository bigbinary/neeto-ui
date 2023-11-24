import React from "react";

import { isPresent, noop } from "neetocist";

import HeaderCellMenu from "./HeaderCellMenu";

const CellContent = ({
  children,
  isSortable,
  columnKey,
  sortedInfo,
  onSort,
  columnDescription,
  isHidable = true,
  onColumnHide,
  ...headerProps
}) => {
  const isColumnHidable = isHidable && isPresent(onColumnHide);
  const hasMoreMenu =
    isSortable || isPresent(columnDescription) || isColumnHidable;

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
              columnDescription,
              columnKey,

              isSortable,
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
