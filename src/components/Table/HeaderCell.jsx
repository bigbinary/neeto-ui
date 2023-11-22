import React from "react";

import classnames from "classnames";
import { isPresent, noop } from "neetocist";
import { Resizable } from "react-resizable";

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
}) => (
  <th {...headerProps} onClick={isSortable ? noop : headerProps.onClick}>
    <div className="flex items-center justify-between">
      <div className="min-w-0 flex-grow">{children}</div>
      {(isSortable || isPresent(columnDescription)) && (
        <HeaderCellMenu
          {...{
            columnDescription,
            columnKey,
            isSortable,
            onColumnHide,
            onSort,
            sortedInfo,
          }}
          isHidable={isHidable && isPresent(onColumnHide)}
        />
      )}
    </div>
  </th>
);

const HeaderCell = props => {
  const { onResize, width, onResizeStop, className, ...restProps } = props;

  if (!width) {
    return <CellContent {...restProps} className="drag-handler" />;
  }

  return (
    <Resizable
      {...{ onResize, onResizeStop, width }}
      draggableOpts={{ enableUserSelectHack: false }}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => e.stopPropagation()}
        />
      }
    >
      <CellContent
        {...restProps}
        className={classnames(className, "drag-handler")}
      />
    </Resizable>
  );
};

const ResizableHeaderCell = props => {
  const { onResize, width, onResizeStop, ...restProps } = props;

  if (!width) {
    return <CellContent {...restProps} />;
  }

  return (
    <Resizable
      {...{ onResize, onResizeStop, width }}
      draggableOpts={{ enableUserSelectHack: false }}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => e.stopPropagation()}
        />
      }
    >
      <CellContent {...restProps} />
    </Resizable>
  );
};

const ReorderableHeaderCell = props => (
  <CellContent {...props} className="drag-handler" />
);

export { CellContent, ResizableHeaderCell, ReorderableHeaderCell, HeaderCell };
