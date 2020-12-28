import React, { useState, useRef, useEffect } from "react";
import * as R from "ramda";
import classnames from "classnames";
import { Checkbox, Tab, Button, Dropdown, Input, Pagination } from "lib";

export const SORT_ORDER = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" }
];

const SubHeader = ({
  searchProps,
  columnFilterProps,
  tabsProps,
  deleteButtonProps,
  paginationProps,
  sortProps,
  changeStateProps,
  className,
  toggleFilter,
  actionBlock
}) => {
  const searchRef = useRef();
  const [searchVisibility, setSearchVisibility] = useState(
    searchProps ? !searchProps.clear : false
  );

  const searchParams = new URLSearchParams(location.search);

  const [sortBy, setSortBy] = useState({
    column:
      searchParams.get("sort") ||
      (sortProps && sortProps.options[0] && sortProps.options[0].value),
    direction: searchParams.get("order") || SORT_ORDER[1].value
  });

  useEffect(() => {
    sortProps && sortProps.onClick(sortBy);
  }, [sortBy]);

  const handleClick = (column, direction) => {
    setSortBy({
      ...sortBy,
      column,
      direction
    });
  };

  const handleSearchVisibilty = status => {
    setSearchVisibility(status);
    if (status) {
      searchRef.current.focus();
    } else {
      searchProps && searchProps.clear();
    }
  };

  const currentSort =
    sortProps &&
    sortProps.options.find(item => item.value === sortBy.column).label;

  const showColumnFilters = R.all(R.either(R.isNil, R.isEmpty), [
    columnFilterProps,
    columnFilterProps?.columnFilters,
    columnFilterProps?.handleColumnFiltering
  ]);

  const ColumnFiltersDropdown = () => {
    return (
      <Dropdown
        position="bottom-right"
        label="Columns"
        buttonStyle="secondary"
        closeOnSelect={false}
      >
        {Object.entries(columnFilterProps.columnFilters).map(
          ([key, column]) =>
          (
            <li
              key={key}
              onClick={() =>
                columnFilterProps.handleColumnFiltering({
                  name: key,
                  checked: !column.show
                })
              }
            >
              <Checkbox
                onChange={() => {}}
                checked={column.show}
                name={key}
                label={column.label}
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
              type={searchProps.clear ? "text" : "search"}
              placeholder="Search"
              prefix={
                <i className="flex mr-1 text-base text-gray-500 cursor-pointer ri-search-line hover:text-gray-600" />
              }
              suffix={
                searchVisibility &&
                searchProps.clear && (
                  <i
                    className="flex mr-1 text-gray-500 cursor-pointer fadeIn ri-lg ri-close-line hover:text-gray-600"
                    onClick={() => handleSearchVisibilty(false)}
                  />
                )
              }
              onFocus={() => handleSearchVisibilty(true)}
              nakedInput
              {...searchProps}
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
            {...deleteButtonProps}
          />
        )}
        {actionBlock && <div className="flex mr-3">{actionBlock}</div>}
        {changeStateProps && (
          <Dropdown
            buttonStyle="secondary"
            label="Change State"
            position="bottom-right"
            className="mr-3"
            disabled={changeStateProps.disabled}
          >
            {changeStateProps.options.map(option => {
              return (
                <li
                  key={option.value}
                  onClick={() => changeStateProps.onClick(option.value)}
                >
                  {option.label}
                </li>
              );
            })}
          </Dropdown>
        )}
        {sortProps && (
          <Dropdown
            buttonStyle="secondary"
            label={`Sort by: ${currentSort}`}
            position="bottom-right"
          >
            {sortProps.options.map(option => {
              return (
                <li
                  key={option.value}
                  onClick={() => handleClick(option.value, sortBy.direction)}
                  className={classnames({
                    active: sortBy.column === option.value
                  })}
                >
                  {option.label}
                </li>
              );
            })}
            <div className="my-1 border-t border-gray-100"></div>
            {SORT_ORDER.map(option => {
              return (
                <li
                  key={option.value}
                  onClick={() => handleClick(sortBy.column, option.value)}
                  className={classnames({
                    active: sortBy.direction === option.value
                  })}
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
            <Pagination {...paginationProps} />
          </div>
        )}
        {toggleFilter && (
          <div className="pl-4 ml-4 border-l border-gray-200">
            <Button style="icon" icon="ri-filter-line" onClick={toggleFilter} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
