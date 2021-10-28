import React from "react";
import { Table, Tag, Avatar } from "../../../lib/components";
import { TABLE_DATA } from "./constants";
import Header from "../Header";

const Tabs = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 75,
      sorter: (a, b) => a.id - b.id,
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
      render: () => (
        <>
          <Tag label="check" />
        </>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Header title="Table" />
      <div className="w-10/12 mx-auto mt-6 space-y-6">
        <Table
          rowData={TABLE_DATA}
          columnData={columns}
          onRowClick={(selectedRowKeys, selectedRows) =>
            console.log(selectedRowKeys, selectedRows)
          }
          scrollOffset={{ x: 3000, y: 500 }}
        />
      </div>
    </div>
  );
};

export default Tabs;
