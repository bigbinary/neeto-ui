import React, { useMemo } from "react";
import { Resizable } from "react-resizable";

const ResizableTitle = (props) => {
  const { onResize, width, onResizeStop, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => e.stopPropagation()}
        />
      }
      onResize={onResize}
      onResizeStop={onResizeStop}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const useResizableColumns = ({
  columns,
  setColumns,
  isEnabled,
  onColumnUpdate,
}) => {
  if (!isEnabled)
    return {
      components: {},
      columns,
    };

  const handleResize = (index) => (_, { size }) => {
    const nextColumns = [...columns];
    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    };
    setColumns(nextColumns);
  };

  const computedColumnsData = useMemo(() => {
    return columns.map((col, index) => {
      const modifiedColumn = {
        ...col,
        onHeaderCell: (column) => ({
          width: column.width,
          onResize: handleResize(index),
          onResizeStop: () => onColumnUpdate(columns),
        }),
      };

      if (!col.ellipsis) {
        modifiedColumn.ellipsis = true;
      }
      return modifiedColumn;
    });
  }, [columns]);

  const components = {
    header: {
      cell: isEnabled ? ResizableTitle : null,
    },
  };

  return { components, columns: computedColumnsData };
};

export default useResizableColumns;
