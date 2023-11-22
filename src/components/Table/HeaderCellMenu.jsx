import React from "react";

import { CheckCircle, MenuVertical } from "neetoicons";

import { Dropdown } from "components";

const { Menu, MenuItem } = Dropdown;

const HeaderCellMenu = ({ onSort, columnKey, sortedInfo }) => (
  <div onClick={event => event.stopPropagation()}>
    <Dropdown
      className="flex"
      icon={MenuVertical}
      strategy="fixed"
      buttonProps={{
        className: "min-h-0 flex-shrink-0",
        style: "text",
        size: "small",
      }}
    >
      <Menu>
        <MenuItem.Button
          className="flex items-center justify-between"
          onClick={() => onSort(columnKey, "ascend")}
        >
          <span>Ascending</span>
          {sortedInfo.order === "ascend" &&
            sortedInfo.columnKey === columnKey && <CheckCircle size={14} />}
        </MenuItem.Button>
        <MenuItem.Button
          className="flex items-center justify-between"
          onClick={() => onSort(columnKey, "descend")}
        >
          <span>Desceding</span>
          {sortedInfo.order === "descend" &&
            sortedInfo.columnKey === columnKey && <CheckCircle size={14} />}
        </MenuItem.Button>
      </Menu>
    </Dropdown>
  </div>
);

export default HeaderCellMenu;
