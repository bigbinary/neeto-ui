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
        renderColumns={(columns) => columns}
      />
    );
    expect(getByText("Columns")).toBeInTheDocument();
  });

  it("should render all the options when clicking dropdown without error", async () => {
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        renderColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const listItems = await screen.findAllByText(/option/i);
    expect(listItems.length).toBe(3);
  });

  it("should show no columns found when no columnData is provided", async () => {
    const { getByText } = render(
      <Columns
        columnData={[]}
        localStorageKey="test"
        renderColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const listItems = await screen.findAllByText(/No columns found!/i);
    expect(listItems.length).toBe(1);
  });

  it("should uncheck the checkbox when clicked", async () => {
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        renderColumns={(columns) => columns}
      />
    );
    userEvent.click(getByText("Columns"));
    const checkbox = await screen.findByLabelText("Option 1");
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("should call renderColumns when checkbox is clicked", async () => {
    const renderColumns = jest.fn();
    const { getByText } = render(
      <Columns
        columnData={DEFAULT_COLUMNS_DATA}
        localStorageKey="test"
        renderColumns={renderColumns}
      />
    );
    userEvent.click(getByText("Columns"));
    const checkbox = await screen.findByLabelText("Option 1");
    userEvent.click(checkbox);
    expect(renderColumns).toHaveBeenCalled();
  });
});
