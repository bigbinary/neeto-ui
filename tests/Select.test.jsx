import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Select } from "components";

const options = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
];

const remappedLabelAndValueOptions = [
  { lab: "Option 1", val: "option-1" },
  { lab: "Option 2", val: "option-2" },
];

const remappedLabelOptions = [
  { lab: "Option 1", value: "option-1" },
  { lab: "Option 2", value: "option-2" },
];

const intersectionObserverMock = () => ({ observe: () => null });
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Select", () => {
  it("should render without error", () => {
    const { getByText } = render(<Select label="Select" options={options} />);
    expect(getByText("Select")).toBeInTheDocument();
  });

  it("should show option list on clicking", async () => {
    const { getByRole, getByText } = render(
      <Select label="Select" options={options} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should call onChange on select option", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <Select label="Select" options={options} onChange={onChange} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getByText("Option 2"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should change selected option value when an option is selected", async () => {
    const { getByRole, getByText } = render(
      <Select label="Select" options={options} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getByText("Option 2"));
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should not render label if label is not provided", () => {
    const { queryByTestId } = render(<Select options={options} />);
    expect(queryByTestId("select-label")).not.toBeInTheDocument();
  });

  it("should show error message if provided", () => {
    const { getByText, getByTestId } = render(
      <Select error="Error message" label="Select" options={options} />
    );
    expect(getByTestId("select-error")).toBeInTheDocument();
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should show help text if provided", () => {
    const { getByText, getByTestId } = render(
      <Select helpText="Help text" label="Select" options={options} />
    );
    expect(getByTestId("select-help-text")).toBeInTheDocument();
    expect(getByText("Help text")).toBeInTheDocument();
  });

  it("should create new element when Select is creatable", async () => {
    const { getByRole, getByTestId } = render(<Select isCreateable />);
    const select = getByRole("combobox");
    const selectBox = getByTestId("select");
    await userEvent.click(select);
    expect(selectBox).toHaveTextContent("No options", { exact: false });
    await userEvent.type(select, "hello");
    await userEvent.type(select, "{enter}");
    expect(selectBox).toHaveTextContent("hello", { exact: false });
  });

  it("should be searchable with isCreatable", async () => {
    const { getByRole } = render(
      <Select isCreateable isSearchable label="Select" options={options} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.type(select, "option 2");
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  it("should lazy load options when enabled", async () => {
    const handleFetchMore = jest.fn();
    const totalValues = 10;

    const { getByRole } = render(
      <Select
        isAsyncLoadOptionEnabled
        fetchMore={handleFetchMore}
        options={options}
        totalOptionsCount={totalValues}
      />
    );

    const select = getByRole("combobox");
    await userEvent.click(select);

    const menuList = screen.getByTestId("menu-list");
    menuList.scrollTop = menuList.scrollHeight;
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should not lazy load options when isAsyncLoadOptionEnabled is disabled", async () => {
    const handleFetchMore = jest.fn();
    const totalValues = 10;

    const { getByRole } = render(
      <Select
        fetchMore={handleFetchMore}
        options={options}
        totalOptionsCount={totalValues}
      />
    );

    const select = getByRole("combobox");
    await userEvent.click(select);
    const menuList = screen.getByTestId("menu-list");
    menuList.scrollTop = menuList.scrollHeight;
    const loader = screen.queryByTestId("loader");
    expect(loader).toBeNull();
  });

  it("should show option list on clicking when remapped label and value is provided with optionRemapping", async () => {
    const { getByRole, getByText } = render(
      <Select
        label="Select"
        optionRemapping={{ label: "lab", value: "val" }}
        options={remappedLabelAndValueOptions}
      />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should show option list on clicking when remapped label is provided with optionRemapping", async () => {
    const { getByRole, getByText } = render(
      <Select
        label="Select"
        optionRemapping={{ label: "lab" }}
        options={remappedLabelOptions}
      />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should not show option list on clicking when remapped label is provided without optionRemapping", async () => {
    const { getByRole, queryByText } = render(
      <Select label="Select" options={remappedLabelOptions} />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(queryByText("Option 1")).toBeNull();
    expect(queryByText("Option 2")).toBeNull();
  });

  it("should show the add button when select is multi", () => {
    render(<Select isMulti label="Select" options={remappedLabelOptions} />);
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("should show the custom label for add button when select is multi", () => {
    render(
      <Select
        isMulti
        addButtonLabel="Add more"
        label="Select"
        options={remappedLabelOptions}
      />
    );
    expect(screen.getByText("Add more")).toBeInTheDocument();
  });
});
