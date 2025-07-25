import React, { useEffect, useState, useMemo } from "react";

import { MenuHorizontal } from "neetoicons";
import { assoc } from "ramda";
import { BrowserRouter } from "react-router-dom";

import { Tooltip, Tag, Avatar, Button, Dropdown, Typography } from "components";
import NeetoTable from "components/Table";

import { getTableSource, TABLE_DATA, SIMPLE_TABLE_DATA } from "../constants";

import MoreActionsOnHeaderDocs from "!raw-loader!./TableStoriesDocs/MoreActionsOnHeaderDocs.mdx";
import TableCSSCustomization from "!raw-loader!./TableStoriesDocs/TableCSSCustomization.mdx";
import TableDocs from "!raw-loader!./TableStoriesDocs/TableDocs.mdx";
import TableFixedHeightDocs from "!raw-loader!./TableStoriesDocs/TableFixedHeightDocs.mdx";
import TableSortingDocs from "!raw-loader!./TableStoriesDocs/TableSortingDocs.mdx";
import TableWithoutCheckboxDocs from "!raw-loader!./TableStoriesDocs/TableWithoutCheckboxDocs.mdx";

const { Menu, MenuItem } = Dropdown;

const metadata = {
  title: "Components/Table",
  component: NeetoTable,
  parameters: {
    layout: "padded",
    docs: { description: { component: TableDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Ebh2R78Ia9FEVpC4tw6d3N/03-Layouts?node-id=602%3A2",
    },
  },
  argTypes: {
    rowData: { control: false },

    columnData: { control: false },
    handlePageChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "-" },
      },
    },
    onColumnUpdate: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "-" },
      },
    },
  },
};

const fixedColumnWidths = [
  { title: "ID", dataIndex: "id", key: "id", width: "25%" },
  { title: "guid", dataIndex: "guid", key: "guid", width: "25%" },
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
        <Tooltip content="Tooltip content goes here" position="top">
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
        <Tooltip content="Tooltip content goes here" position="top">
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
        <Tooltip content="Tooltip content goes here" position="top">
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
        <Tooltip content="Tooltip content goes here" position="top">
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
    fixed: fixed ? "left" : false,
    isHidable: false,
    description:
      "An identifier (ID) is a name given to a variable, function, or other programming language entities to uniquely distinguish it from other entities.",
    render: id => (
      <div className="flex flex-row items-center justify-between gap-2">
        <Typography style="body2">{id}</Typography>
        <Dropdown
          appendTo={document.body}
          buttonStyle="text"
          icon={MenuHorizontal}
          strategy="fixed"
        >
          <Menu>
            <MenuItem.Button>Action</MenuItem.Button>
            <MenuItem.Button>Another action</MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    ),
  },
  {
    title: "GUID",
    description:
      "A globally unique identifier (GUID) is a 128-bit number created by the Windows operating system or another Windows application to uniquely identify specific components, hardware, software, files, user accounts, database entries and other items.",
    fixed: fixed ? "left" : false,
    dataIndex: "guid",
    key: "guid",
    width: 150,
    ellipsis: { showTitle: false },
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    width: 150,
    render: (firstName, lastName) => (
      <div className="flex flex-row items-center">
        <Avatar
          className="mr-2"
          size="small"
          user={{ name: `${firstName} ${lastName}` }}
        />
        {firstName}
      </div>
    ),
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 200,
    ellipsis: { showTitle: false },
  },
  {
    title: "IP Address",
    dataIndex: "ip_address",
    key: "ip_address",
    width: 150,
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    width: 150,
  },
  {
    id: "custom-column-id-credit-card-number",
    title: "Credit Card Number",
    dataIndex: "credit_card_number",
    key: "credit_card_number",
    width: 250,
    isDeletable: true,
    ellipsis: { showTitle: false },
  },
  {
    id: "custom-column-id-shirt-size",
    title: "Shirt Size",
    dataIndex: "shirt_size",
    key: "shirt_size",
    width: 150,
    isDeletable: true,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 150,
    render: () => <Tag label="check" />,
  },
];

const Table = props => (
  <BrowserRouter>
    <NeetoTable {...props} />
  </BrowserRouter>
);

const Default = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Table
      enableAddColumn
      columnData={getColumns()}
      currentPageNumber={pageNumber}
      handlePageChange={page => setPageNumber(page)}
      rowData={TABLE_DATA}
      {...args}
    />
  );
};

Default.args = {
  defaultPageSize: 30,
  onColumnAdd: position => alert(`New Column Position is ${position}`),
  onColumnDelete: columnKey => alert(`Column to be deleted is ${columnKey}`),
};

