import React from "react";

import { Resizable } from "react-resizable";

import CellContent from "./CellContent";

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
      onResizeStart={e => {
        e.preventDefault();
      }}
    >
      <CellContent {...restProps} />
    </Resizable>
  );
};

export default ResizableHeaderCell;
