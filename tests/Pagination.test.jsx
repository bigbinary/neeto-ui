import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Pagination } from "components";
import { getQueryParams } from "utils";

const currentPage = 3;
const count = 1000;
const pageSize = 100;

describe("Pagination", () => {
  it("should render current page number without error", () => {
    const { getByText } = render(
      <Pagination {...{ count, pageSize }} pageNo={currentPage} />
    );
    expect(getByText(currentPage)).toBeInTheDocument();
  });

  it("should invoke navigate callback when the left navigate button is clicked.", () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <Pagination {...{ count, navigate, pageSize }} pageNo={currentPage} />
    );
    userEvent.click(getByTestId("left-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(currentPage - 1);
  });

  it("should invoke navigate callback when the right navigate button is clicked.", () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <Pagination {...{ count, navigate, pageSize }} pageNo={currentPage} />
    );
    userEvent.click(getByTestId("right-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(currentPage + 1);
  });

  it("should invoke navigate callback when any page number is clicked.", () => {
    const navigate = jest.fn();
    const { getByText } = render(
      <Pagination {...{ count, navigate, pageSize }} pageNo={currentPage} />
    );
    userEvent.click(getByText("4"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(4);
  });

  it("should not render anything when currentPage is 0", () => {
    const { container } = render(
      <Pagination {...{ count, pageSize }} pageNo={0} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("should render only left dots when there are more than 1 page between the extremes of left sibling and the page limit", () => {
    const { getByTestId } = render(
      <Pagination {...{ count, pageSize }} pageNo={7} />
    );
    const dots = getByTestId("dots");
    expect(dots).toBeInTheDocument();
  });

  it("should render only right dots when there are more than 1 page between the extremes of right sibling and the page limit", () => {
    const { getByTestId } = render(
      <Pagination {...{ count, pageSize }} pageNo={3} />
    );
    const dots = getByTestId("dots");
    expect(dots).toBeInTheDocument();
  });

  it("should render both left and right dots when there are more than 1 page between the extremes of both siblings and the page limit", () => {
    const { getAllByTestId } = render(
      <Pagination {...{ count, pageSize }} pageNo={5} />
    );
    const dots = getAllByTestId("dots");
    expect(dots.length).toBe(2);
  });

  it("should not render any dots if the number of pages is less than the page numbers we want to show ", () => {
    const { queryByTestId } = render(
      <Pagination {...{ pageSize }} count={500} pageNo={currentPage} />
    );
    const dots = queryByTestId("dots");
    expect(dots).toBeNull();
  });

  it("should set query params when any page number is clicked provided that navigate fn is not passed", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Pagination {...{ count, pageSize }} pageNo={currentPage} />
      </BrowserRouter>
    );
    userEvent.click(getByText("4"));
    const queryParams = getQueryParams();
    expect(queryParams).toEqual({ page: "4", page_size: "100" });
  });
});
