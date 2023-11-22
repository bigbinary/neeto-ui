import React from "react";

import { render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "components";

describe("Accordion", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="Item 1">
          <p>Content 1</p>
        </Accordion.Item>
      </Accordion>
    );
    expect(getByText("Item 1")).toBeInTheDocument();
  });

  it("should not render content when accordion is closed", () => {
    const { queryByText } = render(
      <Accordion>
        <Accordion.Item title="Item 1">
          <p>Content 1</p>
        </Accordion.Item>
      </Accordion>
    );
    expect(queryByText("Content 1")).not.toBeInTheDocument();
  });

  it("should open accordion and render content when accordion title is clicked", async () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="Item 1">
          <p>Content 1</p>
        </Accordion.Item>
      </Accordion>
    );
    await userEvent.click(getByText("Item 1"));
    expect(getByText("Content 1")).toBeInTheDocument();
  });

  it("should toggle accordion when Enter or Space key is pressed", async () => {
    const { getByText, queryByText } = render(
      <Accordion>
        <Accordion.Item title="Item 1">
          <p>Content 1</p>
        </Accordion.Item>
      </Accordion>
    );
    await userEvent.click(getByText("Item 1"));
    expect(getByText("Content 1")).toBeInTheDocument();
    await userEvent.type(getByText("Item 1"), "{space}");
    await waitForElementToBeRemoved(() => queryByText("Content 1"));
    expect(queryByText("Content 1")).not.toBeInTheDocument();
    await userEvent.type(getByText("Item 1"), "{enter}");
    expect(getByText("Content 1")).toBeInTheDocument();
  });

  it("should not toggle accordion when any other keys are pressed", async () => {
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="Item 1">
          <p>Content 1</p>
        </Accordion.Item>
      </Accordion>
    );
    await userEvent.click(getByText("Item 1"));
    expect(getByText("Content 1")).toBeInTheDocument();
    await userEvent.type(getByText("Item 1"), "a");
    expect(getByText("Content 1")).toBeInTheDocument();
  });

  it("should trigger onClick when title is clicked", async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Accordion>
        <Accordion.Item title="Item 1" onClick={onClick}>
          <p>Content 1</p>
        </Accordion.Item>
      </Accordion>
    );
    await userEvent.click(getByText("Item 1"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should only open one accordion at a time", async () => {
    const { getByText, queryByText } = render(
      <Accordion>
        <Accordion.Item title="Item 1">
          <p>Content 1</p>
        </Accordion.Item>
        <Accordion.Item title="Item 2">
          <p>Content 2</p>
        </Accordion.Item>
      </Accordion>
    );
    await userEvent.click(getByText("Item 1"));
    expect(getByText("Content 1")).toBeInTheDocument();
    await userEvent.click(getByText("Item 2"));
    await waitForElementToBeRemoved(() => queryByText("Content 1"));
    expect(queryByText("Content 1")).not.toBeInTheDocument();
    expect(getByText("Content 2")).toBeInTheDocument();
  });

  it("should open the the accordion when defaultActiveKey is provided", () => {
    const { getByText } = render(
      <Accordion defaultActiveKey={1}>
        <Accordion.Item title="Item 1">
          <p>Content 1</p>
        </Accordion.Item>
        <Accordion.Item title="Item 2">
          <p>Content 2</p>
        </Accordion.Item>
      </Accordion>
    );
    expect(getByText("Content 2")).toBeInTheDocument();
  });
});
