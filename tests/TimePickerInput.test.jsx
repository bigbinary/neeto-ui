import React from "react";

import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TimePickerInput } from "components";

const { getByText } = screen;

describe("TimePickerInput", () => {
  it("should render without error", () => {
    render(<TimePickerInput label="Select Time" />);
    expect(getByText("Select Time")).toBeInTheDocument();
  });

  it("should render time range without error", () => {
    render(<TimePickerInput label="Select Time" type="range" />);
    expect(getByText("Select Time")).toBeInTheDocument();
  });

  it("should trigger onChange for time picker", async () => {
    const onChangeFn = jest.fn();
    render(
      <TimePickerInput
        label="Select Time"
        value="12:45"
        onChange={onChangeFn}
      />
    );
    const timePickerInput = screen.getByDisplayValue("12:45");
    fireEvent.change(timePickerInput, { target: { value: "11:15" } });

    expect(onChangeFn).toHaveBeenCalledWith(expect.anything(), "11:15");
  });

  it("should trigger onChange for time range picker", async () => {
    const onChangeFn = jest.fn();
    render(
      <TimePickerInput
        label="Select Time"
        type="range"
        value={["11:15", "12:45"]}
        onChange={onChangeFn}
      />
    );
    const timePickerInput = screen.getByDisplayValue("12:45");
    fireEvent.change(timePickerInput, { target: { value: "12:30" } });

    expect(onChangeFn).toHaveBeenCalledWith(expect.anything(), [
      "11:15",
      "12:30",
    ]);
  });

  it("should trigger onBlur on losing focus", async () => {
    const onTimeInputBlur = jest.fn();
    render(
      <TimePickerInput
        label="Select Time"
        value="12:45"
        onBlur={onTimeInputBlur}
      />
    );
    const timePickerInputs = screen.getAllByRole("spinbutton");
    await userEvent.click(timePickerInputs[0]);
    await userEvent.click(timePickerInputs[1]);
    await userEvent.click(document.body);
    expect(onTimeInputBlur).toHaveBeenCalledWith(expect.anything(), "12:45");
  });
});
