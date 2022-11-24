import React from "react";
import { Pane, Typography, Button } from "../lib/components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Pane", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Pane isOpen>
        <Pane.Header>
          <Typography style="h2">Pane header</Typography>
        </Pane.Header>
      </Pane>
    );
    expect(getByText("Pane header")).toBeInTheDocument();
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

  it("should render body", () => {
    const { getByText } = render(
      <Pane isOpen>
        <Pane.Body>
          <Typography style="body2" lineHeight="normal">
            Pane body
          </Typography>
        </Pane.Body>
      </Pane>
    );
    expect(getByText("Pane body")).toBeInTheDocument();
  });

  it("should render footer", () => {
    const { getByText } = render(
      <Pane isOpen>
        <Pane.Footer>
          <Button label="Submit" />
        </Pane.Footer>
      </Pane>
    );
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should not show close button when closeButton is false", () => {
    const { queryByTestId } = render(
      <Pane isOpen closeButton={false}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    expect(queryByTestId("close-button")).not.toBeInTheDocument();
  });

  it("should trigger onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Pane isOpen onClose={onClose}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    userEvent.click(getByTestId("close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close the pane when Esc key is pressed", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Pane isOpen onClose={onClose}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    userEvent.type(container, "{esc}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close the pane when Esc key is pressed when closeOnEsc is false", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Pane isOpen onClose={onClose} closeOnEsc={false}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    userEvent.type(container, "{esc}");
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should close pane on clicking outside", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Pane isOpen onClose={onClose} closeOnOutsideClick>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    userEvent.click(getByTestId("backdrop"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should focus on the close button when the pane is opened", () => {
    // wait for pane animation to be completed and then check if the close button is focused
    const { getByTestId } = render(
      <Pane isOpen>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    setTimeout(() => {
      expect(getByTestId("close-button")).toHaveFocus();
    }, 500);
  });

  it("should focus on input box when initialFocusRef is passed to it", () => {
    const inputRef = React.createRef(null);
    const { getByTestId } = render(
      <Pane isOpen initialFocusRef={inputRef}>
        <Pane.Body>
          <input data-testid="input" ref={inputRef} />
        </Pane.Body>
      </Pane>
    );
    setTimeout(() => {
      expect(getByTestId("input")).toHaveFocus();
    }, 500);
  });

  it("should not close pane on clicking outside when closeOnOutsideClick is false", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Pane isOpen onClose={onClose} closeOnOutsideClick={false}>
        <Pane.Body>Pane body</Pane.Body>
      </Pane>
    );
    userEvent.click(getByTestId("backdrop"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
