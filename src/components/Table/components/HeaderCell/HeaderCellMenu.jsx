import React, { useRef } from "react";

import { isPresent } from "neetocist";
import { Check, MenuHorizontal } from "neetoicons";

import { Dropdown, Popover, Typography } from "components";
import {
  COLUMN_ADD_DIRECTION,
  TABLE_SORT_ORDERS,
} from "components/Table/constants";

const { Menu, MenuItem } = Dropdown;

const HeaderCellMenu = ({
  onSort,
  column = {},
  sortedInfo,
  isSortable,
  isAddEnabled,
  isColumnDeletable,
  isHidable,
  onColumnHide,
  onAddColumn,
  onColumnDelete,
  columnTitle = null,
}) => {
  const columnInfoButtonReference = useRef();

  return (
    <div onClick={event => event.stopPropagation()}>
      <Dropdown
        appendTo={() => document.body}
        className="flex"
        icon={MenuHorizontal}
        position="auto"
        strategy="fixed"
        buttonProps={{
          className: "min-h-0 flex-shrink-0",
          style: "text",
          size: "medium",
          "data-testid": "column-menu-button",
        }}
      >
        <Menu
          className="cursor-auto"
          onMouseDown={event => event.preventDefault()}
        >
          {isSortable && (
            <>
              <MenuItem.Button
                className="flex items-center justify-between"
                onClick={() =>
                  onSort({
                    column,
                    columnKey: column.key,
                    field: column.dataIndex || column.key,
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
          {isAddEnabled && (
            <>
              <MenuItem.Button
                onClick={() => onAddColumn(COLUMN_ADD_DIRECTION.right)}
              >
                Insert column right
              </MenuItem.Button>
              <MenuItem.Button
                onClick={() => onAddColumn(COLUMN_ADD_DIRECTION.left)}
              >
                Insert column left
              </MenuItem.Button>
            </>
          )}
          {isPresent(column?.description) && (
            <>
              <MenuItem.Button ref={columnInfoButtonReference}>
                Column info
              </MenuItem.Button>
              <Popover
                className="cursor-auto"
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
            <MenuItem.Button onClick={() => onColumnHide(column)}>
              Hide column
            </MenuItem.Button>
          )}
          {isColumnDeletable && (
            <MenuItem.Button
              style="danger"
              onClick={() => onColumnDelete(column.id)}
            >
              Delete column
            </MenuItem.Button>
          )}
        </Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderCellMenu;
