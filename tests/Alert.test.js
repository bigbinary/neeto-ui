import React from "react";
import { Alert } from "../lib/components";
import { render, fireEvent } from "@testing-library/react";

describe("Alert", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Alert title="Alert title" message="Alert message" isOpen />
    );
    expect(getByText("Alert title")).toBeInTheDocument();
    expect(getByText("Alert message")).toBeInTheDocument();
  });

  it("should not display content when isOpen is false", () => {
    const { queryByText } = render(
      <Alert title="Alert title" message="Alert message" isOpen={false} />
    );
    expect(queryByText("Alert title")).not.toBeInTheDocument();
    expect(queryByText("Alert message")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Alert
        title="Alert title"
        message="Alert message"
        isOpen
        onClose={onClose}
      />
    );
    fireEvent.click(getByTestId("close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should call onSubmit when submit button is clicked", () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <Alert
        title="Alert title"
        message="Alert message"
        isOpen
        onSubmit={onSubmit}
        submitButtonLabel="Submit"
      />
    );
    fireEvent.click(getByText("Submit"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when cancel button is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Alert
        title="Alert title"
        message="Alert message"
        isOpen
        onClose={onClose}
        cancelButtonLabel="Cancel"
      />
    );
    fireEvent.click(getByText("Cancel"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close the alert when Esc key is pressed", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Alert
        title="Alert title"
        message="Alert message"
        isOpen
        onClose={onClose}
        closeOnEsc
      />
    );
    fireEvent.keyDown(container, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
      bubbles: true,
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close the alert when Esc key is pressed when closeOnEsc is false", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Alert
        title="Alert title"
        message="Alert message"
        isOpen
        onClose={onClose}
        closeOnEsc={false}
      />
    );
    fireEvent.keyDown(container, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
      bubbles: true,
    });
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should close alert when clicking outside", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Alert
        title="Alert title"
        message="Alert message"
        isOpen
        onClose={onClose}
        closeOnOutsideClick
      />
    );
    fireEvent.mouseDown(getByTestId("backdrop"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close alert when clicking outside when closeOnOutsideClick is false", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Alert
        title="Alert title"
        message="Alert message"
        isOpen
        onClose={onClose}
        closeOnOutsideClick={false}
      />
    );
    fireEvent.mouseDown(getByTestId("backdrop"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
