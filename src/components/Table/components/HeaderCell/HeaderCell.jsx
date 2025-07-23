import React from "react";

import classNames from "classnames";
import { Resizable } from "react-resizable";

import CellContent from "./CellContent";

const HeaderCell = props => {
  const { onResize, width, onResizeStop, className, ...restProps } = props;

  if (!width) {
    return (
      <CellContent
        {...restProps}
        className={classNames(className, "drag-handler")}
      />
    );
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
      <CellContent
        {...restProps}
        className={classNames(className, "drag-handler")}
      />
    </Resizable>
  );
};

export default React.memo(HeaderCell);
