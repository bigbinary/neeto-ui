import React from "react";

import { screen, render, fireEvent } from "@testing-library/react";

import { TimePickerInput } from "components";

const { getByText } = screen;

describe("TimePicker", () => {
  it("should render without error", () => {
    render(<TimePickerInput label="Select Time" />);
    expect(getByText("Select Time")).toBeInTheDocument();
  });

  it("should trigger onBlur on losing focus", async () => {
    const onTimeInputBlur = jest.fn(() => true);
    render(<TimePickerInput label="Select Time" onBlur={onTimeInputBlur} />);
    const timePickerInputs = screen.getAllByRole("spinbutton");
    await fireEvent.blur(timePickerInputs[0]);
    expect(onTimeInputBlur).toHaveBeenCalled();
  });
});
