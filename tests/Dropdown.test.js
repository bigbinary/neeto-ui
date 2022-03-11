import React from "react";
import { Dropdown } from "../lib/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const options = ["option 1", "option 2"].map(option => <li key={option}>{option}</li>)

describe("Dropdown", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Dropdown
        label="Dropdown"
      />)
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
      <Dropdown label="Dropdown" >
        {options}
      </Dropdown>
    )
    userEvent.click(getByText("Dropdown"))
    const listItems = await screen.findAllByRole("listitem")
    expect(listItems.length).toBe(2);
  });

  it("should render all the options if isOpen is true", async () => {
    const { findAllByRole } = render(
      <Dropdown label="Dropdown" isOpen>
       {options}
      </Dropdown>
    )
    const listItems = await findAllByRole("listitem")
    expect(listItems.length).toBe(2);
  });

  it("should be disabled if disabled is true", () => {
    const { getByRole } = render(
      <Dropdown label="Dropdown" disabled />
    );
    expect(getByRole("button")).toBeDisabled();
  });

  it("should close on select if closeOnSelect is true", () => {
    const { getByText } = render(
      <Dropdown label="Dropdown" closeOnSelect >
        {options}
      </Dropdown>
    )
    userEvent.click(getByText("Dropdown"))
    const listItem = getByText("option 1")
    userEvent.click(listItem)
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should close on escape if closeOnEsc is true", () => {
    const { getByText } = render(
      <Dropdown label="Dropdown" closeOnEsc >
        {options}
      </Dropdown>
    )
    userEvent.click(getByText("Dropdown"))
    userEvent.keyboard("{esc}");
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should close on outside click if closeOnOutsideClick is true", () => {
    const { getByText } = render(
      <Dropdown label="Dropdown" closeOnOutsideClick >
        {options}
      </Dropdown>
    )
    userEvent.click(getByText("Dropdown"))
    userEvent.click(document.body);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should open another dropdown on click trigger when it is multilevel ", async () => {
    const { getByText } = render(
      <Dropdown label="Dropdown" isMultiLevel isOpen>
        {options}
        <Dropdown
          customTarget={<li>Another Dropdown</li>}
        >
          {options}
        </Dropdown>
      </Dropdown>
    )
    userEvent.click(getByText("Another Dropdown"))
    const listItems =  await screen.findAllByRole("listitem")
    expect(listItems).toHaveLength(5);
  });

  it("should open another dropdown on hover trigger when it is multilevel  ", async () => {
    const { getByText } = render(
      <Dropdown label="Dropdown" isMultiLevel isOpen>
        {options}
        <Dropdown
          customTarget={<li>Another Dropdown</li>}
          trigger="hover"
        >
          {options}
        </Dropdown>
      </Dropdown>
    )
    userEvent.hover(getByText("Another Dropdown"))
    const listItems =  await screen.findAllByRole("listitem")
    expect(listItems).toHaveLength(5);
  });

  it("should call onClose when Dropdown is closed", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Dropdown label="Dropdown" closeOnOutsideClick onClose={onClose}>
        {options}
      </Dropdown>
    )
    userEvent.click(getByText("Dropdown"))
    userEvent.click(document.body);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
