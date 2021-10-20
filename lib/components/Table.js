import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Table = ({
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

Table.Th = ({
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

Table.Tr = ({ children }) => {
  return <tr>{children}</tr>;
};

Table.Td = ({ className = null, center, children, ...rest }) => (
  <td className={classnames({ "text-center": center }, [className])} {...rest}>
    {children}
  </td>
);

Table.Head.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.Foot.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.Body.propTypes = {
  /**
   * Display skeleton loading indicator
   */
  isLoading: PropTypes.shape({
    loading: PropTypes.bool,
    rowCount: PropTypes.number,
    columnCount: PropTypes.number,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.Th.propTypes = {
  isAscending: PropTypes.bool,
  isDescending: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.Tr.propTypes = {
  isLoading: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.Td.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.propTypes = {
  /**
   * Update table styling to include checkbox
   */
  hasCheckbox: PropTypes.bool,
  /**
   * Update table styling to include actions
   */
  hasActions: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Table.Head.displayName = "Table.Head";
Table.Body.displayName = "Table.Body";
Table.Foot.displayName = "Table.Foot";
Table.Th.displayName = "Table.Th";
Table.Tr.displayName = "Table.Tr";
Table.Td.displayName = "Table.Td";

export default Table;
