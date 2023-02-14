import React, { useState, useEffect } from "react";
import { Resizable } from "react-resizable";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

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
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const useResizableColumns = ({ columnData, isEnabled }) => {
  if (!isEnabled)
    return {
      components: {},
      columns: columnData,
    };

  const [columns, setColumns] = useState(columnData);
  useEffect(() => {
    setColumns(columnData);
  }, [columnData]);

  const handleResize = (index) => (_, { size }) => {
    setColumns((columns) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return nextColumns;
    });
  };

  const computedColumnsData = columns.map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }));

  const components = {
    header: {
      cell: isEnabled ? ResizableTitle : null,
    },
  };
  return { components, columns: computedColumnsData };
};

export default useResizableColumns;
