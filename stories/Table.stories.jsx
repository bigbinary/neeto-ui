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
  const { items, performSort, sortConfig } = useSortTable(TABLE_DATA, {
    key: "",
    direction: "",
  });
  const { key, direction } = sortConfig;
  const isSorted = (headerKey, sortDirection) =>
    key === headerKey && direction === sortDirection;
  return (
    <>
      <Table hasActions hasCheckbox {...args}>
        <Table.Head>
          <Table.Tr>
            {args.hasCheckbox && (
              <Table.Th>
                <Checkbox name="all" />
              </Table.Th>
            )}
            {TABLE_HEADERS.map(({ label, key }, idx) => (
              <Table.Th
                key={idx}
                onClick={() => performSort(key)}
                isAscending={isSorted(key, "ascending")}
                isDescending={isSorted(key, "descending")}
              >
                {label}
              </Table.Th>
            ))}
            <Table.Th />
          </Table.Tr>
        </Table.Head>
        <Table.Body isLoading={isLoading}>
          {items.map(({ name, email, phone_number, pass_year }, idx) => (
            <Table.Tr key={idx}>
              {args.hasCheckbox && (
                <Table.Td>
                  <Checkbox name={idx} />
                </Table.Td>
              )}
              <Table.Td center>{name}</Table.Td>
              <Table.Td center>{email}</Table.Td>
              <Table.Td center>{phone_number}</Table.Td>
              <Table.Td center>{pass_year}</Table.Td>
              {args.hasActions && (
                <Table.Td>
                  <div className="flex flex-row items-center justify-end space-x-3">
                    <Dropdown
                      icon={MenuHorizontal}
                      buttonStyle="text"
                      autoWidth
                    >
                      <li>Edit</li>
                      <li>Delete</li>
                    </Dropdown>
                  </div>
                </Table.Td>
              )}
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export const TableStory = Template.bind({});
TableStory.storyName = "Table";
TableStory.args = {
  hasActions: true,
  hasCheckbox: true,
  isLoading: {
    loading: false,
    rowCount: 50,
    columnCount: 6,
  },
};
