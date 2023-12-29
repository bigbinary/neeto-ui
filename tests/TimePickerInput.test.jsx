import React from "react";

import { screen, render, fireEvent } from "@testing-library/react";

import { TimePickerInput } from "components";

const { getByText } = screen;

describe("TimePicker", () => {
  it("should render without error", () => {
    render(<TimePickerInput label="Select Time" />);
    expect(getByText("Select Time")).toBeInTheDocument();
  });

  it("should trigger onBlur on losing focus", () => {
    const onTimePickerBlur = jest.fn();
    render(<TimePickerInput label="Select Time" onBlur={onTimePickerBlur} />);
    const timePickerInputs = screen.getAllByRole("spinbutton");
    fireEvent.blur(timePickerInputs[0]);
    expect(onTimePickerBlur).toHaveBeenCalled();
  });

  it("should trigger onFocus on gaining focus", () => {
    const onTimePickerFocus = jest.fn();
    render(<TimePickerInput label="Select Time" onFocus={onTimePickerFocus} />);
    const timePickerInputs = screen.getAllByRole("spinbutton");
    fireEvent.focus(timePickerInputs[0]);
    expect(onTimePickerFocus).toHaveBeenCalled();
  });
});

