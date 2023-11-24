import React, { useRef } from "react";

import { isPresent } from "neetocist";
import { Check, MenuHorizontal } from "neetoicons";

import { Dropdown, Popover, Typography } from "components";
import { TABLE_SORT_ORDERS } from "components/Table/constants";

const { Menu, MenuItem } = Dropdown;

const HeaderCellMenu = ({
  onSort,
  column = {},
  sortedInfo,
  isSortable,
  isHidable,
  onColumnHide,
  columnTitle = null,
}) => {
  const columnInfoButtonReference = useRef();

  return (
    <div onClick={event => event.stopPropagation()}>
      <Dropdown
        className="flex"
        icon={MenuHorizontal}
        strategy="fixed"
        buttonProps={{
          className: "min-h-0 flex-shrink-0",
          style: "text",
          size: "medium",
        }}
      >
        <Menu>
          {isSortable && (
            <>
              <MenuItem.Button
                className="flex items-center justify-between"
                onClick={() =>
                  onSort({
                    column,
                    columnKey: column.key,
                    field: column.dataIndex,
                    order: TABLE_SORT_ORDERS.asc,
                  })
                }
              >
                <span>Ascending</span>
                {sortedInfo.order === TABLE_SORT_ORDERS.asc &&
                  sortedInfo.field === column.dataIndex && (
                    <Check className="neeto-ui-text-success-500" size={20} />
                  )}
              </MenuItem.Button>
              <MenuItem.Button
                className="flex items-center justify-between"
                onClick={() =>
                  onSort({
                    column,
                    columnKey: column.key,
                    field: column.dataIndex,
                    order: TABLE_SORT_ORDERS.desc,
                  })
                }
              >
                <span>Desceding</span>
                {sortedInfo.order === TABLE_SORT_ORDERS.desc &&
                  sortedInfo.field === column.dataIndex && (
                    <Check className="neeto-ui-text-success-500" size={20} />
                  )}
              </MenuItem.Button>
            </>
          )}
          {isPresent(column?.description) && (
            <>
              <MenuItem.Button ref={columnInfoButtonReference}>
                Column info
              </MenuItem.Button>
              <Popover
                hideOnClick={false}
                interactiveDebounce={20}
                offset={[0, 0]}
                position="right"
                reference={columnInfoButtonReference}
                strategy="fixed"
              >
                {columnTitle && <Popover.Title>{columnTitle}</Popover.Title>}
                <Typography
                  className="w-72 max-w-full whitespace-normal normal-case"
                  lineHeight="normal"
                  style="body2"
                  weight="normal"
                >
                  {column?.description}
                </Typography>
              </Popover>
            </>
          )}
          {isHidable && (
            <MenuItem.Button onClick={() => onColumnHide(column.dataIndex)}>
              Hide column
            </MenuItem.Button>
          )}
        </Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderCellMenu;
