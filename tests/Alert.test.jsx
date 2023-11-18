import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Alert } from "components";

describe("Alert", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Alert isOpen message="Alert message" title="Alert title" />
    );
    expect(getByText("Alert title")).toBeInTheDocument();
    expect(getByText("Alert message")).toBeInTheDocument();
  });

  it("should not display content when isOpen is false", () => {
    const { queryByText } = render(
      <Alert isOpen={false} message="Alert message" title="Alert title" />
    );
    expect(queryByText("Alert title")).not.toBeInTheDocument();
    expect(queryByText("Alert message")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Alert
        isOpen
        message="Alert message"
        title="Alert title"
        onClose={onClose}
      />
    );
    await userEvent.click(getByTestId("close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should call onSubmit when submit button is clicked", async () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <Alert
        isOpen
        message="Alert message"
        submitButtonLabel="Submit"
        title="Alert title"
        onSubmit={onSubmit}
      />
    );
    await userEvent.click(getByText("Submit"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when cancel button is clicked", async () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Alert
        isOpen
        cancelButtonLabel="Cancel"
        message="Alert message"
        title="Alert title"
        onClose={onClose}
      />
    );
    await userEvent.click(getByText("Cancel"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close the alert when Esc key is pressed", async () => {
    const onClose = jest.fn();
    const { getAllByRole } = render(
      <Alert
        closeOnEsc
        isOpen
        message="Alert message"
        title="Alert title"
        onClose={onClose}
      />
    );
    await userEvent.click(getAllByRole("button")[0]);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close the alert when Esc key is pressed when closeOnEsc is false", async () => {
    const onClose = jest.fn();
    const { container } = render(
      <Alert
        isOpen
        closeOnEsc={false}
        message="Alert message"
        title="Alert title"
        onClose={onClose}
      />
    );
    await userEvent.type(container, "{esc}");
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should close alert when clicking outside", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Alert
        closeOnOutsideClick
        isOpen
        message="Alert message"
        title="Alert title"
        onClose={onClose}
      />
    );
    await userEvent.click(getByTestId("backdrop"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close alert when clicking outside when closeOnOutsideClick is false", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Alert
        isOpen
        closeOnOutsideClick={false}
        message="Alert message"
        title="Alert title"
        onClose={onClose}
      />
    );
    await userEvent.click(getByTestId("backdrop"));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should not call onSubmit while alert is closing", async () => {
    const onSubmit = jest.fn();

    const { getByText, rerender } = render(
      <Alert isOpen submitButtonLabel="Submit" onSubmit={onSubmit} />
    );
    await userEvent.click(getByText("Submit"));

    rerender(
      <Alert isOpen={false} submitButtonLabel="Submit" onSubmit={onSubmit} />
    );

    await userEvent.click(getByText("Submit"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
