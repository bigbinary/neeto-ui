import React, { useMemo, useState } from "react";
import { MenuHorizontal } from "@bigbinary/neeto-icons";

import Table from "../lib/components/Table";
import Checkbox from "../lib/components/Checkbox";
import Dropdown from "../lib/components/Dropdown";
import { TABLE_HEADERS, TABLE_DATA } from "../example/src/constants";

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Table } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const useSortTable = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const performSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, performSort, sortConfig };
};

const Template = ({ isLoading, ...args }) => {
  const { items, performSort, sortConfig } = useSortTable(TABLE_DATA, { key: "", direction: "" });
  const { key, direction } = sortConfig;
  const isSorted = (headerKey, sortDirection) => key === headerKey && direction === sortDirection;
  return (
    <>
      <Table hasActions hasCheckbox {...args}>
        <Table.Head>
          <Table.TR>
            <Table.TH>
            <Checkbox name="all" />
            </Table.TH>
            {TABLE_HEADERS.map(({ label, key }, idx) => (
              <Table.TH
                key={idx}
                onClick={() => performSort(key)}
                isAscending={isSorted(key, "ascending")}
                isDescending={isSorted(key, "descending")}
              >
                {label}
              </Table.TH>
            ))}
            <Table.TH />
          </Table.TR>
        </Table.Head>
        <Table.Body
          isLoading={isLoading}
        >
          {items.map(({ name, email, phone_number, pass_year }, idx) => (
            <Table.TR key={idx}>
              <Table.TD>
                <Checkbox name={idx} />
              </Table.TD>
              <Table.TD center>{name}</Table.TD>
              <Table.TD center>{email}</Table.TD>
              <Table.TD center>{phone_number}</Table.TD>
              <Table.TD center>{pass_year}</Table.TD>
              <Table.TD>
                <div className="flex flex-row items-center justify-end space-x-3">
                  <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
                    <li>Edit</li>
                    <li>Delete</li>
                  </Dropdown>
                </div>
              </Table.TD>
            </Table.TR>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export const TableStory = Template.bind({})
TableStory.storyName = "Table";
TableStory.args = {
  hasActions: true,
  hasCheckbox: true,
  isLoading: {
    loading: false,
    rowCount: 50,
    columnCount: 6
  }
}