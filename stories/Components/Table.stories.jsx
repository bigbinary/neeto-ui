import React, { useEffect, useState, useRef } from "react";
import { MenuHorizontal, Search, Settings, Plus } from "@bigbinary/neeto-icons";

import { getTableSource, TABLE_DATA, TABLE_IN_LAYOUT, SIMPLE_TABLE_DATA } from "../constants";
import TableDocs from "!raw-loader!./TableStoriesDocs/TableDocs.mdx";
import TableSortingDocs from "!raw-loader!./TableStoriesDocs/TableSortingDocs.mdx";
import LayoutDocs from "!raw-loader!./TableStoriesDocs/LayoutTableDocs.mdx";
import TableFixedHeightDocs from "!raw-loader!./TableStoriesDocs/TableFixedHeightDocs.mdx";
import TableWithoutCheckboxDocs from "!raw-loader!./TableStoriesDocs/TableWithoutCheckboxDocs.mdx";

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
        component: TableDocs,
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Ebh2R78Ia9FEVpC4tw6d3N/03-Layouts?node-id=602%3A2",
    },
  },
  argTypes:{
    rowData: {
      control: false,
    },

    columnData: {
      control: false,
    },
    handlePageChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "-" }
      }
    },
  }
};

const fixedColumnWidths = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: "25%",
  },
  {
    title: "guid",
    dataIndex: "guid",
    key: "guid",
    width: "25%",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    width: "25%",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    width: "25%",
  }, 
];

const headerTooltips = [
  {
    title: () => (
      <div className="text-left">
        <Tooltip content="Tooltip content goes here">
          <span>ID</span>
        </Tooltip>
      </div>
    ),
    dataIndex: "id",
    key: "id",
    width: "25%",
  },
  {
    title: () => (
      <div className="text-left">
        <Tooltip content="Tooltip content goes here">
          <span>guid</span>
        </Tooltip>
      </div>
    ),
    dataIndex: "guid",
    key: "guid",
    width: "25%",
  },
  {
    title: () => (
      <div className="text-left">
        <Tooltip content="Tooltip content goes here">
          <span>First Name</span>
        </Tooltip>
      </div>
    ),
    dataIndex: "first_name",
    key: "first_name",
    width: "25%",
  },
  {
    title: () => (
      <div className="text-left">
        <Tooltip content="Tooltip content goes here">
          <span>Last Name</span>
        </Tooltip>
      </div>
    ),
    dataIndex: "last_name",
    key: "last_name",
    width: "25%",
  }, 
];

const getColumns = (fixed = false) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 175,
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
    render: (firstName, lastName) => {
      return (
        <div className="flex flex-row items-center">
          <Avatar
            user={{ name: `${firstName} ${lastName}` }}
            size="small"
            className="mr-2"
          />
          {firstName}
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
    fixed: fixed ? "right" : undefined,
    render: () => {
      const { Menu, MenuItem } = Dropdown;
      return (
        <Dropdown
          icon={MenuHorizontal}
          buttonStyle="text"
          strategy="fixed"
          appendTo={fixed ? () => document.body : undefined}
        >
          <Menu>
            <MenuItem.Button>Action</MenuItem.Button>
            <MenuItem.Button>Another action</MenuItem.Button>
          </Menu>
        </Dropdown>
      );
    },
  },
];

export const Default = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <NeetoTable
      columnData={getColumns()}
      rowData={TABLE_DATA}
      currentPageNumber={pageNumber}
      handlePageChange={(page, pageSize) => setPageNumber(page)}
      {...args}
    />
  );
};

Default.args = {
  defaultPageSize: 10,
};

Default.parameters = {
  docs: {
    source: {
      code: getTableSource(),
    },
  },
};

export const TableWithSpecifiedHorizontalScrolling = (args) => {
  return (
    <div className="w-2/3 mx-auto mt-10">
      <NeetoTable
        scroll={{ x: "100%" }}
        columnData={fixedColumnWidths}
        rowData={SIMPLE_TABLE_DATA}
        {...args}
      />
    </div>
  );
};

