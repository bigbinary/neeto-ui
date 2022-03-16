import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import dayjs from "dayjs";
import DatePicker from "../lib/components/DatePicker";

const today = dayjs();
const tomorrow = dayjs().add(1, "day");

describe("DatePicker", () => {
  it("should render without error", () => {
    render(<DatePicker defaultValue={today} />);
    expect(screen.getByRole("textbox")).toHaveValue(today.format("DD/MM/YYYY"));
  });

  it("should show label if label is provided", () => {
    render(<DatePicker label="DatePicker Label" />);
    expect(screen.getByText("DatePicker Label")).toBeInTheDocument();
  });

  it("should show error if error is provided", () => {
    render(<DatePicker error="DatePicker Error" />);
    expect(screen.getByText("DatePicker Error")).toBeInTheDocument();
  });

  it("should render time if showTime is true", async () => {
    render(<DatePicker defaultValue={today} showTime open />);
    expect(await screen.findAllByText("00")).toHaveLength(3);
  });

  it("should show only hours if format is HH", async () => {
    render(<DatePicker defaultValue={today} timeFormat="HH" showTime open />);
    expect(await screen.findAllByText("00")).toHaveLength(1);
  });

  it("should show only hours and minutes if format is MM", async () => {
    render(
      <DatePicker defaultValue={today} timeFormat="HH:mm" showTime open />
    );
    expect(await screen.findAllByText("00")).toHaveLength(2);
  });

  it("should return date in the given format", async () => {
    render(
      <DatePicker
        defaultValue={dayjs("2022-05-24", "YYYY-MM-DD")}
        format="DD/MM/YYYY"
      />
    );
    expect(screen.getByRole("textbox")).toHaveValue("24/05/2022");
  });

  it("should return date time in the given format", async () => {
    render(
      <DatePicker
        defaultValue={dayjs("2022-05-24", "YYYY-MM-DD")
          .hour(12)
          .minute(30)
          .second(0)}
        format="DD/MM/YYYY HH:mm"
        showTime
      />
    );
    expect(screen.getByRole("textbox")).toHaveValue("24/05/2022 12:30");
  });

  it("should trigger onChange on selecting a date", () => {
    const onChange = jest.fn();
    render(<DatePicker defaultValue={today} onChange={onChange} open />);
    fireEvent.click(screen.getByText(tomorrow.get("D")));
    expect(onChange).toHaveBeenCalled();
  });

  it("should trigger onOk method on clicking on ok button", () => {
    const onOk = jest.fn();
    render(<DatePicker open showTime defaultValue={today} onOk={onOk} />);
    fireEvent.click(screen.getByText("Ok"));
    expect(onOk).toHaveBeenCalled();
  });

  it("should show 12 hour format if timeFormat is in 12 hr format", () => {
    render(
      <DatePicker
        defaultValue={dayjs("12/04/2022", "DD/MM/YYYY").hour(14).minute(30)}
        dateFormat="DD/MM/YYYY"
        showTime
        timeFormat="h:mm A"
        open
      />
    );
    expect(screen.getByRole("textbox")).toHaveValue("12/04/2022 2:30 PM");
  });

  it("should be able to select date in a range", () => {
    render(
      <DatePicker
        defaultValue={[
          dayjs("12/04/2022", "DD/MM/YYYY"),
          dayjs("14/04/2022", "DD/MM/YYYY"),
        ]}
        type="range"
        open
      />
    );
    fireEvent.click(screen.getAllByText("11")[0]);
    fireEvent.click(screen.getAllByText("16")[1]);
    const dateInputBox = screen.getAllByRole("textbox");
    expect(dateInputBox[0]).toHaveValue("11/04/2022");
    expect(dateInputBox[1]).toHaveValue("16/05/2022");
  });
});
