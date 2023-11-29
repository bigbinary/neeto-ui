import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dropdown } from "components";

const { MenuItem } = Dropdown;

const options = ["option 1", "option 2"].map((option, idx) => (
  <li data-testid={`option-${idx}`} key={option}>
    {option}
  </li>
));

const secondOptions = ["option 3", "option 4"].map(option => (
  <li key={option}>{option}</li>
));

describe("Dropdown", () => {
  it("should render without error", () => {
    const { getByText } = render(<Dropdown label="Dropdown" />);
    expect(getByText("Dropdown")).toBeInTheDocument();
  });

  it("should show icon when icon component is provided", () => {
    const { getByTestId } = render(
      <Dropdown icon={() => <svg data-testid="svg-icon" />} />
    );
    expect(getByTestId("svg-icon")).toBeInTheDocument();
  });

  it("should render all the options when clicking dropdown without error", async () => {
    const { getByText } = render(
      <Dropdown label="Dropdown">{options}</Dropdown>
    );
    userEvent.click(getByText("Dropdown"));
    const listItems = await screen.findAllByText(/option/i);
    expect(listItems.length).toBe(2);
  });

  it("should render all the options if isOpen is true", async () => {
    const { findAllByText } = render(
      <Dropdown isOpen label="Dropdown">
        {options}
      </Dropdown>
    );
    const listItems = await findAllByText(/option/i);
    expect(listItems.length).toBe(2);
  });

  it("should be disabled if disabled is true", () => {
    const { getByRole } = render(<Dropdown disabled label="Dropdown" />);

    expect(getByRole("button")).toBeDisabled();
  });

  it("should close the dropdown on select if closeOnSelect is true", async () => {
    const { getByText, findByText } = render(
      <Dropdown label="Dropdown">{options}</Dropdown>
    );
    userEvent.click(getByText("Dropdown"));
    const listItem = await findByText("option 1");
    await userEvent.click(listItem);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should not close the dropdown on select if closeOnSelect is false", async () => {
    const { getByText, findByText } = render(
      <Dropdown closeOnSelect={false} label="Dropdown">
        {options}
      </Dropdown>
    );
    userEvent.click(getByText("Dropdown"));
    const listItem = await findByText("option 1");
    userEvent.click(listItem);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });

  it("should close the dropdown when Esc key is pressed if closeOnEsc is true", () => {
    const { getByText } = render(
      <Dropdown closeOnEsc label="Dropdown">
        {options}
      </Dropdown>
    );
    userEvent.click(getByText("Dropdown"));
    userEvent.keyboard("{esc}");
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should not close the dropdown when Esc key is pressed if closeOnEsc is false", async () => {
    const { getByText } = render(
      <Dropdown closeOnEsc={false} label="Dropdown">
        {options}
      </Dropdown>
    );
    userEvent.click(getByText("Dropdown"));
    userEvent.keyboard("{esc}");
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });

  it("should close dropdown on clicking outside if closeOnOutsideClick is true", () => {
    const { getByText } = render(
      <Dropdown closeOnOutsideClick label="Dropdown">
        {options}
      </Dropdown>
    );
    userEvent.click(getByText("Dropdown"));
    userEvent.click(document.body);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should not close on clicking outside if closeOnOutsideClick is false", async () => {
    const { getByText } = render(
      <Dropdown closeOnOutsideClick={false} label="Dropdown">
        {options}
      </Dropdown>
    );
    userEvent.click(getByText("Dropdown"));
    userEvent.click(document.body);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });

  it("should open another dropdown on click trigger when it is multilevel ", async () => {
    const { findByText } = render(
      <Dropdown isOpen label="Dropdown">
        {options}
        <Dropdown
          customTarget={<li>Another Dropdown</li>}
          onClick={e => e.stopPropagation()}
        >
          {secondOptions}
        </Dropdown>
      </Dropdown>
    );
    userEvent.click(await findByText("Another Dropdown"));
    expect(await findByText("option 3")).toBeInTheDocument();
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(5);
  });

  it("should open another dropdown on hover trigger when it is multilevel", async () => {
    const { findByText } = render(
      <Dropdown isOpen label="Dropdown">
        {options}
        <Dropdown customTarget={<li>Another Dropdown</li>} trigger="hover">
          {secondOptions}
        </Dropdown>
      </Dropdown>
    );
    userEvent.hover(await findByText("Another Dropdown"));
    expect(await findByText("option 3")).toBeInTheDocument();
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(5);
  });

  it("should call onClose when Dropdown is closed", async () => {
    const onClose = jest.fn();
    render(
      <Dropdown {...{ onClose }} isOpen label="Dropdown">
        {options}
      </Dropdown>
    );
    await userEvent.click(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should show tooltip when menuitem is hovered", async () => {
    const { getByText, findByText } = render(
      <Dropdown label="Dropdown">
        <MenuItem.Button tooltipProps={{ content: "Enabled button's tooltip" }}>
          Enabled button
        </MenuItem.Button>
        <MenuItem.Button
          isDisabled
          tooltipProps={{ content: "Disabled button's tooltip" }}
        >
          Disabled button
        </MenuItem.Button>
      </Dropdown>
    );
    const dropdown = await findByText("Dropdown");
    userEvent.click(dropdown);
    const enableBtn = await findByText("Enabled button");
    userEvent.hover(enableBtn);
    const btnTooltip = await findByText("Enabled button's tooltip");
    expect(btnTooltip).toBeInTheDocument();
    await userEvent.hover(getByText("Disabled button"));
    expect(getByText("Disabled button's tooltip")).toBeInTheDocument();
  });
});
