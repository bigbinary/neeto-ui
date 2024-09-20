import React, { useState } from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Button } from "components";

const ButtonWithStatus = ({ status: testingStatus }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setStatus(testingStatus);
      setLoading(false);
    }, 500);
  };

  return (
    <Button
      {...{ loading, status }}
      label="Save changes"
      onClick={handleButtonClick}
    />
  );
};

describe("Button", () => {
  it("should render without error", () => {
    const { getByText } = render(<Button label="Button" />);
    expect(getByText("Button")).toBeInTheDocument();
  });

  it("should call onClick on button click", async () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button {...{ onClick }} label="Button" />);
    await userEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick on button click when disabled", async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button {...{ onClick }} disabled label="Button" />
    );
    await userEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should not call onClick on button click when loading", async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button {...{ onClick }} loading label="Button" />
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

  it("should show a thumbs up  icon after loading is set false when the status is `success`", async () => {
    render(<ButtonWithStatus status="success" />);

    await userEvent.click(screen.getByText("Save changes"));
    await expect(screen.getByTestId("loading-icon")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId("user-feedback-icon")).toBeInTheDocument();
    });
    expect(screen.getByText("👍")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByTestId("user-feedback-icon")).not.toBeInTheDocument();
    });
  }, 6000);

  it("should show a cross  icon after loading is set false when the status is `error`", async () => {
    render(<ButtonWithStatus status="error" />);

    await userEvent.click(screen.getByText("Save changes"));
    await expect(screen.getByTestId("loading-icon")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId("user-feedback-icon")).toBeInTheDocument();
    });
    expect(screen.queryByText("👍")).not.toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByTestId("user-feedback-icon")).not.toBeInTheDocument();
    });
  }, 6000);

  it("should not show any feedback if status is not set.", async () => {
    render(<ButtonWithStatus />);

    await userEvent.click(screen.getByText("Save changes"));
    await expect(screen.getByTestId("loading-icon")).toBeInTheDocument();

    await expect(
      screen.queryByTestId("user-feedback-icon")
    ).not.toBeInTheDocument();
  });
});
