import React, { useState } from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Radio } from "components";

const ControlledRadio = () => {
  const [value, setValue] = useState("");

  return (
    <Radio label="Radio" value={value} onChange={e => setValue(e.target.value)}>
      <Radio.Item label="option1" name="options" value="option1" />
      <Radio.Item label="option2" name="options" value="option2" />
    </Radio>
  );
};

describe("Radio", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Radio label="Radio">
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    expect(getByText("Radio")).toBeInTheDocument();
  });

  it("should call onChange when radio value is changed", async () => {
    const onChange = jest.fn(event => {
      expect(event.target.value).toBe("option1");
    });

    const { getByText } = render(
      <Radio label="Radio" onChange={onChange}>
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    await userEvent.click(getByText("option1"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should display error message", () => {
    const { getByText } = render(
      <Radio error="Error message" label="Radio">
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    const { getByRole } = render(
      <Radio label="Radio">
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    expect(getByRole("radio")).not.toBeChecked();
  });

  it("should show controlled behaviour", async () => {
    const { getAllByRole } = render(<ControlledRadio />);
    const radio = getAllByRole("radio");
    await userEvent.click(radio[0]);
    expect(radio[0]).toBeChecked();
    expect(radio[1]).not.toBeChecked();
    await userEvent.click(radio[1]);
    expect(radio[0]).not.toBeChecked();
    expect(radio[1]).toBeChecked();
  });

  it("should be checked on clicking the radio item", async () => {
    const { getByRole } = render(
      <Radio label="Radio">
        <Radio.Item label="option1" name="options" value="option1" />
      </Radio>
    );
    const radio = getByRole("radio");
    await userEvent.click(radio);
    expect(radio).toBeChecked();
  });
});
