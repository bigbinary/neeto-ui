import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useField, Formik } from "formik";
import { evolve } from "ramda";

import { Select } from "components";
import SelectField from "formikcomponents/Select";

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
    const { getByText } = render(<Select {...{ options }} label="Select" />);
    expect(getByText("Select")).toBeInTheDocument();
  });

  it("should show option list on clicking", async () => {
    const { getByRole, getByText } = render(
      <Select {...{ options }} label="Select" />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should call onChange on select option", async () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <Select {...{ onChange, options }} label="Select" />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getByText("Option 2"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should change selected option value when an option is selected", async () => {
    const { getByRole, getByText } = render(
      <Select {...{ options }} label="Select" />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getByText("Option 2"));
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should not render label if label is not provided", () => {
    const { queryByTestId } = render(<Select {...{ options }} />);
    expect(queryByTestId("select-label")).not.toBeInTheDocument();
  });

  it("should show error message if provided", () => {
    const { getByText, getByTestId } = render(
      <Select {...{ options }} error="Error message" label="Select" />
    );
    expect(getByTestId("select-error")).toBeInTheDocument();
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should show help text if provided", () => {
    const { getByText, getByTestId } = render(
      <Select {...{ options }} helpText="Help text" label="Select" />
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
      <Select {...{ options }} isCreateable isSearchable label="Select" />
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
        {...{ options }}
        isAsyncLoadOptionEnabled
        fetchMore={handleFetchMore}
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
        {...{ options }}
        fetchMore={handleFetchMore}
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

  it("should not show the add button when select is multi and no options are selected", async () => {
    const { getByRole } = render(
      <Select {...{ options }} isMulti label="Select" />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    expect(screen.queryByText("Add")).not.toBeInTheDocument();
  });

  it("should show the add button when select is multi and at least one option is selected", async () => {
    const { getByRole, getByText } = render(
      <Select {...{ options }} isMulti label="Select" />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getByText("Option 1"));
    const addButton = screen.getByText("Add");
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveClass("neeto-ui-btn--style-secondary");
  });

  it("should show the custom label for add button when select is multi and at least one option is selected", async () => {
    const { getByRole, getByText } = render(
      <Select
        {...{ options }}
        isMulti
        addButtonLabel="Add more"
        label="Select"
      />
    );
    const select = getByRole("combobox");
    await userEvent.click(select);
    await userEvent.click(getByText("Option 1"));
    const addButton = screen.getByText("Add more");
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveClass("neeto-ui-btn--style-secondary");
  });

  it("should set the default value for grouped Select", () => {
    render(
      <Select
        defaultValue={[
          {
            label: "Group 2 - Option 1",
            value: "Group 2 - option-1",
          },
        ]}
        options={[
          { label: "Group 1", options },
          {
            label: "Group 2",
            options: options.map(
              evolve({
                label: val => `Group 2 - ${val}`,
                value: val => `Group 2 - ${val}`,
              })
            ),
          },
        ]}
      />
    );

    expect(screen.getByText("Group 2 - Option 1")).toBeInTheDocument();
    expect(screen.queryByText("Group 2 - Option 2")).not.toBeInTheDocument();
  });

  it("should correctly fetch initial value for non-grouped options", () => {
    const FormikSelectWrapper = () => {
      const [field] = useField("test-select");

      return (
        <div>
          <span data-testid="field-value">{field.value}</span>
          <SelectField
            {...{ options }}
            label="Test Select"
            name="test-select"
          />
        </div>
      );
    };

    const TestComponent = () => (
      <Formik initialValues={{ "test-select": "option-2" }} onSubmit={() => {}}>
        <FormikSelectWrapper />
      </Formik>
    );

    render(<TestComponent />);

    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByTestId("field-value")).toHaveTextContent("option-2");
  });

  it("should correctly fetch initial value for grouped options", () => {
    const groupedOptions = [
      {
        label: "Group 1",
        options: [
          { label: "Group 1 - Option 1", value: "group1-option1" },
          { label: "Group 1 - Option 2", value: "group1-option2" },
        ],
      },
      {
        label: "Group 2",
        options: [
          { label: "Group 2 - Option 1", value: "group2-option1" },
          { label: "Group 2 - Option 2", value: "group2-option2" },
        ],
      },
    ];

    const FormikSelectWrapper = () => {
      const [field] = useField("test-grouped-select");

      return (
        <div>
          <span data-testid="field-value">{field.value}</span>
          <SelectField
            label="Test Grouped Select"
            name="test-grouped-select"
            options={groupedOptions}
          />
        </div>
      );
    };

    const TestComponent = () => (
      <Formik
        initialValues={{ "test-grouped-select": "group2-option1" }}
        onSubmit={() => {}}
      >
        <FormikSelectWrapper />
      </Formik>
    );

    render(<TestComponent />);

    expect(screen.getByText("Group 2 - Option 1")).toBeInTheDocument();
    expect(screen.getByTestId("field-value")).toHaveTextContent(
      "group2-option1"
    );
  });
});
