import React from "react";
import { Avatar } from "../lib/components";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Avatar", () => {
  it("should render without error", () => {
    render(<Avatar />);
    const avatarImg = screen.getByRole("img");
    fireEvent.load(avatarImg);
    expect(avatarImg).toBeInTheDocument();
  });

  it("should render initials  when username is given", () => {
    render(<Avatar user={{ name: "neeto UI" }} />);
    expect(screen.getByText("NU")).toBeInTheDocument();
  });

  it("should not render initials  when username is not given", () => {
    render(<Avatar />);
    expect(screen.queryByTestId("initials")).not.toBeInTheDocument();
  });

  it("should call onClick when the avatar is clicked", () => {
    const onClick = jest.fn();
    render(
      <Avatar user={{ name: "neeto UI" }} onClick={onClick} />
    );
    const avatar = screen.getByText("NU");
    userEvent.click(avatar);
    expect(onClick).toBeCalledTimes(1);
  });

  it("should render initials when image is invalid", () => {
    render(
      <Avatar
        user={{
          name: "John Doe",
          imageUrl: "not-found.png",
        }}
      />
    );
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("should render indicator when status is defined", () => {
    render(
      <Avatar
        user={{
          name: "John Doe",
          imageUrl: "not-found.png",
        }}
        status="online"
      />
    );
    expect(screen.getByTestId("indicator")).toBeInTheDocument();
  });
});
