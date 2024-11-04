import React, { useEffect, useState, useMemo } from "react";

import { MenuHorizontal } from "neetoicons";
import { assoc } from "ramda";
import { BrowserRouter } from "react-router-dom";

import { Tooltip, Tag, Avatar, Button, Dropdown, Typography } from "components";
import NeetoTable from "components/Table";

import { getTableSource, TABLE_DATA, SIMPLE_TABLE_DATA } from "../constants";

const description = `
\`import { Table } from "@bigbinary/neetoui";\`

\`Table\` is an arrangement of rows and columns used to display data in a
structured and readable format.

We use Ant Design's \`Table\` component under the hood. For extra customization,
refer [AntD Table](https://ant.design/components/table/).

\`\`\`jsx
const columnData = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 75,
    sorter: (a, b) => a.id - b.id,
  },
  // Other column definitions
];

const rowData = [
  {
    id: 1,
    // Data for other columns
  },
  {
    id: 2,
    // Data for other columns
  },

  // Other rows
];

<Table columnData={columnData} rowData={rowData} />;
\`\`\`

##### columnData <a id="column_data" />

Unlike Antd Table \`columnData\` prop is used to set the column definition.

\`\`\`jsx
const columnData = [
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    width: 150,
    // the 'key' property from all the columns is available as the argument to the render method
    render: (first_name, last_name) => {
      return (
        <div className="flex flex-row items-center">
          <Avatar
            user={{ name: \`\${first_name} \${last_name}\` }}
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
  // other columns
];
\`\`\`

Keys for a column definition:

- \`title\` : The title of a column. Accepts a valid React Node(string | number |
  JSX) or a callback that returns a React Node. A hash with \`sortOrder\`,
  \`sortColumn\` and \`filters\` as keys are available as a parameter to the
  callback.
- \`dataIndex\` : The unique key over which, the row data is mapped over for the
  particular column. Accepts a string or an array of strings.
- \`key\` : Unique identifier of a column. Accepts a string.
- \`render\` : Defines how data should be rendered within the column. Accepts a
  callback that returns a React Node.
- \`width\` : Width of a column. Accepts a string or a number. Default value is
  \`auto\`.

Refer [column docs](https://ant.design/components/table/#Column) from AntD for
more customizations.

#### Using dropdown inside the Table

While using \`Dropdown\` inside the Table, it is recommended to pass the
\`strategy\` prop as \`fixed\` for the \`Dropdown\` component, in order to avoid the
dropdown getting hidden by the Table container overflow. Especially for tables
with very few rows of data.

##### With fixed columns

While using a \`Dropdown\` inside fixed columns, to avoid clipping or \`z-index\`
issues, please use \`appendTo={() => document.body}\` along with the
\`strategy="fixed"\` props for the \`Dropdown\`.

#### Better support and performance on horizontal scroll

To support cross browser horizontal scroll and improve performance, we recommend
to provide a width to the columns to the \`Table\`. Having a width on the columns
will also prevent the \`ResizeObserver - limit exceeded\` error.

\`\`\`jsx
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
];

const UserTable = () => (
  <Table
    columnData={columns}
    // other props
  />
);
\`\`\`
`;

const { Menu, MenuItem } = Dropdown;

