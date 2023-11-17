import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Pane, Typography, Button } from "components";

describe("Pane", () => {
  it("should render without error", async () => {
    render(
      <Pane isOpen>
        <Pane.Header>
          <Typography style="h2">Pane header</Typography>
        </Pane.Header>
      </Pane>
    );
    expect(await screen.findByText("Pane header")).toBeInTheDocument();
  });

  it("should not display content when isOpen is false", () => {
    const { queryByText } = render(
      <Pane>
        <Pane.Header>
          <Typography style="h2">Pane header</Typography>
        </Pane.Header>
      </Pane>
    );
    expect(queryByText("Pane header")).not.toBeInTheDocument();
  });

  it("should render body", async () => {
    render(
      <Pane isOpen>
        <Pane.Body>
          <Typography lineHeight="normal" style="body2">
            Pane body
          </Typography>
        </Pane.Body>
      </Pane>
    );

    expect(await screen.findByText("Pane body")).toBeInTheDocument();
  });

  it("should render footer", async () => {
    render(
      <Pane isOpen>
        <Pane.Footer>
          <Button label="Submit" />
        </Pane.Footer>
      </Pane>
    );
    expect(await screen.findByText("Submit")).toBeInTheDocument();
  });

  it("should not show close button when closeButton is false", () => {
    const { queryByTestId } = render(
      <Pane isOpen closeButton={false}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    expect(queryByTestId("close-button")).not.toBeInTheDocument();
  });

  it("should trigger onClose when close button is clicked", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Pane isOpen onClose={onClose}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    await userEvent.click(getByTestId("close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close the pane when Esc key is pressed", async () => {
    const onClose = jest.fn();
    const { container } = render(
      <Pane isOpen onClose={onClose}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    await userEvent.type(container, "{esc}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close the pane when Esc key is pressed when closeOnEsc is false", async () => {
    const onClose = jest.fn();
    const { container } = render(
      <Pane isOpen closeOnEsc={false} onClose={onClose}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    await userEvent.type(container, "{esc}");
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should close pane on clicking outside", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Pane closeOnOutsideClick isOpen onClose={onClose}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    await userEvent.click(getByTestId("backdrop"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should focus on the close button when the pane is opened", async () => {
    render(
      <Pane isOpen>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );

    await waitFor(async () =>
      expect(await screen.findByTestId("close-button")).toHaveFocus()
    );
  });

  it("should focus on input box when initialFocusRef is passed to it", async () => {
    const inputRef = React.createRef(null);
    render(
      <Pane isOpen initialFocusRef={inputRef}>
        <Pane.Body>
          <input data-testid="input" ref={inputRef} />
        </Pane.Body>
      </Pane>
    );

    expect(await screen.findByTestId("input")).toHaveFocus();
  });

  it("should not close pane on clicking outside when closeOnOutsideClick is false", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Pane isOpen closeOnOutsideClick={false} onClose={onClose}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    await userEvent.click(getByTestId("backdrop"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
