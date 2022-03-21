import React from "react";
import { Table } from "../lib/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const columnData = [
  {
    dataIndex: 'id',
    key: 'id',
    title: 'ID',
    width: 150
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
  }
]

const rowData = [
  {
    id: 1,
    first_name: "Oliver",
    last_name: "Smith"
  },
  {
    id: 2,
    first_name: "Sam",
    last_name: "Smith"
  },
  {
    id: 3,
    first_name: "Eve",
    last_name: "Smith"
  },
  {
    id: 4,
    first_name: "Mark",
    last_name: "Smith"
  }
]

describe("Table", () => {
  it("should render column data without error", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
      />
    )
    const column = screen.getByText("ID")
    expect(column).toBeInTheDocument();
  });

  it("should render row data without error", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
      />
    )
    const row = screen.getByText("1")
    expect(row).toBeInTheDocument();
  });

  it("should render all the rows", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
      />
    )
    const row = screen.getAllByRole("row")
    expect(row.length).toBe(4);
  });

  it("should render all the columns", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
      />
    )
    const column1 = screen.getByText("ID")
    expect(column1).toBeInTheDocument();
    const column2 = screen.getByText("First Name")
    expect(column2).toBeInTheDocument();
    const column3 = screen.getByText("Last Name")
    expect(column3).toBeInTheDocument();
  });

  it("should have checkbox to select table row if rowSelection is set to true", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
        rowSelection
      />
    )
    const checkboxes = screen.getAllByRole("checkbox")
    expect(checkboxes.length).not.toBe(0);
  });

  it("should not have checkbox to select table row by default", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
      />
    )
    const checkbox = screen.queryByRole("checkbox")
    expect(checkbox).not.toBeInTheDocument();
  });

  it("should call onRowSelect on row selection", () => {
    const onRowSelect = jest.fn()
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
        onRowSelect={onRowSelect}
        rowSelection
      />
    )
    const checkbox = screen.getAllByRole("checkbox")
    userEvent.click(checkbox[0])
    expect(onRowSelect).toHaveBeenCalledTimes(1);
  });

  it("should call onRowClick on row click by default", () => {
    const onRowClick = jest.fn()
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
        onRowClick={onRowClick}
      />
    )
    const row = screen.getByText("1")
    userEvent.click(row)
    expect(onRowClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onRowClick on row click when allowRowClick is disabled", () => {
    const onRowClick = jest.fn()
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
        onRowClick={onRowClick}
        allowRowClick={false}
      />
    )
    const row = screen.getByText("1")
    userEvent.click(row)
    expect(onRowClick).toHaveBeenCalledTimes(0);
  });

  it("should render table with fixed height ", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
        fixedHeight
      />
    )
    const row = screen.getByText("1")
    expect(row).toBeInTheDocument();
  });

  it("should render table with rows equal to page size ", () => {
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
        defaultPageSize={2}
      />
    )
    const row = screen.getAllByRole("row")
    expect(row.length).toBe(2);
  });

  it("should call handlePageChange when page is changed ", () => {
    const handlePageChange = jest.fn()
    render(
      <Table
        columnData={columnData}
        rowData={rowData}
        defaultPageSize={2}
        handlePageChange={handlePageChange}
      />
    )
    const pages = screen.getAllByRole("listitem")
    userEvent.click(pages[2])
    expect(handlePageChange).toBeCalledTimes(1);
  });
});
