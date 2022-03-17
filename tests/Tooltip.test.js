import React from "react";
import { Tooltip, Typography } from "../lib/components";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tooltip", () => {
  it("should render on hover ", () => {
    render(
      <Tooltip content="Tooltip">
        <Typography>Text</Typography>
      </Tooltip>
    );
    const text = screen.getByText("Text")
    userEvent.hover(text)
    const tooltip = screen.getByText("Tooltip")
    expect(tooltip).toBeInTheDocument();
  });

  it("should not render when user stops hovering", async () => {
    render(
      <Tooltip content="Tooltip" >
        <Typography>Text</Typography>
      </Tooltip>
    );
    const text = screen.getByText("Text")
    userEvent.hover(text)
    const tooltip = screen.getByText("Tooltip")
    userEvent.unhover(text)
    await waitFor(() => expect(tooltip).not.toBeVisible())
  });

  it("should auto hide tooltip after n milliseconds", async () => {
    render(
      <Tooltip content="Tooltip" hideAfter={100}>
        <Typography>Text</Typography>
      </Tooltip>
    );

    const text = screen.getByText("Text")
    userEvent.hover(text)
    const tooltip = screen.getByText("Tooltip")
    await waitFor(() => expect(tooltip).not.toBeVisible())
  });
});
