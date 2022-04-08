import React from "react";
import { Container, Header } from "../lib/components/layouts";
import { render } from "@testing-library/react";

describe("Container", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Container>
        <Header title="Test" />
      </Container>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should render fixed header when the prop value is true", () => {
    const neetoClassPrefix = "neeto-ui-container--";

    const { container } = render(
      <Container isHeaderFixed>
        <Header title="Test" />
      </Container>
    );

    const innerContainer = container.firstChild;
    const classList = innerContainer.classList;
    expect(classList.contains(`${neetoClassPrefix + "header-fixed"}`)).toBe(
      true
    );
  });
});
