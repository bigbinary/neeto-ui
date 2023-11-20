import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Pagination } from "components";
import { getQueryParams } from "utils";

const currentPage = 3;
const count = 1000;
const pageSize = 100;

const NeetoUIPagination = props => (
  <BrowserRouter>
    <Pagination {...props} />
  </BrowserRouter>
);

describe("Pagination", () => {
  it("should render current page number without error", () => {
    const { getByText } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={currentPage} />
    );
    expect(getByText(currentPage)).toBeInTheDocument();
  });

  it("should invoke navigate callback when the left navigate button is clicked.", async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <NeetoUIPagination
        {...{ count, navigate, pageSize }}
        pageNo={currentPage}
      />
    );
    await userEvent.click(getByTestId("left-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(currentPage - 1);
  });

  it("should invoke navigate callback when the right navigate button is clicked.", async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <NeetoUIPagination
        {...{ count, navigate, pageSize }}
        pageNo={currentPage}
      />
    );
    await userEvent.click(getByTestId("right-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(currentPage + 1);
  });

  it("should invoke navigate callback when any page number is clicked.", async () => {
    const navigate = jest.fn();
    const { getByText } = render(
      <NeetoUIPagination
        {...{ count, navigate, pageSize }}
        pageNo={currentPage}
      />
    );
    await userEvent.click(getByText("4"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(4);
  });

  it("should not render anything when currentPage is 0", () => {
    const { container } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={0} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("should render only left dots when there are more than 1 page between the extremes of left sibling and the page limit", () => {
    const { getByTestId } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={7} />
    );
    const dots = getByTestId("dots");
    expect(dots).toBeInTheDocument();
  });

  it("should render only right dots when there are more than 1 page between the extremes of right sibling and the page limit", () => {
    const { getByTestId } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={3} />
    );
    const dots = getByTestId("dots");
    expect(dots).toBeInTheDocument();
  });

  it("should render both left and right dots when there are more than 1 page between the extremes of both siblings and the page limit", () => {
    const { getAllByTestId } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={5} />
    );
    const dots = getAllByTestId("dots");
    expect(dots.length).toBe(2);
  });

  it("should not render any dots if the number of pages is less than the page numbers we want to show ", () => {
    const { queryByTestId } = render(
      <NeetoUIPagination {...{ pageSize }} count={500} pageNo={currentPage} />
    );
    const dots = queryByTestId("dots");
    expect(dots).toBeNull();
  });

  it("should set page query params when any page number is clicked, provided that navigate fn is not passed", async () => {
    const { getByText } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={currentPage} />
    );
    await userEvent.click(getByText("4"));
    const queryParams = getQueryParams();
    expect(queryParams).toEqual({ page: "4" });
  });

  it("should set previouse page param when the left navigate button is clicked, provided that navigate fn is not passed", async () => {
    const { getByTestId } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={currentPage} />
    );
    await userEvent.click(getByTestId("left-navigate-button"));

    const queryParams = getQueryParams();
    expect(queryParams).toEqual({ page: "2" });
  });

  it("should set next page param when the right navigate button is clicked, provided that navigate fn is not passed", async () => {
    const { getByTestId } = render(
      <NeetoUIPagination {...{ count, pageSize }} pageNo={currentPage} />
    );
    await userEvent.click(getByTestId("right-navigate-button"));

    const queryParams = getQueryParams();
    expect(queryParams).toEqual({ page: "4" });
  });
});