TableWithSpecifiedHorizontalScrolling.storyName = "Table with specified width for horizontal scrolling";

export const TableWithTooltipsOnHeader = (args) => {
  return (
    <div className="w-2/3 mx-auto mt-10">
      <NeetoTable
        scroll={{ x: "100%" }}
        columnData={headerTooltips}
        rowData={SIMPLE_TABLE_DATA}
        {...args}
      />
    </div>
  );
};

TableWithTooltipsOnHeader.storyName = "Table with Tooltips on header";


export const TableWithFixedRightColumn = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <NeetoTable
      columnData={getColumns(true)}
      rowData={TABLE_DATA}
      currentPageNumber={pageNumber}
      handlePageChange={(page, pageSize) => setPageNumber(page)}
      {...args}
    />
  );
};

TableWithFixedRightColumn.storyName = "Table with fixed right column";

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
      columnData={getColumns()}
      rowData={TABLE_DATA}
      currentPageNumber={pageNumber}
      handlePageChange={(page) => setPageNumber(page)}
      {...args}
      selectedRowKeys={selectedRowKeys}
      onRowSelect={(selectedRowKeys) => setSelectedRowKeys(selectedRowKeys)}
      rowSelection
    />
  );
};
TableWithSelectedRowKeys.storyName = "Table with selected row keys";
TableWithSelectedRowKeys.args = {
  defaultPageSize: 10,
  selectedRowKeys: [1, 2, 3],
};
TableWithSelectedRowKeys.parameters = {
  docs: {
    source: {
      code: getTableSource("rowSelection \n \tselectedRowKeys={[1, 2, 3]}"),
    },
  },
};

export const TableWithSorting = (args) => {
  return (
    <NeetoTable
      columnData={getColumns()}
      rowData={TABLE_DATA}
      currentPageNumber={1}
      {...args}
    />
  );
};
TableWithSorting.storyName = "Table with sorting";
TableWithSorting.parameters = {
  docs: {
    description: { story: TableSortingDocs },
    source: {
      code: null,
    },
  },
};
TableWithSorting.args = {
  defaultPageSize: 10,
};

export const TableWithFixedHeight = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="h-96">
      <NeetoTable
        columnData={getColumns()}
        rowData={TABLE_DATA}
        currentPageNumber={pageNumber}
        handlePageChange={(page) => setPageNumber(page)}
        {...args}
      />
    </div>
  );
};
TableWithFixedHeight.storyName = "Table with fixed height";
TableWithFixedHeight.args = {
  defaultPageSize: 10,
  fixedHeight: true,
};
TableWithFixedHeight.parameters = {
  docs: {
    description: { story: TableFixedHeightDocs },
    source: {
      code: getTableSource("fixedHeight"),
    },
  },
};

export const TableWithoutCheckbox = (args) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="h-96">
      <NeetoTable
        columnData={getColumns()}
        rowData={TABLE_DATA}
        currentPageNumber={pageNumber}
        handlePageChange={(page) => setPageNumber(page)}
        {...args}
      />
    </div>
  );
};
TableWithoutCheckbox.storyName = "Table without checkbox";
TableWithoutCheckbox.args = {
  rowSelection: false,
};
TableWithoutCheckbox.parameters = {
  docs: {
    description: { story: TableWithoutCheckboxDocs },
    source: {
      code: getTableSource("rowSelection={false}"),
    },
  },
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
        columnData={getColumns()}
        rowData={data}
        currentPageNumber={pageNumber}
        handlePageChange={(page) => setPageNumber(page)}
        {...args}
      />
    </div>
  );
};
TableWithDynamicData.storyName = "Table with dynamic data";
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
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
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
              onClick: () =>
                setIsSearchCollapsed((isSearchCollapsed) => !isSearchCollapsed),
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
          <NeetoTable
            loading={isLoading}
            columnData={getColumns()}
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
TableInLayout.storyName = "Table inside layout";
TableInLayout.parameters = {
  layout: "fullscreen",
  docs: {
    description: { story: LayoutDocs },
    source: { code: TABLE_IN_LAYOUT },
  },
};
