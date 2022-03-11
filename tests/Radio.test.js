import React, { useState } from "react";
import { Radio } from "../lib/components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const ControlledRadio = () => {
  const [value, setValue] = useState("");
  
  return (
    <Radio
      label="Radio"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <Radio.Item label="option1" name="options" value="option1" />
      <Radio.Item label="option2" name="options" value="option2" />
    </Radio>
  );
};

describe("Radio", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Radio label="Radio">
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    expect(getByText("Radio")).toBeInTheDocument();
  });

  it("should call onChange when radio value is changed", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Radio label="Radio" onChange={onChange}>
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    userEvent.click(getByText("option1"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should display error message", () => {
    const { getByText } = render(
      <Radio label="Radio" error="Error message">
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    const { getByRole } = render(
      <Radio label="Radio">
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    expect(getByRole("radio")).not.toBeChecked();
  });

  it("should show controlled behaviour", () => {
    const { getAllByRole } = render(<ControlledRadio />);
    const radio = getAllByRole("radio");
    userEvent.click(radio[0]);
    expect(radio[0]).toBeChecked();
    expect(radio[1]).not.toBeChecked();
    userEvent.click(radio[1]);
    expect(radio[0]).not.toBeChecked();
    expect(radio[1]).toBeChecked();
  });
});
