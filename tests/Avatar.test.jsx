import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Avatar } from "components";

describe("Avatar", () => {
  it("should render without error", () => {
    render(<Avatar />);
    const avatarImg = screen.getByRole("img");
    fireEvent.load(avatarImg);
    expect(avatarImg).toBeInTheDocument();
  });

  it("should call onClick when the avatar is clicked", async () => {
    const onClick = jest.fn();
    render(<Avatar user={{ name: "neeto UI" }} onClick={onClick} />);
    const avatar = screen.getByTestId("avatar");
    await userEvent.click(avatar);
    expect(onClick).toBeCalledTimes(1);
  });

  it("should render indicator when status is defined", () => {
    render(
      <Avatar
        status="online"
        user={{
          name: "John Doe",
          imageUrl: "not-found.png",
        }}
      />
    );
    expect(screen.getByTestId("indicator")).toBeInTheDocument();
  });

  it("should not show tooltip on hover if showTooltip is not provided", async () => {
    const { queryByText, getByTestId } = render(
      <Avatar user={{ name: "John Doe" }} />
    );
    await userEvent.hover(getByTestId("avatar"));
    expect(queryByText("John Doe")).not.toBeInTheDocument();
  });

  it("should show tooltip on hover with user name if showTooltip is set to true", async () => {
    const { getByText, getByTestId } = render(
      <Avatar showTooltip user={{ name: "John Doe" }} />
    );
    await userEvent.hover(getByTestId("avatar"));
    expect(getByText("John Doe")).toBeInTheDocument();
  });
});
