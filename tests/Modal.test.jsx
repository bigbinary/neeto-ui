import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Modal, Typography, Button } from "components";

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
          <Typography lineHeight="normal" style="body2">
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

  it("should trigger onClose on close button is clicked", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    await userEvent.click(getByTestId("close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close the modal when Esc key is pressed", async () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <Modal isOpen onClose={onClose}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );

    await userEvent.click(getByRole("button"));
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close the modal when Esc key is pressed when closeOnEsc is false", async () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal isOpen closeOnEsc={false} onClose={onClose}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    await userEvent.type(container, "{esc}");
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should close modal when clicking outside", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal closeOnOutsideClick isOpen onClose={onClose}>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );
    await userEvent.click(getByTestId("backdrop"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close modal when clicking outside when closeOnOutsideClick is false", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen closeOnOutsideClick={false} onClose={onClose}>
        <Modal.Body>
          Sample text
          <input placeholder="This in input text field." type="text" />
        </Modal.Body>
      </Modal>
    );
    await userEvent.click(getByTestId("backdrop"));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should block scroll when modal is opened", () => {
    render(
      <Modal isOpen>
        <Modal.Body>Sample text</Modal.Body>
      </Modal>
    );

    setTimeout(() => {
      expect(document.body.style.overflow).toBe("hidden");
    }, 500);
  });

  it("should not block scroll on body when blockScrollOnMount is false", () => {
    render(<Modal isOpen blockScrollOnMount={false} />);
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("should focus on the first focusable element when the modal opens", () => {
    const { getByTestId } = render(
      <Modal isOpen>
        <Modal.Body>
          <Button label="Submit" size="large" />
        </Modal.Body>
      </Modal>
    );

    setTimeout(() => {
      expect(getByTestId("close-button")).toHaveFocus();
    }, 500);
  });

  it("should focus on input box when initialFocusRef is passed to it", () => {
    const inputRef = React.createRef(null);
    const { getByTestId } = render(
      <Modal isOpen initialFocusRef={inputRef}>
        <Modal.Body>
          <input data-testid="input" ref={inputRef} />
        </Modal.Body>
      </Modal>
    );

    setTimeout(() => {
      expect(getByTestId("input")).toHaveFocus();
    }, 500);
  });
});
