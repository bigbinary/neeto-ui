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

  it("should trigger onChange for time picker", () => {
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

  it("should trigger onChange for time range picker", () => {
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

  it("should not allow time before minTime", async () => {
    const onChange = jest.fn();
    render(
      <TimePickerInput
        {...{ onChange }}
        label="Select Time"
        minTime="11:00"
        value="12:45"
      />
    );
    const timePickerInput = screen.getByDisplayValue("12:45");
    fireEvent.change(timePickerInput, { target: { value: "10:00" } });

    const timePickerInputs = screen.getAllByRole("spinbutton");
    await userEvent.click(timePickerInputs[0]);
    await userEvent.click(timePickerInputs[1]);
    await userEvent.click(document.body);
    expect(onChange).toHaveBeenCalledWith(expect.anything(), "11:00");
  });

  it("should not allow time after maxTime", async () => {
    const onChange = jest.fn();
    render(
      <TimePickerInput
        {...{ onChange }}
        label="Select Time"
        maxTime="11:00"
        value="10:00"
      />
    );
    const timePickerInput = screen.getByDisplayValue("10:00");
    fireEvent.change(timePickerInput, { target: { value: "11:30" } });

    const timePickerInputs = screen.getAllByRole("spinbutton");
    await userEvent.click(timePickerInputs[0]);
    await userEvent.click(timePickerInputs[1]);
    await userEvent.click(document.body);
    expect(onChange).toHaveBeenCalledWith(expect.anything(), "11:00");
  });
});
