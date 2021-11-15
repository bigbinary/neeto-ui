import React, { useState } from "react";
import { MenuVertical } from "@bigbinary/neeto-icons";

import { TABLE_DATA } from "../constants";
import TableDocs from "!raw-loader!./TableDocs.mdx";
import NeetoTable from "../../lib/components/Table";
import { Tooltip, Tag, Avatar, Button } from "../../lib/components";

export default {
  title: "Components/Table",
  component: NeetoTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Table } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 75,
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: () => (
      <div className="text-left">
        <Tooltip content="A globally unique identifier (GUID) is a 128-bit number created by the Windows operating system or another Windows application to uniquely identify specific components, hardware, software, files, user accounts, database entries and other items.">
          <span>GUID</span>
        </Tooltip>
      </div>
    ),
    dataIndex: "guid",
    key: "guid",
    width: 150,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    width: 150,
    render: (first_name, last_name) => {
      return (
        <div className="flex flex-row items-center">
          <Avatar
            user={{ name: `${first_name} ${last_name}` }}
            size="small"
            className="mr-2"
          />
          {first_name}
        </div>
      );
    },
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    width: 150,
  },
  {
    title: "Buzzword",
    dataIndex: "buzzword",
    key: "buzzword",
    width: 250,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 200,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Company Name",
    dataIndex: "company_name",
    key: "company_name",
    ellipsis: {
      showTitle: false,
    },
    width: 75,
  },
  {
    title: "IP Address",
    dataIndex: "ip_address",
    key: "ip_address",
    width: 150,
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
  },
  {
    title: "Job Title",
    dataIndex: "job_title",
    key: "job_title",
    ellipsis: {
      showTitle: false,
    },
    width: 75,
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    width: 150,
  },
  {
    title: "Credit Card Number",
    dataIndex: "credit_card_number",
    key: "credit_card_number",
    width: 250,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Currency Code",
    dataIndex: "currency_code",
    key: "currency_code",
    width: 150,
  },
  {
    title: "Domain Name",
    dataIndex: "domain_name",
    key: "domain_name",
    ellipsis: {
      showTitle: false,
    },
    width: 200,
  },
  {
    title: "App Name",
    dataIndex: "app_name",
    key: "app_name",
    width: 150,
  },
  {
    title: "App Version",
    dataIndex: "app_version",
    key: "app_version",
    width: 150,
  },

  {
    title: "Shirt Size",
    dataIndex: "shirt_size",
    key: "shirt_size",
    width: 150,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 150,
    render: () => (
      <>
        <Tag label="check" />
      </>
    ),
  },
  {
    title: "Icon Button",
    dataIndex: "icon_button",
    key: "icon_button",
    width: 150,
    render: () => (
      <>
        <Button
          icon={() => <MenuVertical />}
          onClick={() => alert("Edit Action Clicked.")}
          style="text"
        />
      </>
    ),
  },
];

export const Table = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <NeetoTable
      columnData={columns}
      rowData={TABLE_DATA}
      currentPageNumber={pageNumber}
      handlePageChange={(page, pageSize) => setPageNumber(page)}
      {...args}
    />
  );
};

export const TableProps = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <NeetoTable
      columnData={columns}
      rowData={TABLE_DATA}
      currentPageNumber={pageNumber}
      handlePageChange={(page, pageSize) => setPageNumber(page)}
      {...args}
    />
  );
};

TableProps.parameters = {
  docs: { description: { story: TableDocs } },
};

Table.args = {
  defaultPageSize: 10,
};
TableProps.args = {
  defaultPageSize: 10,
};