Default.parameters = { docs: { source: { code: getTableSource() } } };

const TableWithSpecifiedHorizontalScrolling = args => (
  <div className="mx-auto mt-10 w-2/3">
    <Table
      columnData={fixedColumnWidths}
      rowData={SIMPLE_TABLE_DATA}
      scroll={{ x: "100%" }}
      {...args}
    />
  </div>
);

TableWithSpecifiedHorizontalScrolling.storyName =
  "Table with specified width for horizontal scrolling";

const TableWithTooltipsOnHeader = args => (
  <div className="mx-auto mt-10 w-2/3">
    <Table
      columnData={headerTooltips}
      rowData={SIMPLE_TABLE_DATA}
      scroll={{ x: "100%" }}
      {...args}
    />
  </div>
);

TableWithTooltipsOnHeader.storyName = "Table with Tooltips on header";

const TableWithFixedRightColumn = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Table
      columnData={getColumns(true)}
      currentPageNumber={pageNumber}
      handlePageChange={page => setPageNumber(page)}
      rowData={TABLE_DATA}
      {...args}
    />
  );
};

TableWithFixedRightColumn.storyName = "Table with fixed right column";

const TableWithSelectedRowKeys = ({
  selectedRowKeys: selectedRowKeysProp,
  ...args
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState(selectedRowKeysProp);

  useEffect(() => {
    setSelectedRowKeys(selectedRowKeysProp);
  }, [selectedRowKeysProp]);

  return (
    <Table
      columnData={getColumns()}
      currentPageNumber={pageNumber}
      handlePageChange={page => setPageNumber(page)}
      rowData={TABLE_DATA}
      {...{ ...args, selectedRowKeys }}
      rowSelection
      onRowSelect={selectedRowKeys => setSelectedRowKeys(selectedRowKeys)}
    />
  );
};
TableWithSelectedRowKeys.storyName = "Table with selected row keys";
TableWithSelectedRowKeys.args = {
  defaultPageSize: 30,
  selectedRowKeys: [1, 2, 3],
};

TableWithSelectedRowKeys.parameters = {
  docs: {
    source: {
      code: getTableSource("rowSelection \n \tselectedRowKeys={[1, 2, 3]}"),
    },
  },
};

const TableWithBulkSelectAllRowsOption = ({
  selectedRowKeys: selectedRowKeysProp,
  defaultPageSize,
  ...args
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState(selectedRowKeysProp);
  const [bulkSelectedAllRows, setBulkSelectedAllRows] = useState(false);

  const rowData = TABLE_DATA.slice(
    (pageNumber - 1) * defaultPageSize,
    pageNumber * defaultPageSize
  );

  return (
    <>
      <Typography className="mb-2" style="h4">
        Selected{" "}
        {bulkSelectedAllRows ? TABLE_DATA.length : selectedRowKeys.length} of{" "}
        {TABLE_DATA.length} users
      </Typography>
      <Table
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        // Mimicking data-source coming from api call and at a time only defaultPageSize rows are present
        handlePageChange={page => setPageNumber(page)}
        {...{ ...args, defaultPageSize, rowData, selectedRowKeys }}
        rowSelection
        bulkSelectAllRowsProps={{
          setBulkSelectedAllRows,
          selectAllRowMessage: `All ${rowData.length} users on this page are selected`,
          selectAllRowButtonLabel: `Select all ${TABLE_DATA.length} users`,
        }}
        onRowSelect={selectedRowKeys => setSelectedRowKeys(selectedRowKeys)}
      />
    </>
  );
};

TableWithBulkSelectAllRowsOption.storyName =
  "Table with bulk select all rows option";

TableWithBulkSelectAllRowsOption.args = {
  defaultPageSize: 15,
  selectedRowKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  bulkSelectAllRowsProps: {},
  totalCount: TABLE_DATA.length,
};

const TableWithSorting = args => (
  <Table
    columnData={getColumns()}
    currentPageNumber={1}
    rowData={TABLE_DATA}
    {...args}
  />
);
TableWithSorting.storyName = "Table with sorting";
TableWithSorting.parameters = {
  docs: {
    description: { story: TableSortingDocs },
    source: { code: null },
  },
};

TableWithSorting.args = { defaultPageSize: 10 };

const TableWithFixedHeight = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div style={{ height: "600px" }}>
      <Table
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        {...args}
      />
    </div>
  );
};
TableWithFixedHeight.storyName = "Table with fixed height";
TableWithFixedHeight.args = {
  defaultPageSize: 30,
  fixedHeight: true,
};

TableWithFixedHeight.parameters = {
  docs: {
    description: { story: TableFixedHeightDocs },
    source: { code: getTableSource("fixedHeight") },
  },
};

