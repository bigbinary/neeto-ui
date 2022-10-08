import React, { useState } from "react";
import { Plus } from "@bigbinary/neeto-icons";


import Columns from "../../lib/molecules/Columns";
import Button from "../../lib/components/Button";
import Table from "../../lib/components/Table";

const DEFAULT_COLUMNS_DATA = [
  {
    dataIndex: "name",
    key: "name",
    name: "Name",
    title: "Name",
    width: "30%",
  },
  {
    dataIndex: "email",
    key: "email",
    name: "Email",
    title: "Email",
    width: "30%",
  },
  {
    dataIndex: "created_at",
    key: "created_at",
    name: "Created At",
    title: "Created At",
    width: "20%",
  },
  {
    dataIndex: "role",
    key: "role",
    name: "Role",
    title: "Role",
    width: "20%",
  },
];

const DEFAULT_ROW_DATA = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    created_at: "2020-01-01",
    role: "Admin",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    created_at: "2020-01-01",
    role: "Admin",
  },
];

export default {
  title: "Molecules/Columns",
  component: Columns,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Columns } from "@bigbinary/neetoui/molecules";`',
      },
    },
  },
};

const Template = (args) => {
  const [columnData, setColumnData] = useState(DEFAULT_COLUMNS_DATA);

  return (
    <div className="p-4 mb-2 h-80">
      <div className="flex flex-row justify-end">
        <Columns {...args} setColumns={(columns) => setColumnData(columns)} />
      </div>
      <Table columnData={columnData} rowData={DEFAULT_ROW_DATA} />
    </div>
  );
};

export const Default = Template.bind();
Default.args = {
  columnData: DEFAULT_COLUMNS_DATA,
  localStorageKey: "neeto-ui-hidden-columns",
};

export const WithFixedColumns = Template.bind();
WithFixedColumns.storyName = "With fixed columns";
WithFixedColumns.parameters = {
  docs: {
    description: {
      story:
        "If you want some columns to be always visible, then add those columns to the `fixedColumns` prop. The `dataIndex` prop is used to identify the column. In the example below, the `email` column will be always visible.",
    },
  },
};
WithFixedColumns.args = {
  columnData: DEFAULT_COLUMNS_DATA,
  localStorageKey: "neeto-ui-hidden-columns",
  fixedColumns: ["email"],
};

export const WithActionBlock = Template.bind();
WithActionBlock.storyName = "With action block";
WithActionBlock.parameters = {
  docs: {
    description: {
      story: "Action block is a block where you can add custom components. It can be used to add a button or any other component.",
    },
  },
};
WithActionBlock.args = {
  columnData: DEFAULT_COLUMNS_DATA,
  localStorageKey: "neeto-ui-hidden-columns",
  actionBlock: (
    <div className="flex w-full flex-col px-3 py-2">
      <Button
        fullWidth
        className="mb-2"
        icon={Plus}
        label="Add Columns"
        size="medium"
        onClick={() => { }}
      />
      <Button
        fullWidth
        label="Manage Columns"
        size="medium"
        style="text"
        onClick={() => { }}
      />
    </div>)
};

export const WithSearchInput = Template.bind();
WithSearchInput.storyName = "With search input";
WithSearchInput.parameters = {
  docs: {
    description: {
      story: "To enable the search functionality, please provide the `isSearchable` prop. It is disabled by default.",
    },
  },
};
WithSearchInput.args = {
  columnData: DEFAULT_COLUMNS_DATA,
  localStorageKey: "neeto-ui-hidden-columns",
  isSearchable: true,
};
