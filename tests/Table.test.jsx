import React, { useState } from "react";

import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Table } from "components";
import { getQueryParams } from "utils";

const columnData = [
  { dataIndex: "id", key: "id", title: "ID", width: 150, fixed: "left" },
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
    sorter: true,
    width: 150,
  },
  {
    id: "custom-column-id-nickname",
    title: "Nickname",
    dataIndex: "nickname",
    key: "nickname",
    sorter: true,
    isDeletable: true,
    width: 150,
  },
  {
    id: "custom-column-id-company-name",
    title: "Company Name",
    dataIndex: "companyName",
    key: "company_name",
    sorter: true,
    isDeletable: true,
    isHidable: false,
    width: 150,
  },
  {
    id: "custom-column-id-position",
    title: "Position",
    dataIndex: "position",
    key: "position",
    sorter: true,
    isDeletable: false,
    width: 150,
    moreActions: [{ type: "action1", label: "Action 1" }],
  },
];

const rowData = [
  { id: 1, first_name: "Oliver", last_name: "Smith", nickname: "Ollie" },
  { id: 2, first_name: "Sam", last_name: "Smith", nickname: "Sammy" },
  { id: 3, first_name: "Eve", last_name: "Smith", nickname: "Evie" },
  { id: 4, first_name: "Mark", last_name: "Smith", nickname: "Marky" },
];

const NeetoUITable = props => (
  <BrowserRouter>
    <Table {...props} scroll={{ x: 1000 }} />
  </BrowserRouter>
);

