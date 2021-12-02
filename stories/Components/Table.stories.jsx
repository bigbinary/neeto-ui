import React, { useEffect, useState } from "react";
import { MenuHorizontal, Search, Settings, Plus } from "@bigbinary/neeto-icons";

import { TABLE_DATA } from "../constants";
import TableDocs from "!raw-loader!./TableDocs.mdx";
import LayoutDocs from "!raw-loader!./LayoutTableDocs.mdx";
import NeetoTable from "../../lib/components/Table";
import {
  Tooltip,
  Tag,
  Avatar,
  Button,
  Typography,
  Dropdown,
} from "../../lib/components";
import {
  Container,
  Scrollable,
  MenuBar,
  Header,
  SubHeader,
} from "../../lib/components/layouts";

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
      <Dropdown icon={MenuHorizontal} buttonStyle="text" strategy="fixed">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </Dropdown>
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

Table.args = {
  defaultPageSize: 10,
};

export const TableWithSelectedRowKeys = ({
  selectedRowKeys: selectedRowKeysProp,
  ...args
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState(selectedRowKeysProp);

  useEffect(() => {
    setSelectedRowKeys(selectedRowKeysProp);
  }, [selectedRowKeysProp]);

  return (
    <NeetoTable
      columnData={columns}
      rowData={TABLE_DATA}
      currentPageNumber={pageNumber}
      handlePageChange={(page) => setPageNumber(page)}
      {...args}
      selectedRowKeys={selectedRowKeys}
      onRowSelect={(selectedRowKeys) => setSelectedRowKeys(selectedRowKeys)}
    />
  );
};

TableWithSelectedRowKeys.args = {
  defaultPageSize: 10,
  selectedRowKeys: [1, 2, 3],
};

export const TableProps = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <NeetoTable
      columnData={columns}
      rowData={TABLE_DATA}
      currentPageNumber={pageNumber}
      handlePageChange={(page) => setPageNumber(page)}
      {...args}
    />
  );
};

TableProps.parameters = {
  docs: { description: { story: TableDocs } },
};

TableProps.args = {
  defaultPageSize: 10,
};

export const TableWithFixedHeight = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="max-h-96">
      <NeetoTable
        columnData={columns}
        rowData={TABLE_DATA}
        currentPageNumber={pageNumber}
        handlePageChange={(page) => setPageNumber(page)}
        {...args}
      />
    </div>
  );
};

TableWithFixedHeight.args = {
  defaultPageSize: 10,
  fixedHeight: true,
};

export const TableWithDynamicData = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [slice, setSlice] = useState(20);
  const data = TABLE_DATA.slice(0, slice);
  return (
    <div className="flex flex-col items-start space-y-3">
      <Button
        label="Slice the data"
        onClick={() => setSlice(slice === 20 ? 5 : 20)}
      />
      <NeetoTable
        columnData={columns}
        rowData={data}
        currentPageNumber={pageNumber}
        handlePageChange={(page) => setPageNumber(page)}
        {...args}
      />
    </div>
  );
};

TableWithDynamicData.args = {
  defaultPageSize: 10,
};

export const TableInLayout = (args) => {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const rowData = TABLE_DATA.slice(0, 101);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex">
      <MenuBar
        showMenu={showMenu}
        title={
          <div className="flex justify-between">
            <Typography style="h2">Contacts</Typography>
          </div>
        }
      >
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Users" count={2} />
        <MenuBar.Block label="Leads" count={7} />
        <MenuBar.Block label="Visitors" count={4} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.AddNew label="Add New Segments" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Settings size={20} />,
            },
            {
              icon: () => <Plus size={20} />,
            },
            {
              icon: () => <Search size={20} />,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.AddNew label="Add New Tag" />

        <MenuBar.Item
          label="General"
          description="Welcome Message, KB and Labels "
        />
        <MenuBar.Item
          label="Styling"
          active
          description="Brand Color, Logo and Widget Position"
        />
        <MenuBar.Item
          label="Widget Icon"
          description="Position, Icon and Label"
        />
      </MenuBar>
      <Container>
        <Header
          title={
            <div className="flex items-center">
              <h3>Layout</h3>
            </div>
          }
          menuBarToggle={() => setShowMenu(!showMenu)}
          actionBlock={<Button label="Primary Action" />}
        />
        <SubHeader
          searchProps={{
            value: searchString,
            onChange: (e) => setSearchString(e.target.value),
          }}
          deleteButtonProps={{
            count: 0,
            selectedIDs: [],
            onClick: () => {},
          }}
          disableButtonProps={{
            count: 0,
            selectedIDs: [],
            onClick: () => {},
          }}
        />
        <Scrollable className="w-full">
          <Table
            isLoading={isLoading}
            columnData={columns}
            rowData={rowData}
            defaultPageSize={10}
            currentPageNumber={pageNumber}
            handlePageChange={(page) => setPageNumber(page)}
            fixedHeight
          />
        </Scrollable>
      </Container>
    </div>
  );
};

TableInLayout.parameters = {
  layout: "fullscreen",
  docs: { description: { story: LayoutDocs } },
};
