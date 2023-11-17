import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Tooltip, Typography } from "components";

describe("Tooltip", () => {
  it("should render on hover", async () => {
    render(
      <Tooltip content="Tooltip">
        <Typography>Text</Typography>
      </Tooltip>
    );
    const text = screen.getByText("Text");
    await userEvent.hover(text);
    const tooltip = screen.getByText("Tooltip");
    expect(tooltip).toBeInTheDocument();
  });

  it("should render properly when string is passed as children", async () => {
    render(<Tooltip content="Tooltip">Text</Tooltip>);
    const text = screen.getByText("Text");
    await userEvent.hover(text);
    const tooltip = screen.getByText("Tooltip");
    expect(tooltip).toBeInTheDocument();
  });

  it("should render properly when array of nodes is passed as children", async () => {
    render(
      <Tooltip content="Tooltip">
        <span>Hello</span>
        <span>World</span>
      </Tooltip>
    );
    const text1 = screen.getByText("Hello");
    const text2 = screen.getByText("World");
    await userEvent.hover(text1);
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
    userEvent.hover(text2);
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
  });

  it("should not render when user stops hovering", async () => {
    render(
      <Tooltip content="Tooltip">
        <Typography>Text</Typography>
      </Tooltip>
    );
    const text = screen.getByText("Text");
    await userEvent.hover(text);
    const tooltip = screen.getByText("Tooltip");
    await userEvent.unhover(text);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  });

  it("should auto hide tooltip after n milliseconds", async () => {
    render(
      <Tooltip content="Tooltip" hideAfter={100}>
        <Typography>Text</Typography>
      </Tooltip>
    );

    const text = screen.getByText("Text");
    await userEvent.hover(text);
    const tooltip = screen.getByText("Tooltip");
    await waitFor(() => expect(tooltip).not.toBeVisible());
  });
});