const TableWithoutCheckbox = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="h-96">
      <Table
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        {...args}
      />
    </div>
  );
};
TableWithoutCheckbox.storyName = "Table without checkbox";
TableWithoutCheckbox.args = { rowSelection: false };

TableWithoutCheckbox.parameters = {
  docs: {
    description: { story: TableWithoutCheckboxDocs },
    source: { code: getTableSource("rowSelection={false}") },
  },
};

const TableWithDynamicData = args => {
  const [pageNumber, setPageNumber] = useState(1);
  const [slice, setSlice] = useState(20);
  const data = TABLE_DATA.slice(0, slice);

  return (
    <div className="flex flex-col items-start space-y-3">
      <Button
        label="Slice the data"
        onClick={() => setSlice(slice === 20 ? 5 : 20)}
      />
      <Table
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={data}
        {...args}
      />
    </div>
  );
};
TableWithDynamicData.storyName = "Table with dynamic data";
TableWithDynamicData.args = { defaultPageSize: 10 };

const TableWithResizableColumns = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="h-96">
      <Table
        enableColumnResize
        virtual
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        onColumnUpdate={() => {
          alert("Columns changed");
        }}
        {...args}
      />
    </div>
  );
};
TableWithResizableColumns.storyName = "Table with resizable columns";
TableWithResizableColumns.args = { defaultPageSize: 10 };

const TableWithReordableColumns = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="h-96">
      <Table
        enableColumnReorder
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        onColumnUpdate={() => {
          alert("Columns changed");
        }}
        {...args}
      />
    </div>
  );
};
TableWithReordableColumns.storyName = "Table with reorderable columns";
TableWithReordableColumns.args = { defaultPageSize: 10 };

const TableWithColumnDescriptionPopover = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="h-96">
      <Table
        enableColumnReorder
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        {...args}
      />
    </div>
  );
};

TableWithColumnDescriptionPopover.storyName =
  "Table with column description popover";
TableWithColumnDescriptionPopover.args = { defaultPageSize: 10 };

const TableWithColumnWithHideColumnOption = args => {
  const [pageNumber, setPageNumber] = useState(1);
  const [columns, setColumns] = useState(getColumns());

  return (
    <div className="h-96">
      <Table
        enableColumnReorder
        columnData={columns}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        onColumnHide={({ key: columnKey }) => {
          setColumns(columns.filter(({ key }) => key !== columnKey));
        }}
        {...args}
      />
    </div>
  );
};

TableWithColumnWithHideColumnOption.storyName = "Table with hide column option";
TableWithColumnWithHideColumnOption.args = { defaultPageSize: 10 };

const TableWithMoreActionOnHeader = args => {
  const [pageNumber, setPageNumber] = useState(1);

  const columns = useMemo(
    () =>
      getColumns().map(
        assoc("moreActions", [
          { type: "action1", label: "Action 1" },
          { type: "action2", label: "Action 2" },
        ])
      ),
    []
  );

  return (
    <div className="h-96">
      <Table
        enableColumnReorder
        columnData={columns}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        onMoreActionClick={(type, { key }) => {
          alert(`${type} clicked on ${key}`);
        }}
        {...args}
      />
    </div>
  );
};

TableWithMoreActionOnHeader.storyName = "Table with more actions on header";
TableWithMoreActionOnHeader.args = { defaultPageSize: 10 };
TableWithMoreActionOnHeader.parameters = {
  docs: {
    description: { story: MoreActionsOnHeaderDocs },
    source: {
      code: getTableSource("onMoreActionClick={(type, column) => {}}"),
    },
  },
};

const CSSCustomization = args => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="neetix-table">
      <Table
        columnData={getColumns()}
        currentPageNumber={pageNumber}
        handlePageChange={page => setPageNumber(page)}
        rowData={TABLE_DATA}
        {...args}
      />
    </div>
  );
};
CSSCustomization.storyName = "Table CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: TableCSSCustomization } },
};

export {
  Default,
  TableWithSpecifiedHorizontalScrolling,
  TableWithTooltipsOnHeader,
  TableWithFixedRightColumn,
  TableWithSelectedRowKeys,
  TableWithBulkSelectAllRowsOption,
  TableWithSorting,
  TableWithFixedHeight,
  TableWithoutCheckbox,
  TableWithDynamicData,
  TableWithResizableColumns,
  TableWithReordableColumns,
  TableWithColumnDescriptionPopover,
  TableWithColumnWithHideColumnOption,
  TableWithMoreActionOnHeader,
  CSSCustomization,
};

export default metadata;
