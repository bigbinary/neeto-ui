import React from "react";

import { Check, MenuHorizontal } from "neetoicons";
import { useTranslation } from "react-i18next";

import Dropdown from "components/Dropdown";
import {
  COLUMN_ADD_DIRECTION,
  TABLE_SORT_ORDERS,
} from "components/Table/constants";
import { getLocale, hyphenize } from "utils";

const { Menu, MenuItem } = Dropdown;

// eslint-disable-next-line @bigbinary/neeto/no-dumb-components-with-use-translation
const HeaderCellMenu = ({
  onSort,
  column = {},
  sortedInfo,
  isSortable,
  isAddEnabled,
  isFixedColumn,
  isColumnDeletable,
  isColumnFreezeEnabled,
  isHidable,
  onColumnHide,
  onAddColumn,
  onColumnDelete,
  onColumnFreeze,
  hasMoreActions,
  onMoreActionClick,
  moreActions = [],
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div onClick={event => event.stopPropagation()}>
      <Dropdown
        appendTo={() => document.body}
        className="neeto-ui-flex"
        icon={MenuHorizontal}
        position="auto"
        strategy="fixed"
        zIndex={99999}
        buttonProps={{
          className: "neeto-ui-min-h-0 neeto-ui-flex-shrink-0",
          style: "text",
          size: "medium",
          "data-testid": "column-menu-button",
          "data-cy": "column-menu-button",
          "data-dropdown-button-style": "more-dropdown",
        }}
      >
        <Menu
          className="neeto-ui-cursor-auto"
          onMouseDown={event => event.preventDefault()}
        >
          {isSortable && (
            <>
              <MenuItem.Button
                className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-between"
                data-cy="ascending-column-menu-button"
                onClick={() =>
                  onSort({
                    column,
                    columnKey: column.key,
                    field: column.dataIndex || column.key,
                    order: TABLE_SORT_ORDERS.asc,
                  })
                }
              >
                <span>{getLocale(i18n, t, "neetoui.table.ascending")}</span>
                {sortedInfo.order === TABLE_SORT_ORDERS.asc &&
                  sortedInfo.field === column.dataIndex && (
                    <Check className="neeto-ui-text-success-500" size={20} />
                  )}
              </MenuItem.Button>
              <MenuItem.Button
                className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-between"
                data-cy="descending-column-menu-button"
                onClick={() =>
                  onSort({
                    column,
                    columnKey: column.key,
                    field: column.dataIndex,
                    order: TABLE_SORT_ORDERS.desc,
                  })
                }
              >
                <span>{getLocale(i18n, t, "neetoui.table.descending")}</span>
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
                data-cy="insert-right-column-menu-button"
                onClick={() => onAddColumn(COLUMN_ADD_DIRECTION.right)}
              >
                {getLocale(i18n, t, "neetoui.table.insertColRight")}
              </MenuItem.Button>
              <MenuItem.Button
                data-cy="insert-left-column-menu-button"
                onClick={() => onAddColumn(COLUMN_ADD_DIRECTION.left)}
              >
                {getLocale(i18n, t, "neetoui.table.insertColLeft")}
              </MenuItem.Button>
            </>
          )}
          {isHidable && (
            <MenuItem.Button
              data-cy="hide-column-menu-button"
              onClick={() => onColumnHide(column)}
            >
              {getLocale(i18n, t, "neetoui.table.hideColumn")}
            </MenuItem.Button>
          )}
          {isColumnDeletable && (
            <MenuItem.Button
              data-cy="delete-column-menu-button"
              onClick={() => onColumnDelete(column.id)}
            >
              {getLocale(i18n, t, "neetoui.table.deleteColumn")}
            </MenuItem.Button>
          )}
          {isColumnFreezeEnabled && (
            <MenuItem.Button
              data-cy="freeze-unfreeze-column-menu-button"
              onClick={() => onColumnFreeze(isFixedColumn, column)}
            >
              {isFixedColumn
                ? getLocale(i18n, t, "neetoui.table.unFreezeColumn")
                : getLocale(i18n, t, "neetoui.table.freezeColumn")}
            </MenuItem.Button>
          )}
          {hasMoreActions &&
            moreActions.map((item, index) => (
              <MenuItem.Button
                data-cy={`${hyphenize(item.label)}-column-menu-button`}
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
