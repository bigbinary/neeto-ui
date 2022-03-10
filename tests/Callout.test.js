import React from "react";
import { Callout } from "../lib/components";
import { Check } from "@bigbinary/neeto-icons";
import { render } from "@testing-library/react";

describe("Callout", () => {
  it("should render without error", () => {
    const { getByText } = render(<Callout>Tesing Callout</Callout>);
    expect(getByText("Tesing Callout")).toBeInTheDocument();
  });

  it("should show icon when icon component is provided", () => {
    const { getByTestId } = render(<Callout icon={Check} />);
    expect(getByTestId("callout-icon")).toBeInTheDocument();
  });

  it("should not break component if icon is passed but nil", () => {
    const { container } = render(<Callout icon={null} />);
    expect(container).toMatchSnapshot();
  });
});
