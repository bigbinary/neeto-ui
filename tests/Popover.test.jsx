import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Popover, Typography, Button } from "components";

describe("Popover", () => {
  const PopoverExample = ({ children, popoverProps }) => (
    <div>
      <Popover
        referenceElement={<Button label="Show Popover" style="secondary" />}
        {...popoverProps}
      >
        <Popover.Title>Popover Title</Popover.Title>
        {children}
      </Popover>
    </div>
  );

  it("should render on hover ", () => {
    render(<PopoverExample />);
    const text = screen.getByText("Show Popover");
    userEvent.hover(text);
    const popover = screen.getByText("Popover Title");
    expect(popover).toBeInTheDocument();
  });

  it("should not render when user stops hovering", async () => {
    render(<PopoverExample />);
    const text = screen.getByText("Show Popover");
    userEvent.hover(text);
    const popover = screen.getByText("Popover Title");
    userEvent.unhover(text);
    await waitFor(() => expect(popover).not.toBeVisible());
  });

  it("should auto hide after 20ms", async () => {
    render(<PopoverExample popoverProps={{ hideAfter: 20 }} />);
    const text = screen.getByText("Show Popover");
    userEvent.hover(text);
    const popover = screen.getByText("Popover Title");
    await waitFor(() => expect(popover).not.toBeVisible(), { timeout: 20 });
  });

  it("should render a disabled popover", () => {
    render(<PopoverExample popoverProps={{ disabled: true }} />);
    const text = screen.getByText("Show Popover");
    userEvent.hover(text);
    const popover = screen.queryByText("Popover Title");
    expect(popover).not.toBeInTheDocument();
  });

  it("should render popover title", () => {
    render(<PopoverExample />);
    const text = screen.getByText("Show Popover");
    userEvent.hover(text);
    const popoverTitle = screen.getByText("Popover Title");
    expect(popoverTitle).toBeInTheDocument();
  });

  it("should render children", () => {
    render(
      <PopoverExample>
        <Typography>Popover Content</Typography>
      </PopoverExample>
    );
    const text = screen.getByText("Show Popover");
    userEvent.hover(text);
    const popoverContent = screen.getByText("Popover Content");
    expect(popoverContent).toBeInTheDocument();
  });
});
