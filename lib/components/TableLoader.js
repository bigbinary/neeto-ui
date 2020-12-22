import React from "react";
import classnames from "classnames";

const TableLoader = ({
  rows = 25,
  columns = 5,
  avatars,
  checkbox,
  actions
}) => {
  let tableContent = [];
  let columnCount = columns;
  if (checkbox) {
    columnCount--;
  }
  if (avatars) {
    columnCount--;
  }
  if (actions) {
    columnCount--;
  }

  const generateRandomNumber = () => {
    const min = 3;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1) + min); // Returns a number between 3 and 10
  };

  let children = i => (
    <tr key={i}>
      {checkbox && (
        <td>
          <div className="w-4 h-4 bp3-skeleton"></div>
        </td>
      )}
      {avatars && (
        <td>
          <div className="flex flex-row items-center justify-start">
            <div className="w-8 h-8 mr-3 rounded-full bp3-skeleton" />
            <div
              className={classnames([
                "bp3-skeleton",
                [`w-${generateRandomNumber()}/12`]
              ])}
            >
              NA
            </div>
          </div>
        </td>
      )}
      {Array(columnCount)
        .fill()
        .map((_, index) => {
          return (
            <td key={index}>
              <div
                className={classnames([
                  "inline-flex bp3-skeleton",
                  [`w-${generateRandomNumber()}/12`]
                ])}
              >
                NA
              </div>
            </td>
          );
        })}
      {actions && (
        <td className="opacity-100">
          <div className="w-16 bp3-skeleton mx-auto">Actions</div>
        </td>
      )}
    </tr>
  );
  for (let i = 0; i < rows; i++) {
    tableContent.push(children(i));
  }
  return tableContent;
};

export default TableLoader;