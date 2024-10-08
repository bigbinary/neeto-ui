import React, { useState } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DownArrow } from "neetoicons";

import { TreeSelect } from "components";

const treeData = [
  { id: "1", value: "1", label: "Category 1" },
  { id: "2", value: "2", label: "Category 2" },
  { id: "3", value: "3", label: "Category 3" },
  { id: "4", value: "4", label: "Category 1-1", pId: "1" },
  { id: "5", value: "5", label: "Category 2-1", pId: "2" },
];

describe("TreeSelect", () => {
  it("should render without error", () => {
    render(<TreeSelect {...{ treeData }} label="Select" />);
    expect(screen.getByText("Select")).toBeInTheDocument();
  });

  it("should show options on clicking", async () => {
    render(<TreeSelect {...{ treeData }} label="Select" />);
    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
    expect(screen.getByText("Category 3")).toBeInTheDocument();
  });

  it("should call onChange on select option", async () => {
    const onChange = jest.fn();
    render(<TreeSelect {...{ onChange, treeData }} label="Select" />);
    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(screen.getByText("Category 2"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should change selected option value when an option is selected", async () => {
    const SelectComponent = () => {
      const [value, setValue] = useState("");

      return (
        <TreeSelect
          {...{ treeData, value }}
          label="Select"
          onChange={value => setValue(value)}
        />
      );
    };
    render(<SelectComponent />);

    const selectionItemBefore = document.querySelector(
      ".ant-select-selection-item"
    );
    expect(selectionItemBefore).toBeNull();

    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(screen.getByText("Category 2"));

    const selectionItemAfter = document.querySelector(
      ".ant-select-selection-item"
    );
    expect(selectionItemAfter).toHaveTextContent("Category 2");
  });

  it("should not render label if label is not provided", () => {
    render(<TreeSelect {...{ treeData }} />);
    expect(screen.queryByTestId("treeselect-label")).not.toBeInTheDocument();
  });

  it("should show error message if provided", () => {
    render(
      <TreeSelect {...{ treeData }} error="Error message" label="Select" />
    );
    expect(screen.getByTestId("treeselect-error")).toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("should be searchable", async () => {
    render(<TreeSelect {...{ treeData }} showSearch label="Select" />);

    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    await userEvent.type(select, "Category 2");
    expect(screen.getByText("Category 2")).toBeInTheDocument();
    expect(screen.getByText("Category 2-1")).toBeInTheDocument();
    expect(screen.queryByText("Category 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Category 1-1")).not.toBeInTheDocument();
  });

  it("should show option list and be searchable when fieldNames are provided", async () => {
    const remappedTreeData = [
      { id: "1", value: "1", newLabel: "Category 1", pId: null },
      { id: "2", value: "2", newLabel: "Category 2", pId: null },
      { id: "3", value: "3", newLabel: "Category 3", pId: null },
      { id: "4", value: "4", newLabel: "Category 1-1", pId: "1" },
      { id: "5", value: "5", newLabel: "Category 2-1", pId: "2" },
    ];

    render(
      <TreeSelect
        showSearch
        fieldNames={{ label: "newLabel" }}
        treeData={remappedTreeData}
      />
    );
    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();

    await userEvent.type(select, "Category 2");
    expect(screen.getByText("Category 2")).toBeInTheDocument();
    expect(screen.getByText("Category 2-1")).toBeInTheDocument();
    expect(screen.queryByText("Category 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Category 1-1")).not.toBeInTheDocument();
  });

  it("should override custom suffix and switcher icons", async () => {
    render(
      <TreeSelect
        {...{ treeData }}
        suffixIcon={() => <DownArrow data-testid="custom-suffix" />}
        switcherIcon={() => <DownArrow data-testid="custom-switcher" />}
      />
    );

    expect(screen.getByTestId("custom-suffix")).toBeInTheDocument();
    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    expect(screen.getAllByTestId("custom-switcher")[0]).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();
  });

  it("should show child options when switcher icon is clicked", async () => {
    render(
      <TreeSelect
        {...{ treeData }}
        switcherIcon={() => <DownArrow data-testid="custom-switcher" />}
      />
    );

    const select = screen.getByRole("combobox");
    await userEvent.click(select);
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
    expect(screen.queryByText("Category 1-1")).not.toBeInTheDocument();
    expect(screen.queryByText("Category 2-1")).not.toBeInTheDocument();

    const switcher = screen.getAllByTestId("custom-switcher")[0];
    await userEvent.click(switcher);
    expect(screen.getByText("Category 1-1")).toBeInTheDocument();
  });
});
