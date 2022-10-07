import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Search } from "@bigbinary/neeto-icons";

import useLocalStorage from "../../hooks/useLocalStorage";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import { filterBySearchTerm, removeFixedColumns } from "./utils";

const Columns = ({
  actionBlock,
  checkboxProps,
  columnData,
  dropdownProps,
  fixedColumns,
  isSearchable,
  localStorageKey,
  noColumnMessage,
  renderColumns,
  searchProps,
}) => {
  const { Divider, Menu, MenuItem } = Dropdown;
  const [hiddenColumns, setHiddenColumns] = useLocalStorage(
    localStorageKey,
    []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const columns = removeFixedColumns(fixedColumns, columnData);
  const filteredColumns = filterBySearchTerm(searchTerm, columns);

  const handleHideColumn = (dataIndex, isColumnVisible) => {
    isColumnVisible
      ? setHiddenColumns(hiddenColumns.filter((column) => column !== dataIndex))
      : setHiddenColumns([...hiddenColumns, dataIndex]);
  };

  const handleChange = ({ target: { name: dataIndex, checked } }) =>
    handleHideColumn(dataIndex, checked);

  const handleSearch = ({ target: { value } }) => setSearchTerm(value);

  useEffect(
    () =>
      renderColumns(
        columnData.filter(({ dataIndex }) => !hiddenColumns.includes(dataIndex))
      ),
    [hiddenColumns]
  );

  return (
    <Dropdown
      buttonSize="medium"
      buttonStyle="secondary"
      closeOnSelect={false}
      label="Columns"
      position="bottom-end"
      {...dropdownProps}
    >
      <Menu>
        <div>
          {!!isSearchable && (
            <Input
              className="neeto-ui-px-3 neeto-ui-py-2"
              data-cy="neeto-ui-columns-search"
              onChange={handleSearch}
              placeholder="Search columns"
              prefix={<Search />}
              type="search"
              value={searchTerm}
              {...searchProps}
            />
          )}
          {filteredColumns.length > 0 ? (
            filteredColumns.map(({ dataIndex, name }, index) => (
              <MenuItem.Button key={index}>
                <label className="neeto-ui-w-full">
                  <Checkbox
                    name={dataIndex}
                    checked={!hiddenColumns.includes(dataIndex)}
                    data-cy="neeto-ui-columns-checkbox"
                    label={name}
                    onChange={handleChange}
                    {...checkboxProps}
                  />
                </label>
              </MenuItem.Button>
            ))
          ) : (
            <span className="neeto-ui-flex neeto-ui-flex-col neeto-ui-items-center neeto-ui-p-2">
              {noColumnMessage}
            </span>
          )}
          {!!actionBlock && (
            <>
              <Divider />
              {actionBlock()}
            </>
          )}
        </div>
      </Menu>
    </Dropdown>
  );
};

Columns.propTypes = {
  /**
   * The action block to be rendered in at the bottom of the dropdown.
   */
  actionBlock: PropTypes.node,
  /**
   * Props to be passed to the checkbox component.
   */
  checkboxProps: PropTypes.object,
  /**
   * Provides the data for the table columns.
   */
  columnData: PropTypes.array.isRequired,
  /**
   * Props to be passed to the dropdown component.
   */
  dropdownProps: PropTypes.object,
  /**
   * The dataIndex for the columns that are fixed and cannot be hidden.
   */
  fixedColumns: PropTypes.array,
  /**
   * To make the search input field visible.
   */
  isSearchable: PropTypes.bool,
  /**
   * The key for the local storage entry that manages the hidden columns.
   */
  localStorageKey: PropTypes.string.isRequired,
  /**
   * The message to be displayed when there are no columns to be displayed.
   */
  noColumnMessage: PropTypes.string,
  /**
   * Function that returns the column data for the columns to be rendered.
   */
  renderColumns: PropTypes.func,
  /**
   * Props to be passed to the search input component.
   */
  searchProps: PropTypes.object,
};

Columns.defaultProps = {
  checkboxProps: {},
  dropdownProps: {},
  fixedColumns: [],
  isSearchable: false,
  noColumnMessage: "No columns found!",
  renderColumns: (columns) => columns,
  searchProps: {},
};

export default Columns;