import React, { useRef } from "react";

import { isPresent } from "neetocist";
import { Check, MenuHorizontal } from "neetoicons";
import { useTranslation } from "react-i18next";

import Dropdown from "components/Dropdown";
import Popover from "components/Popover";
import {
  COLUMN_ADD_DIRECTION,
  TABLE_SORT_ORDERS,
} from "components/Table/constants";
import Typography from "components/Typography";

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
  hasMoreActions,
  onMoreActionClick,
  columnTitle = null,
  moreActions = [],
}) => {
  const { t } = useTranslation();
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
          "data-dropdown-button-style": "more-dropdown",
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
                <span>{t("neetoui.table.ascending")}</span>
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
                <span>{t("neetoui.table.descending")}</span>
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
                {t("neetoui.table.insertColRight")}
              </MenuItem.Button>
              <MenuItem.Button
                onClick={() => onAddColumn(COLUMN_ADD_DIRECTION.left)}
              >
                {t("neetoui.table.insertColLeft")}
              </MenuItem.Button>
            </>
          )}
          {isPresent(column?.description) && (
            <>
              <MenuItem.Button ref={columnInfoButtonReference}>
                {t("neetoui.table.columnInfo")}
              </MenuItem.Button>
              <Popover
                className="cursor-auto"
                hideOnClick={false}
                interactiveDebounce={20}
                offset={[0, 15]}
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
              {t("neetoui.table.hideColumn")}
            </MenuItem.Button>
          )}
          {isColumnDeletable && (
            <MenuItem.Button onClick={() => onColumnDelete(column.id)}>
              {t("neetoui.table.deleteColumn")}
            </MenuItem.Button>
          )}
          {hasMoreActions &&
            moreActions.map((item, index) => (
              <MenuItem.Button
                key={index}
                onClick={() => onMoreActionClick(item.type, column)}
              >
                {item.label}
              </MenuItem.Button>
            ))}
        </Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderCellMenu;
