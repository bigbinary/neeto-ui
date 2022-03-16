import React from "react";
import { Avatar } from "../lib/components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Avatar", () => {
  it("should render without error", () => {
    const { getByRole } = render(<Avatar />);
    const avatarImg = getByRole('img');
    expect(avatarImg).toBeInTheDocument();
  });

  it("should render initials  when username is given", () => {
    const { getByText } = render(<Avatar user={{ name: 'neeto UI' }} />);
    expect(getByText("NU")).toBeInTheDocument();
  });

  it("should not render initials  when username is not given", () => {
    const { queryByTestId } = render(<Avatar />);
    expect(queryByTestId("initials")).toBeNull();
  });

  it("should call onClick when the avatar is clicked", () => {
    const onClick = jest.fn()
    const { getByText } = render(<Avatar user={{ name: 'neeto UI' }} onClick={onClick} />);
    const avatar = getByText("NU")
    userEvent.click(avatar);
    expect(onClick).toBeCalledTimes(1)
  });
});
