import React from "react";

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TimePickerInput } from "components";

const { getByText } = screen;

describe("TimePicker", () => {
  it("should render without error", () => {
    render(<TimePickerInput label="Select Time" />);
    expect(getByText("Select Time")).toBeInTheDocument();
  });

  it("should trigger onBlur on losing focus", async () => {
    const onTimeInputBlur = jest.fn();
    render(<TimePickerInput label="Select Time" onBlur={onTimeInputBlur} />);
    const timePickerInputs = screen.getAllByRole("spinbutton");
    await userEvent.click(timePickerInputs[0]);
    await userEvent.click(timePickerInputs[1]);
    await userEvent.click(document.body);
    expect(onTimeInputBlur).toHaveBeenCalled();
  });
});
