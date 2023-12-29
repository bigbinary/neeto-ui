/* eslint-disable no-undef */
import React from "react";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Table } from "components";
import { getQueryParams } from "utils";

const columnData = [
  { dataIndex: "id", key: "id", title: "ID", width: 150 },
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
    id: "custom-column-id",
    title: "Nickname",
    dataIndex: "nickname",
    key: "nickname",
    sorter: true,
    isSystem: false,
    width: 150,
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
    <Table {...props} />
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
    render(<NeetoUITable {...{ columnData, rowData }} />);
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

    expect(queryParams).toEqual({ page: "2", sort_by: "" });
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

    expect(getQueryParams()).toEqual({ page: "3", sort_by: "" });

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
    expect(await screen.findByText("Ascending")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Ascending"));
    const queryParams = getQueryParams();

    expect(queryParams).toEqual({
      sort_by: "last_name",
      order_by: "asc",
    });
  });
});

it("should call the callback for hiding columns when the hide column menu item is clicked", async () => {
  const onColumnHide = jest.fn();
  render(
    <NeetoUITable
      {...{ columnData, onColumnHide, rowData }}
      enable
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
