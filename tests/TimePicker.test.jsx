import React from "react";

import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";

import { TimePicker } from "components";

const currentTime = dayjs();
const { getByRole, getByText, getAllByText, getAllByRole } = screen;

describe("TimePicker", () => {
  it("should render without error", () => {
    render(<TimePicker defaultValue={currentTime} format="HH:mm" />);
    expect(getByRole("textbox")).toHaveValue(currentTime.format("HH:mm"));
  });

  it("should show seconds section if format contains ss", () => {
    render(<TimePicker open defaultValue={currentTime} format="HH:mm:ss" />);
    expect(getAllByText("00").length).toBe(3);
    expect(getByRole("textbox")).toHaveValue(currentTime.format("HH:mm:ss"));
  });

  it("should show meridiem if format contains A", () => {
    render(<TimePicker open defaultValue={currentTime} format="HH:mm A" />);
    expect(getByRole("textbox")).toHaveValue(currentTime.format("HH:mm A"));
    expect(getByText("AM")).toBeInTheDocument();
    expect(getByText("PM")).toBeInTheDocument();
  });

  it("should show label if available", () => {
    render(<TimePicker label="TimePicker Label" />);
    expect(getByText("TimePicker Label")).toBeInTheDocument();
  });

  it("should show error if available", () => {
    render(<TimePicker error="TimePicker Error" />);
    expect(getByText("TimePicker Error")).toBeInTheDocument();
  });

  it("should trigger onChange function on clicking ok button", () => {
    const onChange = jest.fn();
    render(<TimePicker {...{ onChange }} open defaultValue={currentTime} />);
    fireEvent.click(getAllByText("12")[0]);
    fireEvent.click(getAllByText("30")[0]);
    fireEvent.click(getByText("OK"));
    expect(onChange).toHaveBeenCalled();
  });

  it("should trigger onChange function on typing in textbox", async () => {
    const onChange = jest.fn();
    render(<TimePicker {...{ onChange }} open format="HH:mm" />);
    await userEvent.type(getByRole("textbox"), "11:01");
    await fireEvent.click(getByText("OK"));
    expect(onChange).toHaveBeenCalledWith(
      currentTime.hour(11).minute(1).second(0).millisecond(0),
      "11:01"
    );
  });

  it("should not break component even if onChange is not provided", async () => {
    render(<TimePicker open format="HH:mm" />);
    await userEvent.type(getByRole("textbox"), "11:01");
    fireEvent.click(getByText("OK"));
    expect(getByRole("textbox")).toHaveValue("11:01");
  });

  it("should be able to select time in a range", async () => {
    const onChange = jest.fn();
    render(<TimePicker {...{ onChange }} format="HH:mm:ss" type="range" />);
    const startTimeInput = getAllByRole("textbox")[0];
    const endTimeInput = getAllByRole("textbox")[1];
    await userEvent.click(startTimeInput);
    fireEvent.click(getAllByText("02")[0]);
    fireEvent.click(getAllByText("15")[1]);
    fireEvent.click(getAllByText("00")[2]);
    fireEvent.click(getByText("OK"));

    await userEvent.click(endTimeInput);
    fireEvent.click(getAllByText("03")[0]);
    fireEvent.click(getAllByText("20")[1]);
    fireEvent.click(getAllByText("10")[2]);
    fireEvent.click(getByText("OK"));

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(startTimeInput).toHaveValue(
      currentTime.hour(2).minute(15).second(0).format("HH:mm:ss")
    );

    expect(endTimeInput).toHaveValue(
      currentTime.hour(3).minute(20).second(10).format("HH:mm:ss")
    );
  });
});
