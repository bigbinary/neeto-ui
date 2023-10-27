import React from "react";

import { screen, render } from "@testing-library/react";

import { TimePickerInput } from "components";

const { getByText } = screen;

describe("TimePicker", () => {
  it("should render without error", () => {
    render(<TimePickerInput label="Select Time" />);
    expect(getByText("Select Time")).toBeInTheDocument();
  });
});
