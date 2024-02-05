import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";

import DateTimePicker from "components/DateTimePicker";

const theDate = dayjs("2024-12-24 12:30");
const anotherDate = theDate.add(1, "day");
const anotherTime = theDate.subtract(1, "hour").subtract(15, "minute");

const DATE_DISPLAY_FORMAT = "DD/MM/YYYY";
const TIME_FORMAT = "HH:mm";

const simpleDayJsObj = obj => ({
  $y: obj.$y,
  $M: obj.$M,
  $D: obj.$D,
  $W: obj.$W,
  $H: obj.$H,
  $m: obj.$m,
  $s: obj.$s,
  $ms: obj.$ms,
});

describe("DateTimePicker", () => {
  it("should render without error", () => {
    render(<DateTimePicker defaultValue={theDate} />);
    expect(screen.getByRole("textbox")).toHaveValue(
      theDate.format(DATE_DISPLAY_FORMAT)
    );

    expect(
      screen.getByDisplayValue(theDate.format(TIME_FORMAT))
    ).toBeInTheDocument();
  });

  it("onChange should be called on date change", () => {
    const onChangeMock = jest.fn();
    render(
      <DateTimePicker
        datePickerProps={{ open: true }}
        value={theDate}
        onChange={onChangeMock}
      />
    );
    fireEvent.click(screen.getByText(anotherDate.get("D")));
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining(simpleDayJsObj(anotherDate)),
      "date"
    );
  });

  it("onChange should be called on time change", () => {
    const onChangeMock = jest.fn();
    render(<DateTimePicker value={theDate} onChange={onChangeMock} />);
    const timePickerInput = screen.getByDisplayValue(
      theDate.format(TIME_FORMAT)
    );
    fireEvent.change(timePickerInput, { target: { value: "11:15" } });

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining(simpleDayJsObj(anotherTime)),
      "time"
    );
  });

  it("onChange is called with null if time is removed", () => {
    const onChangeMock = jest.fn();
    const { container } = render(
      <DateTimePicker value={theDate} onChange={onChangeMock} />
    );

    const timeInput = container.querySelector(
      'input[name="time"][type="time"]'
    );
    fireEvent.change(timeInput, { target: { value: "" } }); // remove time
    expect(onChangeMock).toHaveBeenCalledWith(null, "time");
  });

  it("onChange is called with null if date is removed", async () => {
    const onChangeMock = jest.fn();
    const { container } = render(
      <DateTimePicker value={theDate} onChange={onChangeMock} />
    );
    const clearButton = container.querySelector(".ant-picker-clear");
    userEvent.click(clearButton);

    await userEvent.type(
      document.querySelector(".ant-picker input"),
      "{Enter}"
    );
    expect(onChangeMock).toHaveBeenCalledWith(null, "date");
  });
});
