import React, { useState } from "react";
import { Edit, Delete } from "@bigbinary/neeto-icons";

import Header from "../Header";
import { TABLE_DATA } from "./constants";
import { Table, Tooltip, Tag, Avatar, Button } from "../../../lib/components";

const NeetoTable = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const parentContainerRef = React.useRef(null);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 75,
      sorter: true,
    },
    {
      title: "GUID",
      dataIndex: "guid",
      key: "guid",
      width: 150,
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Name",
      dataIndex: "first_name",
      key: "first_name",
      width: 250,
      render: (first_name, { last_name }) => {
        return (
          <div className="flex flex-row items-center">
            <Avatar
              user={{ name: `${first_name} ${last_name}` }}
              size="small"
              className="mr-2"
            />
            {first_name} {last_name}
          </div>
        );
      },
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
      render: (email) => email ?? "--",
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
      title: () => (
        <Tooltip content="IP Address can be used to track" position="top">
          <div>IP Address</div>
        </Tooltip>
      ),
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
      title: "Tag",
      dataIndex: "action",
      key: "action",
      render: () => <Tag label="check" />,
    },
    {
      dataIndex: "icon_button",
      key: "icon_button",
      render: () => (
        <div className="flex flex-row space-x-2">
          <Button
            icon={() => <Edit size={16} />}
            onClick={(e) => {
              alert("Edit Action Clicked.");
              e.stopPropagation();
            }}
            style="text"
          />
          <Button
            icon={() => <Delete size={16} />}
            onClick={(e) => {
              alert("Delete Action Clicked.");
              e.stopPropagation();
            }}
            style="text"
          />
        </div>
      ),
    },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(pagination, filters, sorter);
  };

  return (
    <div className="w-full">
      <Header title="Table" />
      <div
        className="mx-auto mt-6 space-y-6"
        style={{ height: "calc(100vh - 80px - 24px)" }}
        ref={parentContainerRef}
      >
        <Table
          allowRowSelection={false}
          rowData={TABLE_DATA}
          columnData={columns}
          onRowSelect={(selectedRowKeys, selectedRows) =>
            alert(
              `Rows selected ${selectedRowKeys} with details ${JSON.stringify(
                selectedRows
              )}`
            )
          }
          rowSelection={false}
          defaultPageSize={20}
          currentPageNumber={pageNumber}
          handlePageChange={(page, pageSize) => setPageNumber(page)}
          onChange={(pagination, filters, sorter) =>
            handleTableChange(pagination, filters, sorter)
          }
          onRowClick={(event, record, rowIndex) =>
            alert(
              `You have clicked row ${rowIndex} with details ${JSON.stringify(
                record
              )}}`
            )
          }
          parentContainerRef={parentContainerRef}
        />
      </div>
    </div>
  );
};

export default NeetoTable;
