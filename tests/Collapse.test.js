import React from "react";
import { render } from "@testing-library/react";
import Collapse from "../lib/components/Accordion/Collapse";

describe("Collapse", () => {
  it("should render without error", () => {
    const { getByText } = render(<Collapse open>
      <p>Content</p>
    </Collapse>);
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("should not display content when collapsed", () => {
    const { queryByText } = render(<Collapse>
      <p>Content</p>
    </Collapse>);
    expect(queryByText("Content")).not.toBeInTheDocument();
  });
});