import React, { useState } from "react";

import classnames from "classnames";
import { Resizable } from "react-resizable";

import CellContent from "./CellContent";

const ResizableHeaderCell = props => {
  const { onResize, width, onResizeStop, onResizeStart, ...restProps } = props;
  const [isResizing, setIsResizing] = useState(false);

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
          className={classnames("react-resizable-handle", {
            "react-resizable-handle--resizing": isResizing,
          })}
          onClick={e => e.stopPropagation()}
        >
          <span className="neeto-ui-table-react-resizable-handle__inner" />
        </span>
      }
      onResizeStart={(e, data) => {
        e.preventDefault();
        setIsResizing(true);
        onResizeStart?.(e, data);
      }}
      onResizeStop={(e, data) => {
        setIsResizing(false);
        onResizeStop?.(e, data);
      }}
    >
      <CellContent {...restProps} />
    </Resizable>
  );
};

export default ResizableHeaderCell;
