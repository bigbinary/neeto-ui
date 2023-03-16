import React from "react";
import { Callout } from "components";
import { Check } from "@bigbinary/neeto-icons";
import { render } from "@testing-library/react";

describe("Callout", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Callout>
        <p>Tesing Callout</p>
      </Callout>
    );
    expect(getByText("Tesing Callout")).toBeInTheDocument();
  });

  it("should show icon when icon component is provided", () => {
    const { getByTestId } = render(<Callout icon={Check} />);
    expect(getByTestId("callout-icon")).toBeInTheDocument();
  });
});
