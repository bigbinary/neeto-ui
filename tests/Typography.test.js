import React from "react";
import { Typography } from "components";
import { render } from "@testing-library/react";

describe("Typography", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <Typography style="body1">Typography</Typography>
    );
    expect(getByText("Typography")).toBeInTheDocument();
  });

  it("should render a heading when style is of heading type", () => {
    const { getByRole } = render(
      <Typography style="h1">Typography</Typography>
    );
    expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should override default tag when component prop is given", () => {
    const { getByRole } = render(
      <Typography style="h1" component="h2">
        Typography
      </Typography>
    );
    expect(getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
