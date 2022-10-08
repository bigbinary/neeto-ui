import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Columns from "../../lib/molecules/Columns";

const DEFAULT_COLUMNS_DATA = [
  {
    dataIndex: "option_1",
    key: "option_1",
    name: "Option 1",
    title: "Option 1",
    width: "30%",
  },
  {
    dataIndex: "option_2",
    key: "option_2",
    name: "Option 2",
    title: "Option 2",
    width: "30%",
  },
  {
    dataIndex: "option_3",
    key: "option_3",
    name: "Option 3",
    title: "Option 3",
    width: "30%",
  },
];

describe("Columns", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        setColumns={(columns) => columns}
      />
    );
    expect(getByText("Columns")).toBeInTheDocument();
  });

  it("should render all the options when clicking the dropdown", async () => {
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        setColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const listItems = await screen.findAllByText(/option/i);
    expect(listItems.length).toBe(3);
  });

  it("should uncheck the checkbox when clicked", async () => {
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        setColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const checkbox = await screen.findByLabelText("Option 1");
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("should call setColumns when checkbox is clicked", async () => {
    const setColumns = jest.fn();
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        setColumns={setColumns}
      />
    );
    userEvent.click(getByText("Columns"));
    const checkbox = await screen.findByLabelText("Option 1");
    userEvent.click(checkbox);
    expect(setColumns).toHaveBeenCalled();
  });

  it("should have column data in `setColumns`", async () => {
    const setColumns = jest.fn();
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        setColumns={setColumns}
      />
    );
    userEvent.click(getByText("Columns"));
    const checkbox = await screen.findByLabelText("Option 1");
    userEvent.click(checkbox);
    expect(setColumns).toHaveBeenCalledWith([
      {
        dataIndex: "option_2",
        key: "option_2",
        name: "Option 2",
        title: "Option 2",
        width: "30%",
      },
      {
        dataIndex: "option_3",
        key: "option_3",
        name: "Option 3",
        title: "Option 3",
        width: "30%",
      },
    ]);
  });

  it("should render no columns found message when no `columnData` is provided", async () => {
    const { getByText } = render(
      <Columns
        columnData={[]}
        localStorageKey="test"
        setColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const listItems = await screen.findAllByText(/No columns found!/i);
    expect(listItems.length).toBe(1);
  });

  it("should not render the columns mentioned in `fixedColumns`", async () => {
    const { getByText, queryByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        fixedColumns={["option_1"]}
        localStorageKey="test"
        setColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const listItems = await screen.findAllByText(/option/i);
    expect(queryByText("Option 1")).not.toBeInTheDocument();
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent("Option 2");
    expect(listItems[1]).toHaveTextContent("Option 3");
  });

  it("should render action block when `actionBlock` is provided", async () => {
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        setColumns={(columns) => columns}
        actionBlock={<button>Test</button>}
      />
    );
    userEvent.click(getByText("Columns"));
    const actionBlock = await screen.findByText("Test");
    expect(actionBlock).toBeInTheDocument();
  });

  it("should search for the columns", async () => {
    const { getByText } = render(
      <Columns
        isSearchable
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        setColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const searchInput = await screen.findByPlaceholderText("Search columns");
    userEvent.type(searchInput, "option 1");
    const listItems = await screen.findAllByText(/option 1/i);
    expect(listItems.length).toBe(1);
  });
});