describe("Table", () => {
  it("should render column data without error", () => {
    render(<NeetoUITable {...{ columnData, rowData }} />);
    const column = screen.getByText("ID");
    expect(column).toBeInTheDocument();
  });

  it("should render row data without error", () => {
    render(<NeetoUITable {...{ columnData, rowData }} />);
    const row = screen.getByText("1");
    expect(row).toBeInTheDocument();
  });

  it("should render all the rows", () => {
    render(<NeetoUITable {...{ columnData, rowData }} virtual={false} />);
    const row = screen.getAllByRole("row");
    expect(row.length).toBe(4);
  });

  it("should render all the columns", () => {
    render(<NeetoUITable {...{ columnData, rowData }} />);
    const column1 = screen.getByText("ID");
    expect(column1).toBeInTheDocument();
    const column2 = screen.getByText("First Name");
    expect(column2).toBeInTheDocument();
    const column3 = screen.getByText("Last Name");
    expect(column3).toBeInTheDocument();
  });

  it("should have checkbox to select table row if rowSelection is set to true", () => {
    render(<NeetoUITable {...{ columnData, rowData }} rowSelection />);
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).not.toBe(0);
  });

  it("should not have checkbox to select table row by default", () => {
    render(<NeetoUITable {...{ columnData, rowData }} />);
    const checkbox = screen.queryByRole("checkbox");
    expect(checkbox).not.toBeInTheDocument();
  });

  it("should call onRowSelect on row selection", async () => {
    const onRowSelect = jest.fn();
    render(
      <NeetoUITable {...{ columnData, onRowSelect, rowData }} rowSelection />
    );
    const checkbox = screen.getAllByRole("checkbox");
    await userEvent.click(checkbox[0]);
    expect(onRowSelect).toHaveBeenCalledTimes(1);
  });

  it("should call onRowClick on row click by default", async () => {
    const onRowClick = jest.fn();
    render(<NeetoUITable {...{ columnData, onRowClick, rowData }} />);
    const row = screen.getByText("1");
    await userEvent.click(row);
    expect(onRowClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onRowClick on row click when allowRowClick is disabled", async () => {
    const onRowClick = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, onRowClick, rowData }}
        allowRowClick={false}
      />
    );
    const row = screen.getByText("1");
    await userEvent.click(row);
    expect(onRowClick).toHaveBeenCalledTimes(0);
  });

  it("should render table with fixed height ", () => {
    render(<NeetoUITable {...{ columnData, rowData }} fixedHeight />);
    const row = screen.getByText("1");
    expect(row).toBeInTheDocument();
  });

  it("should render table with rows equal to page size ", () => {
    render(
      <NeetoUITable
        {...{ columnData, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
        virtual={false}
      />
    );
    const row = screen.getAllByRole("row");
    expect(row.length).toBe(2);
  });

  it("should call handlePageChange when page is changed ", async () => {
    const handlePageChange = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, handlePageChange, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const pages = screen.getAllByRole("listitem");
    await userEvent.click(pages[2]);
    expect(handlePageChange).toBeCalledTimes(1);
  });

  it("should set pagination URL query parameters when page is changed", async () => {
    render(
      <NeetoUITable
        {...{ columnData, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const pages = screen.getAllByRole("listitem");
    await userEvent.click(pages[2]);
    const queryParams = getQueryParams();

    expect(queryParams).toEqual({ page: "2" });
  });

  it("should navigate to previous page if all the items in the last page are deleted", () => {
    render(
      <NeetoUITable
        {...{ columnData }}
        currentPageNumber={4}
        defaultPageSize={10}
        rowData={[]}
        totalCount={30}
      />
    );

    expect(getQueryParams()).toEqual({ page: "3" });

    const handlePageChange = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, handlePageChange }}
        currentPageNumber={3}
        defaultPageSize={10}
        rowData={[]}
        totalCount={20}
      />
    );

    expect(handlePageChange).toBeCalledWith(2, 10);
  });

  it("should set sorting URL query parameters when column title is clicked", async () => {
    render(
      <NeetoUITable
        {...{ columnData, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const column = screen.getByText("Last Name");
    const menuButton = within(column.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    expect(await screen.findByText("Sort ascending")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Sort ascending"));
    const queryParams = getQueryParams();

    expect(queryParams).toEqual({
      sort_by: "last_name",
      order_by: "asc",
    });
  });

  it("should call the callback for hiding columns when the hide column menu item is clicked", async () => {
    const onColumnHide = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, onColumnHide, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const column = screen.getByText("Last Name");
    const menuButton = within(column.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    expect(await screen.findByText("Hide column")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Hide column"));

    expect(onColumnHide).toBeCalled();
  });

  it("should hide the hide column option in the menu when the isHidable key is set to false", async () => {
    const onColumnHide = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, onColumnHide, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const column = screen.getByText("Company Name");
    const menuButton = within(column.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    const hideButton = await screen.queryAllByText("Hide column");
    expect(hideButton).toHaveLength(0);
  });

  it("should hide the delete column option in the menu when the isDeletable key is set to false", async () => {
    const onColumnDelete = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, onColumnDelete, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const column = screen.getByText("Position");
    const menuButton = within(column.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    const deleteButton = await screen.queryAllByText("Delete column");
    expect(deleteButton).toHaveLength(0);
  });

  it("should call the callback for adding columns when the add column menu item is clicked", async () => {
    const handleAddColumn = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, rowData }}
        enableAddColumn
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
        onColumnAdd={handleAddColumn}
      />
    );
    const column = screen.getByText("Last Name");
    const menuButton = within(column.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    expect(await screen.findByText("Insert column left")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Insert column left"));

    expect(handleAddColumn).toBeCalledWith(2);

    await userEvent.click(menuButton);
    expect(await screen.findByText("Insert column right")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Insert column right"));

    expect(handleAddColumn).toBeCalledWith(3);
  });

  it("should call the callback for deleting columns when the delete column menu item is clicked", async () => {
    const onColumnDelete = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, onColumnDelete, rowData }}
        enableAddColumn
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const column = screen.getByText("Nickname");
    const menuButton = within(column.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    expect(await screen.findByText("Delete column")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Delete column"));

    expect(onColumnDelete).toBeCalledWith(columnData[3].id);
  });

  it("should call the onMoreActionClick when any of the more action item is clicked", async () => {
    const onMoreActionClick = jest.fn();
    render(
      <NeetoUITable
        {...{ columnData, onMoreActionClick, rowData }}
        defaultPageSize={2}
        shouldDynamicallyRenderRowSize={false}
      />
    );
    const column = screen.getByText("Position");
    const menuButton = within(column.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    expect(await screen.findByText("Action 1")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Action 1"));
    expect(onMoreActionClick).toBeCalledWith("action1", columnData[5]);
  });

  it("should have select all callout when all rows are selected and bulkSelectAllRowsProps are passed in multipage table", () => {
    render(
      <NeetoUITable
        {...{ columnData }}
        rowSelection
        defaultPageSize={2}
        rowData={[rowData[0], rowData[1]]}
        selectedRowKeys={[rowData[0].id, rowData[1].id]}
        totalCount={rowData.length}
        bulkSelectAllRowsProps={{
          setBulkSelectedAllRows: () => {},
          selectAllRowButtonLabel: "Select all",
          selectAllRowMessage: "Selected 2 rows in this page",
        }}
      />
    );
    const selectAllCallout = screen.getByTestId("select-all-rows-callout");
    expect(selectAllCallout).toBeInTheDocument();
  });

  it("should select all rows of all pages and call the callback when the select all button is clicked from the callout", async () => {
    const setBulkSelectedAllRows = jest.fn();
    const NeetoUITableWithWrapper = () => {
      const [selectedRowKeys, setSelectedRowKeys] = useState([
        rowData[0].id,
        rowData[1].id,
      ]);
      const [page, setPage] = useState(1);
      const PAGE_SIZE = 2;

      return (
        <NeetoUITable
          {...{ columnData, selectedRowKeys }}
          rowSelection
          currentPageNumber={page}
          defaultPageSize={2}
          handlePageChange={(page, _) => setPage(page)}
          rowData={rowData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)}
          totalCount={rowData.length}
          bulkSelectAllRowsProps={{
            setBulkSelectedAllRows,
            selectAllRowButtonLabel: "Select all rows",
            selectAllRowMessage: "Selected 2 rows in this page",
          }}
          onRowSelect={setSelectedRowKeys}
        />
      );
    };

    render(<NeetoUITableWithWrapper />);
    const selectAllRowsBulkButton = screen.getByTestId(
      "select-all-rows-button"
    );
    await userEvent.click(selectAllRowsBulkButton);
    const pages = screen.getAllByRole("listitem");
    await userEvent.click(pages[2]);
    const checkboxes = screen.getAllByRole("checkbox");

    checkboxes.forEach(checkbox => {
      expect(checkbox).toBeChecked();
    });

    expect(setBulkSelectedAllRows).toBeCalledTimes(1);
  });

  it("should show the clear selection callout when all rows are selected", async () => {
    render(
      <NeetoUITable
        {...{ columnData }}
        rowSelection
        defaultPageSize={2}
        rowData={[rowData[0], rowData[1]]}
        selectedRowKeys={[rowData[0].id, rowData[1].id]}
        totalCount={rowData.length}
        bulkSelectAllRowsProps={{
          setBulkSelectedAllRows: () => {},
          selectAllRowButtonLabel: "Select all",
          selectAllRowMessage: "Selected 2 rows in this page",
        }}
      />
    );

    const selectAllRowsBulkButton = screen.getByTestId(
      "select-all-rows-button"
    );
    await userEvent.click(selectAllRowsBulkButton);

    const clearSelectionCallout = screen.getByTestId(
      "clear-selections-callout"
    );
    expect(clearSelectionCallout).toBeInTheDocument();
  });

  it("should clear the selected rows when clear selection button is clicked", async () => {
    const NeetoUITableWithWrapper = () => {
      const [selectedRowKeys, setSelectedRowKeys] = useState([
        rowData[0].id,
        rowData[1].id,
      ]);

      return (
        <NeetoUITable
          {...{ columnData, selectedRowKeys }}
          rowSelection
          defaultPageSize={2}
          rowData={[rowData[0], rowData[1]]}
          totalCount={rowData.length}
          bulkSelectAllRowsProps={{
            setBulkSelectedAllRows: () => {},
            selectAllRowButtonLabel: "Select all",
            selectAllRowMessage: "Selected 2 rows in this page",
          }}
          onRowSelect={setSelectedRowKeys}
        />
      );
    };

    render(<NeetoUITableWithWrapper />);

    const selectAllRowsBulkButton = screen.getByTestId(
      "select-all-rows-button"
    );
    await userEvent.click(selectAllRowsBulkButton);

    const clearSelectionButton = screen.getByTestId("clear-selections-button");

    await userEvent.click(clearSelectionButton);

    const checkboxes = screen.getAllByRole("checkbox");

    checkboxes.forEach(checkbox => {
      expect(checkbox).not.toBeChecked();
    });
  });

  it("should show the freeze and unfreeze menu on top of the columns", async () => {
    const NeetoUITableWithWrapper = () => (
      <NeetoUITable
        {...{ columnData, rowData }}
        rowSelection
        defaultPageSize={2}
        totalCount={rowData.length}
      />
    );

    render(<NeetoUITableWithWrapper />);
    const firstNameColumn = screen.getByText("First Name");
    const menuButton = within(firstNameColumn.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    expect(await screen.findByText("Freeze column")).toBeInTheDocument();

    const idColumn = screen.getByText("ID");
    const idMenuButton = within(idColumn.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(idMenuButton);
    expect(await screen.findByText("Unfreeze column")).toBeInTheDocument();
  });

  it("should freeze and unfreeze the column when the menu item is clicked", async () => {
    const NeetoUITableWithWrapper = () => (
      <NeetoUITable
        {...{ columnData, rowData }}
        rowSelection
        defaultPageSize={2}
        totalCount={rowData.length}
      />
    );

    render(<NeetoUITableWithWrapper />);
    const firstNameColumn = screen.getByText("First Name");
    const firstNameHeader = firstNameColumn.closest("th");
    const menuButton = within(firstNameColumn.closest("th")).getByTestId(
      "column-menu-button"
    );
    await userEvent.click(menuButton);
    expect(await screen.findByText("Freeze column")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Freeze column"));

    await waitFor(() => {
      expect(firstNameHeader).toHaveClass("ant-table-cell-fix-left");
    });

    await userEvent.click(menuButton);
    expect(await screen.findByText("Unfreeze column")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Unfreeze column"));

    await waitFor(() => {
      expect(firstNameHeader).not.toHaveClass("ant-table-cell-fix-left");
    });
  });
});
