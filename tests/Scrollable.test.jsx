import React from "react";

import { render } from "@testing-library/react";

import { Scrollable, Header } from "components/layouts";

describe("Scrollable", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Scrollable size="large">
        <Header title="Test" />
      </Scrollable>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should render props correctly", () => {
    const { container } = render(
      <Scrollable className="test-class">
        <Header title="Test" />
      </Scrollable>
    );
    expect(container.querySelector(".test-class")).toBeInTheDocument();
  });

  it("should be sized according to the size prop", () => {
    const sizes = ["large", "small", "viewport"];
    const neetoClassPrefix = "neeto-ui-scrollable--";

    for (const size of sizes) {
      const { container } = render(
        <Scrollable className="test" size={size}>
          <Header title="Test" />
        </Scrollable>
      );

      const scrollableContainer = container.querySelector(".test");
      const classList = scrollableContainer.classList;
      expect(classList.contains(neetoClassPrefix + size)).toBe(true);
    }
  });
});
