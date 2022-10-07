import React, { useState, useEffect } from "react";
import { filter, includes, map, not, prop } from "ramda";
import PropTypes from "prop-types";
import { Search } from "@bigbinary/neeto-icons";

import useLocalStorage from "../../hooks/useLocalStorage";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import {
  filterBySearchTerm,
  removeDuplicates,
  removeFixedColumns,
  removeFromHiddenColumns,
} from "./utils";

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
  const { Menu, MenuItem } = Dropdown;
  const columns = removeFixedColumns(fixedColumns, columnData);
  const [columnsToRender, setColumnsToRender] = useState(columns);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredColumns = filterBySearchTerm(searchTerm, columns);
  const [
    hiddenColumnsInLocalStorage,
    setHiddenColumnsInLocalStorage,
  ] = useLocalStorage(localStorageKey, []);

  const handleHideColumn = (columnName, isColumnHidden) => {
    isColumnHidden &&
      setHiddenColumnsInLocalStorage(
        removeDuplicates([...hiddenColumnsInLocalStorage, columnName])
      );
    if (!isColumnHidden) {
      const modifiedHiddenColumns = removeFromHiddenColumns(
        columnName,
        hiddenColumnsInLocalStorage
      );
      setHiddenColumnsInLocalStorage(modifiedHiddenColumns);
    }
  };

  useEffect(() => {
    setColumnsToRender(
      filter(
        ({ name }) => not(includes(name, hiddenColumnsInLocalStorage)),
        columnData
      )
    );
  }, [hiddenColumnsInLocalStorage]);

  renderColumns(columnsToRender);

  return (
    <Dropdown
      buttonProps={{
        onClick: () => setIsDropdownOpen((isOpen) => !isOpen),
      }}
      buttonSize="medium"
      buttonStyle="secondary"
      closeOnSelect={false}
      isOpen={isDropdownOpen}
      label="Columns"
      onClose={() => setIsDropdownOpen(false)}
      position="bottom-end"
      {...dropdownProps}
    >
      <Menu>
        <div>
          {!!isSearchable && (
            <Input
              className="neeto-ui-columns__search"
              data-cy="neeto-ui-columns-search"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search columns"
              prefix={<Search />}
              type="search"
              value={searchTerm}
              {...searchProps}
            />
          )}
          {filteredColumns.length > 0 ? (
            filteredColumns.map(({ name }, index) => (
              <MenuItem.Button key={index}>
                <label className="w-full">
                  <Checkbox
                    checked={includes(name, map(prop("name"), columnsToRender))}
                    data-cy="neeto-ui-columns-checkbox"
                    label={name}
                    onChange={({ target: { checked } }) =>
                      handleHideColumn(name, !checked)
                    }
                    {...checkboxProps}
                  />
                </label>
              </MenuItem.Button>
            ))
          ) : (
            <span className="neeto-ui-columns__no-data">{noColumnMessage}</span>
          )}
          {!!actionBlock && actionBlock()}
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
   * The columns that are fixed and cannot be hidden.
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
