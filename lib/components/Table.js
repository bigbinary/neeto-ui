import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export const Table = ({
  children,
  hasActions = false,
  hasCheckbox = false,
  ...rest
}) => {
  return (
    <table
      className={classnames("neeto-ui-table", {
        "neeto-ui-table--actions": hasActions,
        "neeto-ui-table--checkbox": hasCheckbox,
      })}
      {...rest}
    >
      {children}
    </table>
  );
};

Table.Head = ({ children, ...rest }) => {
  return <thead {...rest}>{children}</thead>;
};

Table.Body = ({
  children,
  isLoading: { loading, rowCount = 50, columnCount = 5 },
  ...rest
}) => {
  return (
    <tbody {...rest}>
      {" "}
      {loading
        ? Array(rowCount)
          .fill()
          .map((_, index) => (
            <React.Fragment key={index}>
              <tr>
                {Array(columnCount)
                  .fill()
                  .map((_, index) => (
                    <td className="text-center" key={index}>
                      <div
                        key={index}
                        className={classnames(["skeleton-loader"])}
                      >
                          NA
                      </div>
                    </td>
                  ))}
              </tr>
            </React.Fragment>
          ))
        : children}
    </tbody>
  );
};

Table.Foot = ({ children, ...rest }) => {
  return <tfoot {...rest}>{children}</tfoot>;
};

Table.TH = ({
  children = null,
  isAscending = false,
  isDescending = false,
  ...rest
}) => {
  return (
    <th
      className={classnames({
        "sort-ascending": isAscending,
        "sort-descending": isDescending,
      })}
      {...rest}
    >
      {children}
    </th>
  );
};

Table.TR = ({ children }) => {
  return <tr>{children}</tr>;
};

Table.TD = ({ className = null, center, children, ...rest }) => (
  <td
    className={classnames({ "text-center": center }, [className])}
    {...rest}
  >
    {children}
  </td>
);

Table.Head.protoTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.Body.protoTypes = {
  isLoading: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.TH.protoTypes = {
  isAscending: PropTypes.bool,
  isDescending: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.TR.protoTypes = {
  isLoading: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.TD.protoTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.protoTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Table;
