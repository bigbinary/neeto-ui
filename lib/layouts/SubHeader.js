import React, { useEffect, useRef, useState } from "react";
import * as R from "ramda";
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Tab,
  Tooltip,
  Pagination,
} from "../index";
import classnames from "classnames";
import { hyphenize } from "../common";

export const isNotPresent = R.either(R.isNil, R.isEmpty);
export const isPresent = R.pipe(isNotPresent, R.not);
export const SORT_ORDER = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

const SubHeader = ({
  showMenu,
  searchProps,
  columnFilterProps,
  tabsProps,
  deleteButtonProps,
  paginationProps,
  sortProps,
  changeStateProps,
  useChangeStateButtons,
  className,
  toggleFilter,
  actionBlock,
  handleClearFilters = null,
}) => {
  const searchRef = useRef();

  const { clear: clearSearch, ...searchInputProps} = searchProps || {};

  const [searchVisibility, setSearchVisibility] = useState(
    searchProps ? searchProps.value || !clearSearch : false
  );

  const [isInitialLoad, setInitialLoad] = useState(true);

  const searchParams = new URLSearchParams(location.search);

  const [sortBy, setSortBy] = useState({
    column:
      searchParams.get("sort") ||
      (sortProps && sortProps.options[1] && sortProps.options[1].value),
    direction: searchParams.get("order") || SORT_ORDER[1].value,
  });

  useEffect(() => {
    if (isInitialLoad) setInitialLoad(false);
    else sortProps && sortProps.onClick(sortBy);
  }, [sortBy]);

  const handleClick = (column, direction) => {
    setSortBy({
      ...sortBy,
      column,
      direction,
    });
  };

  const handleSearchVisibilty = (status) => {
    setSearchVisibility(status);
    if (status) {
      searchRef.current.focus();
    } else {
      clearSearch();
    }
  };

  const currentSort =
    sortProps &&
    sortProps.options.find((item) => item.value === sortBy.column).label;

  const showColumnFilters = R.all(isPresent, [
    columnFilterProps,
    columnFilterProps?.columnFilters,
    columnFilterProps?.handleColumnFiltering,
  ]);

  const renderClearFiltersButton = () => {
    return (
      <Button
        label="Clear filters"
        style="secondary"
        className="mr-3"
        data-test-id="clear-filters"
        data-cy="clear-filters"
        onClick={() => handleClearFilters()}
      />
    );
  };

  const ColumnFiltersDropdown = () => {
    const disabledColumn = "name";
    return (
      <Dropdown
        position="bottom-right"
        label="Columns"
        buttonStyle="secondary"
        closeOnSelect={false}
      >
        {Object.entries(columnFilterProps.columnFilters).map(
          ([key, column]) =>
            key !== disabledColumn && (
              <li
                key={key}
                onClick={() =>
                  columnFilterProps.handleColumnFiltering({
                    name: key,
                    checked: !column.show,
                  })
                }
                data-cy={`columns-dropdown-${hyphenize(column.label)}`}
              >
                <Checkbox
                  checked={column.show}
                  name={key}
                  label={column.label}
                  onChange={(e) => {
                    e.stopPropagation();
                    columnFilterProps.handleColumnFiltering({
                      name: key,
                      checked: !column.show,
                    });
                  }}
                />
              </li>
            )
        )}
      </Dropdown>
    );
  };

  return (
    <div className={classnames(["nui-subheader", className])}>
      <div className="flex flex-row items-center justify-start">
        {searchProps && (
          <div
            className={classnames(
              ["overflow-hidden transition-all duration-300 ease-in-out mr-4"],
              { "w-20": !searchVisibility, "w-48": searchVisibility }
            )}
          >
            <Input
              ref={searchRef}
              type={clearSearch ? "text" : "search"}
              placeholder="Search"
              data-test-id="search-input-field"
              data-cy={searchInputProps["data-cy"] || "search-input-field"}
              prefix={
                <i className="flex mr-1 text-base text-gray-500 cursor-pointer ri-search-line hover:text-gray-600" />
              }
              suffix={
                searchVisibility &&
                clearSearch && (
                  <i
                    className="flex mr-1 text-gray-500 cursor-pointer fadeIn ri-lg ri-close-line hover:text-gray-600"
                    onClick={() => handleSearchVisibilty(false)}
                    data-test-id="search-clear-icon"
                    data-cy="search-clear-icon"
                  />
                )
              }
              onFocus={() => handleSearchVisibilty(true)}
              nakedInput
              {...searchInputProps}
            />
          </div>
        )}
        {tabsProps && (
          <Tab>
            {tabsProps.tabs.map((tab, index) => (
              <Tab.Item
                key={index}
                onClick={() => tabsProps.onClick(tab.value)}
                icon={tab.icon}
                active={tab.value === tabsProps.active}
              >
                {tab.label}
              </Tab.Item>
            ))}
          </Tab>
        )}
      </div>
      <div className="flex flex-row items-center justify-end">
        {deleteButtonProps && (
          <Button
            style="secondary"
            label="Delete"
            className="mr-3"
            icon="ri-delete-bin-line"
            data-test-id="delete-button"
            data-cy={deleteButtonProps["data-cy"] || "delete-button"}
            {...deleteButtonProps}
          />
        )}
        {actionBlock && <div className="flex mr-3">{actionBlock}</div>}
        {handleClearFilters && renderClearFiltersButton()}

        {changeStateProps &&
          (useChangeStateButtons ? (
            changeStateProps.options.map((option, index) => {
              return (
                <Button
                  style="secondary"
                  label={option.label}
                  className={classnames({
                    "mr-3": index !== changeStateProps.options.length - 1,
                  })}
                  icon={option.icon}
                  key={option.value}
                  onClick={() => changeStateProps.onClick(option.value)}
                  data-test-id={`customer-${option.label.toLowerCase()}-button`}
                  data-cy={`status-${hyphenize(option.label)}-button`}
                  disabled={changeStateProps.disabled || option.disabled}
                />
              );
            })
          ) : (
            <Dropdown
              buttonStyle="secondary"
              label="Change Status"
              position="bottom-right"
              className="mr-3"
              disabled={changeStateProps.disabled}
              data-cy="change-status-dropdown"
            >
              {changeStateProps.options.map((option) => {
                return (
                  <li
                    key={option.value}
                    onClick={() => changeStateProps.onClick(option.value)}
                    data-cy={`sort-dropdown-${hyphenize(option.label)}-link`}
                  >
                    {option.label}
                  </li>
                );
              })}
            </Dropdown>
          ))}
        {sortProps && (
          <Dropdown
            buttonStyle="secondary"
            label={`Sort by: ${currentSort}`}
            position="bottom-right"
            data-cy={sortProps && sortProps["data-cy"]}
          >
            {sortProps.options.map((option) => {
              return (
                <li
                  key={option.value}
                  onClick={() => handleClick(option.value, sortBy.direction)}
                  className={classnames({
                    active: sortBy.column === option.value,
                  })}
                  data-cy={`sort-dropdown-${option.value}-link`}
                >
                  {option.label}
                </li>
              );
            })}
            <div className="my-1 border-t border-gray-100"></div>
            {SORT_ORDER.map((option) => {
              return (
                <li
                  key={option.value}
                  onClick={() => handleClick(sortBy.column, option.value)}
                  className={classnames({
                    active: sortBy.direction === option.value,
                  })}
                  data-cy={`sort-direction-${hyphenize(
                    sortBy.column
                  )}-${hyphenize(option.value)}`}
                >
                  {option.label}
                </li>
              );
            })}
          </Dropdown>
        )}
        {showColumnFilters && <ColumnFiltersDropdown />}
        {paginationProps && (
          <div className="pl-4 ml-4 border-l border-gray-200">
            <Pagination {...paginationProps} showMenu={showMenu} />
          </div>
        )}
        {toggleFilter && (
          <div className="pl-4 ml-4 border-l border-gray-200">
            <Tooltip content="Filter" position="bottom">
              <Button
                style="icon"
                icon="ri-filter-line"
                onClick={toggleFilter}
                data-cy="subheader-filter-icon"
              />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
