import React from "react";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import DatePicker from "components/DatePicker";
import { dayjs } from "utils";

const today = dayjs();
const theDate = dayjs(new Date(1999, 7, 16));
const anotherDate = theDate.add(1, "day");

describe("DatePicker", () => {
  it("should render without error", () => {
    render(<DatePicker defaultValue={theDate} />);
    expect(screen.getByRole("textbox")).toHaveValue(
      theDate.format("DD/MM/YYYY")
    );
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
    render(<DatePicker open showTime defaultValue={theDate} />);
    expect(await screen.findAllByText("00")).toHaveLength(3);
  });

  it("should show only hours if format is HH", async () => {
    render(<DatePicker open showTime defaultValue={today} timeFormat="HH" />);
    expect(await screen.findAllByText("00")).toHaveLength(1);
  });

  it("should show only hours and minutes if format is HH:mm", async () => {
    render(
      <DatePicker open showTime defaultValue={theDate} timeFormat="HH:mm" />
    );
    expect(await screen.findAllByText("00")).toHaveLength(2);
  });

  it("should return date in the given format", () => {
    render(
      <DatePicker
        defaultValue={dayjs("2022-05-24", "YYYY-MM-DD")}
        format="DD/MM/YYYY"
      />
    );
    expect(screen.getByRole("textbox")).toHaveValue("24/05/2022");
  });

  it("should return date time in the given format", () => {
    render(
      <DatePicker
        showTime
        format="DD/MM/YYYY HH:mm"
        defaultValue={dayjs("2022-05-24", "YYYY-MM-DD")
          .hour(12)
          .minute(30)
          .second(0)}
      />
    );
    expect(screen.getByRole("textbox")).toHaveValue("24/05/2022 12:30");
  });

  it("should trigger onChange on selecting a date", () => {
    const onDateChange = jest.fn();
    render(<DatePicker open defaultValue={theDate} onChange={onDateChange} />);
    fireEvent.click(screen.getByText(anotherDate.get("D")));
    expect(onDateChange).toHaveBeenCalled();
  });

  it("should trigger onOk method on clicking on ok button", () => {
    const onOkClick = jest.fn();
    render(
      <DatePicker open showTime defaultValue={theDate} onOk={onOkClick} />
    );
    fireEvent.click(screen.getByText("OK"));
    expect(onOkClick).toHaveBeenCalled();
  });

  it("should show 12 hour format if timeFormat is in 12 hr format", () => {
    render(
      <DatePicker
        open
        showTime
        dateFormat="DD/MM/YYYY"
        defaultValue={dayjs("04/12/2022").hour(14).minute(30)}
        timeFormat="h:mm A"
      />
    );
    expect(screen.getByRole("textbox")).toHaveValue("12/04/2022 2:30 PM");
  });

  it("should be able to select date in a range", () => {
    render(
      <DatePicker
        open
        defaultValue={[dayjs("04/12/2022"), dayjs("04/14/2022")]}
        type="range"
      />
    );
    fireEvent.click(screen.getAllByText("11")[0]);
    fireEvent.click(screen.getAllByText("11")[0]);
    fireEvent.click(screen.getAllByText("16")[1]);
    const dateInputBox = screen.getAllByRole("textbox");
    expect(dateInputBox[0]).toHaveValue("11/04/2022");
    expect(dateInputBox[1]).toHaveValue("16/05/2022");
  });

  it("should render asterisk when required is set to true", () => {
    const { getByText } = render(<DatePicker required label="Input" />);
    const asterisk = getByText("*");
    expect(asterisk).toBeInTheDocument();
  });

  it("should show today button in month and year mode", () => {
    const { getByText } = render(
      <DatePicker open label="Input" mode="month" />
    );
    expect(getByText("Today")).toBeInTheDocument();
  });

  it("onChange should trigger with today date when today is clicked", async () => {
    const onDateChange = jest.fn();
    const { getByText } = render(
      <DatePicker open label="Input" mode="month" onChange={onDateChange} />
    );
    fireEvent.click(getByText("Today"));
    await waitFor(() => {
      expect(onDateChange).toBeCalledWith(
        expect.anything(),
        // eslint-disable-next-line @bigbinary/neeto/use-standard-date-time-formats
        dayjs().format("DD/MM/YYYY")
      );
    });
  });

  it("if selected date is before minDate then it should round to minDate", async () => {
    const value = dayjs("2024-03-15");
    const minDate = dayjs("2024-03-14");
    const onChangeMock = jest.fn();
    render(
      <DatePicker
        {...{ minDate, value }}
        placeholder="Select date"
        onChange={onChangeMock}
      />
    );

    const input = screen.getByPlaceholderText("Select date");
    fireEvent.change(input, { target: { value: "10/10/2000" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledWith(
        expect.anything(),
        // eslint-disable-next-line @bigbinary/neeto/use-standard-date-time-formats
        minDate.format("DD/MM/YYYY")
      );
    });
  });

  it("if selected date is after maxDate then it should round to maxDate", async () => {
    const value = dayjs("2024-03-11");
    const maxDate = dayjs("2024-03-14");
    const onChangeMock = jest.fn();
    render(
      <DatePicker
        {...{ maxDate, value }}
        placeholder="Select date"
        onChange={onChangeMock}
      />
    );

    const input = screen.getByPlaceholderText("Select date");
    fireEvent.change(input, { target: { value: "10/10/2025" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledWith(
        expect.anything(),
        // eslint-disable-next-line @bigbinary/neeto/use-standard-date-time-formats
        maxDate.format("DD/MM/YYYY")
      );
    });
  });

  it("it should render the saved value though it's outside the allowed ranges", () => {
    const value = dayjs("2024-10-25T09:30:00.434Z");
    const expectedValue = value.format("MM/DD/YYYY HH:mm:ss");

    render(
      <DatePicker
        {...{ value }}
        showTime
        dateFormat="MM/DD/YYYY"
        maxDate={dayjs("2024-10-30T09:30:00.434Z")}
        minDate={dayjs()}
        placeholder="Select date"
      />
    );

    const dateInputBox = screen.getByRole("textbox");
    expect(dateInputBox).toHaveValue(expectedValue);
  });
});
