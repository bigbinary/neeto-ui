import React from "react";
import { Modal, Typography, Button } from "../lib/components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Modal", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Modal isOpen>
        <Modal.Header>
          <Typography style="h2">Modal Header</Typography>
        </Modal.Header>
      </Modal>
    );
    expect(getByText("Modal Header")).toBeInTheDocument();
  });

  it("should not display content when isOpen is false", () => {
    const { queryByText } = render(
      <Modal>
        <Modal.Header>
          <Typography style="h2">Modal Header</Typography>
        </Modal.Header>
      </Modal>
    );
    expect(queryByText("Modal Header")).not.toBeInTheDocument();
  });

  it("should render body", () => {
    const { getByText } = render(
      <Modal isOpen>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Sample body text
          </Typography>
        </Modal.Body>
      </Modal>
    );
    expect(getByText("Sample body text")).toBeInTheDocument();
  });

  it("should render footer ", () => {
    const { getByText } = render(
      <Modal isOpen>
        <Modal.Footer>
          <Button label="Submit" size="large" />
        </Modal.Footer>
      </Modal>
    );
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should not show close button when closeButton is false", () => {
    const { queryByTestId } = render(
      <Modal isOpen closeButton={false}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    expect(queryByTestId("close-button")).not.toBeInTheDocument();
  });

  it("should trigger onClose on close button is clicked", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    userEvent.click(getByTestId("close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close the modal when Esc key is pressed", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    userEvent.type(container, "{esc}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close the modal when Esc key is pressed when closeOnEsc is false", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal isOpen onClose={onClose} closeOnEsc={false}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    userEvent.type(container, "{esc}");
    expect(onClose).not.toHaveBeenCalled;
  });

  it("should close modal when clicking outside", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen onClose={onClose} closeOnOutsideClick>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    userEvent.click(getByTestId("backdrop"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close modal when clicking outside when closeOnOutsideClick is false", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen onClose={onClose} closeOnOutsideClick={false}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    userEvent.click(getByTestId("backdrop"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
