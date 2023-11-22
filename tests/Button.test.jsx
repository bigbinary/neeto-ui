import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Button } from "components";

describe("Button", () => {
  it("should render without error", () => {
    const { getByText } = render(<Button label="Button" />);
    expect(getByText("Button")).toBeInTheDocument();
  });

  it("should call onClick on button click", async () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Button" onClick={onClick} />);
    await userEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick on button click when disabled", async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button disabled label="Button" onClick={onClick} />
    );
    await userEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should not call onClick on button click when loading", async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button loading label="Button" onClick={onClick} />
    );
    await userEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should show tooltip when button is hovered", async () => {
    const { getByText } = render(
      <Button label="Button" tooltipProps={{ content: "Tooltip" }} />
    );
    await userEvent.hover(getByText("Button"));
    expect(getByText("Tooltip")).toBeInTheDocument();
  });

  it("should show icon when icon string is provided", () => {
    const { getByTestId } = render(<Button icon="check" />);
    expect(getByTestId("class-icon")).toBeInTheDocument();
  });

  it("should show icon when icon component is provided", () => {
    const { getByTestId } = render(
      <Button icon={() => <svg data-testid="svg-icon" />} />
    );
    expect(getByTestId("svg-icon")).toBeInTheDocument();
  });

  it("should render a link when `href` prop is given", () => {
    const { getByRole } = render(
      <Button href="https://example.com" label="Link" />
    );
    expect(getByRole("link")).toHaveAttribute("href", "https://example.com");
  });

  it("should render a router link when `to` prop is given", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Button label="Router Link" to="/some-path" />
      </BrowserRouter>
    );
    expect(getByRole("link")).toHaveAttribute("href", "/some-path");
  });
});