const metadata = {
  title: "Components/Table",
  component: NeetoTable,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Ebh2R78Ia9FEVpC4tw6d3N/03-Layouts?node-id=602%3A2",
    },
  },
  argTypes: {
    allowRowClick: {
      description: "Enables row click event. Accepts boolean values.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    shouldDynamicallyRenderRowSize: {
      description:
        "Dynamically renders the number of rows based on the viewport height.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    className: {
      description: "Custom classnames for each row.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    fixedHeight: {
      description: "To make the Table fixed height.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    columnData: {
      description:
        "Columns of the Table. Accepts an array of [column definitions](#column_data).",
      control: "object",
      table: { type: { summary: "array" } },
      required: true,
    },
    currentPageNumber: {
      description: "Active page number.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    defaultPageSize: {
      description: "Sets the number of rows in a page.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    handlePageChange: {
      description:
        "Handles page change events. Accepts a callback with `page` and `pageSize` as parameters. If not provided, component will handle page query parameters.\n\n`handlePageChange={(page, pageSize) => {}}`",
      control: "function",
      table: { type: { summary: "func" } },
    },
    loading: {
      description: "Show loading state in Table.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    onRowClick: {
      description:
        "Handles click event on each row. Accepts a callback with `event`, `record`, and `index` as parameters.\n\n`onRowClick={(event, record, rowIndex) => {}}`",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onRowSelect: {
      description:
        "Handles select event on each row. Accepts a callback with `selectedRowKeys` and `selectedRows` as parameters. Make sure to pass `id` in `rowData` for this to work.\n`onRowSelect={(selectedRowKeys, selectedRows) => {}}`",
      control: "function",
      table: { type: { summary: "func" } },
    },
    selectedRowKeys: {
      description: "Keys of the rows that are selected.",
      control: "object",
      table: { type: { summary: "array" } },
    },
    paginationProps: {
      description:
        "Additional props for pagination. Refer [pagination docs](https://ant.design/components/pagination/#API) from AntD Table.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    rowData: {
      description:
        "Data for rows to be displayed. Accepts an array of JavaScript Objects.",
      control: "object",
      table: { type: { summary: "array" } },
      required: true,
    },
    totalCount: {
      description: "Total number of data items.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    enableColumnResize: {
      description: "Enables resizing of columns. Accepts boolean values.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    enableColumnReorder: {
      description: "Enables reordering of columns. Accepts boolean values.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    enableAddColumn: {
      description:
        "Enables adding of columns to the left or right of the current column. Accepts boolean values.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    onColumnUpdate: {
      description:
        "Handles column update events. Accepts a callback with `columns` as parameters.\n\n`onColumnUpdate={(columns) => {}}`",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onColumnAdd: {
      description:
        "Function that gets called when a new column is added. Gets called with the 'position' to add the new column to as parameter.\n\n`onColumnAdd={(position) => {}}`",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onColumnDelete: {
      description:
        "Function that gets called when a custom field column is deleted. Gets called with the 'id' of the column getting deleted as parameter.\n\n`onColumnDelete={(key) => {}}`",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onMoreActionClick: {
      description:
        "Function that gets called when a more action item in header is clicked.\n\n`onMoreActionClick={(type, column) => {}}`",
      control: "function",
      table: { type: { summary: "func" } },
    },
    rowSelection: {
      description:
        "Additional props for row selection. Refer [row selection docs](https://ant.design/components/table/#rowSelection) from AntD Table\nMake sure to pass `id` in `rowData` for this to work.",
      control: "object",
      table: { type: { summary: "oneOfType([bool, object])" } },
    },
    bulkSelectAllRowsProps: {
      description:
        "Props for adding `Select all rows` option for multi-page table.",
      control: "object",
      table: {
        type: {
          summary: "shape",
          detail: `{
  selectAllRowMessage: string,
  selectAllRowButtonLabel: string,
  setBulkSelectedAllRows: func
}`,
        },
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
          appendTo={fixed ? () => document.body : undefined}
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
    title: () => (
      <div className="text-left">
        <Tooltip content="A globally unique identifier (GUID) is a 128-bit number created by the Windows operating system or another Windows application to uniquely identify specific components, hardware, software, files, user accounts, database entries and other items.">
          <span>GUID</span>
        </Tooltip>
      </div>
    ),
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

const TableSortingDocs = `

- A custom sort function can be supplied to the \`sorter\` key.
- In order to pass a custom sort function, keep \`sorter: true\` for that particular column.

\`\`\`js
const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 75,
      sorter: true;
    },
    // other columns
  ];

  // custom sort function
  const handleTableChange = (pagination, filters, sorter) => {
    // Logic for sorting
  };

\`\`\`

- The \`onChange\` function returns the current \`pagination, filters and sorter\` of the Table.

\`\`\`jsx
<Table
  rowData={TABLE_DATA}
  columnData={columns}
  onChange={(pagination, filters, sorter) =>
    handleTableChange(pagination, filters, sorter)
  }
/>
\`\`\`

- The \`onChange\` function is utilized to set the pagination and sorting configuration like
  current page, page size, sort column and sort order in the URL query parameters with the following keys:
  - \`sort_by\`: The \`dataIndex\` of the particular column in \`snake_case\`.
  - \`order_by\`: The sort order, whether \`ascend\`, \`descend\` or \`undefined\`.
  - \`page\`: The current page number.
  - \`page_size\`: The page size specified by the product.

  By default, this functionality is enabled. However, it will only take effect if the \`handlePageChange\` handler is not provided.
`;

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

const TableFixedHeightDocs = `
In order to allow vertical scroll on the Table element. We need to wrap the Table component inside a div with a fixed height and set the \`fixedHeight\` prop on \`Table\` component to \`true\`.

\`\`\`jsx
<div style={{ height: "100vh" }}>
  <Table fixedHeight rowData={TABLE_DATA} columnData={columns} />
</div>
\`\`\`
`;

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

const TableWithoutCheckboxDocs = `
To render a Table where you don't need a checkbox to select row, pass

\`\`\`jsx
<div>
  <Table rowSelection={false} />
</div>
\`\`\`
`;

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

const MoreActionsOnHeaderDocs = `
To add more actions to table header

- Add \`moreActions\` key to column definitions. Each action should have a \`type\`
  and \`label\`. eg:

\`\`\`js
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 75,
    moreActions: [{ type: "action1", label: "Action 1" }],
  },
  // other columns
];
\`\`\`

- Add \`onMoreActionClick\` prop to \`Table\` component. When user click on an
  action this function will be called with action \`type\` and \`column\` object.
  eg:

\`\`\`jsx
<Table
  rowData={TABLE_DATA}
  columnData={columns}
  onMoreActionClick={(type, column) => {
    // Do your actions here.
  }}
/>
\`\`\`
`;

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

const TableCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Table\`
component.

\`\`\`css
--neeto-ui-table-header-font-size: var(--neeto-ui-text-xs);
--neeto-ui-table-header-text-transform: uppercase;
--neeto-ui-table-header-border-bottom-width: 2px;
--neeto-ui-table-resize-handle-width: 10px;
--neeto-ui-table-resize-handle-hover-bg-color: rgb(var(--neeto-ui-gray-300));
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-table {
  --neeto-ui-table-header-font-size: var(--neeto-ui-text-sm);
  --neeto-ui-table-header-text-transform: capitalize;
}
\`\`\`

#### Output
`;

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
