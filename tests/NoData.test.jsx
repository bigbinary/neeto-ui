import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NoData } from "components";

describe("Typography", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <NoData
        primaryButtonProps={{ label: "Add new ticket" }}
        title="There are no tickets to show."
      />
    );
    expect(getByText("There are no tickets to show.")).toBeInTheDocument();
  });

  it("should display primary and secondary button tooltips when button is disabled and showTooltipWhenButtonDisabled is true", async () => {
    const { getByTestId } = render(
      <NoData
        showTooltipWhenButtonDisabled
        title="There are no tickets to show."
        primaryButtonProps={{
          label: "Add new ticket",
          tooltipProps: { content: "Primary tooltip" },
          disabled: true,
        }}
        secondaryButtonProps={{
          label: "Add new ticket",
          tooltipProps: { content: "Secondary tooltip" },
          disabled: true,
        }}
      />
    );

    const primaryButton = getByTestId("no-data-primary-button");
    await userEvent.hover(primaryButton);
    await expect(screen.getByText("Primary tooltip")).toBeInTheDocument();

    const secondaryButton = getByTestId("no-data-secondary-button");
    await userEvent.hover(secondaryButton);
    await expect(screen.getByText("Secondary tooltip")).toBeInTheDocument();
  });

  it("should not display primary and secondary button tooltips when button is disabled and showTooltipWhenDisabled is false", async () => {
    const { getByTestId } = render(
      <NoData
        showTooltipWhenButtonDisabled={false}
        title="There are no tickets to show."
        primaryButtonProps={{
          label: "Add new ticket",
          tooltipProps: { content: "Primary tooltip" },
          disabled: true,
        }}
        secondaryButtonProps={{
          label: "Add new ticket",
          tooltipProps: { content: "Secondary tooltip" },
          disabled: true,
        }}
      />
    );

    const primaryButton = getByTestId("no-data-primary-button");
    await userEvent.hover(primaryButton);
    await expect(screen.queryByText("Primary tooltip")).not.toBeInTheDocument();

    const secondaryButton = getByTestId("no-data-secondary-button");
    await userEvent.hover(secondaryButton);
    await expect(
      screen.queryByText("Secondary tooltip")
    ).not.toBeInTheDocument();
  });

  it("should display primary and secondary button tooltips when button is not disabled", async () => {
    const { getByTestId } = render(
      <NoData
        title="There are no tickets to show."
        primaryButtonProps={{
          label: "Add new ticket",
          tooltipProps: { content: "Primary tooltip" },
        }}
        secondaryButtonProps={{
          label: "Add new ticket",
          tooltipProps: { content: "Secondary tooltip" },
        }}
      />
    );

    const primaryButton = getByTestId("no-data-primary-button");
    await userEvent.hover(primaryButton);
    await expect(screen.getByText("Primary tooltip")).toBeInTheDocument();

    const secondaryButton = getByTestId("no-data-secondary-button");
    await userEvent.hover(secondaryButton);
    await expect(screen.getByText("Secondary tooltip")).toBeInTheDocument();
  });
});
