import React from "react";

import classnames from "classnames";
import { Resizable } from "react-resizable";

const HeaderCell = props => {
  const { onResize, width, onResizeStop, className, ...restProps } = props;

  if (!width) {
    return <th {...restProps} className="drag-handler" />;
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
      <th {...restProps} className={classnames(className, "drag-handler")} />
    </Resizable>
  );
};

const ResizableHeaderCell = props => {
  const { onResize, width, onResizeStop, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
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
      <th {...restProps} />
    </Resizable>
  );
};

const ReorderableHeaderCell = props => (
  <th {...props} className="drag-handler" />
);

export { ResizableHeaderCell, ReorderableHeaderCell, HeaderCell };
