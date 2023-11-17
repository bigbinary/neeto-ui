import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Pagination } from "components";

const currentPage = 3;
const count = 1000;
const pageSize = 100;

describe("Pagination", () => {
  it("should render current page number without error", () => {
    const { getByText } = render(
      <Pagination count={count} pageNo={currentPage} pageSize={pageSize} />
    );
    expect(getByText(currentPage)).toBeInTheDocument();
  });

  it("should invoke navigate callback when the left navigate button is clicked.", async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <Pagination
        count={count}
        navigate={navigate}
        pageNo={currentPage}
        pageSize={pageSize}
      />
    );
    await userEvent.click(getByTestId("left-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(currentPage - 1);
  });

  it("should invoke navigate callback when the right navigate button is clicked.", async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <Pagination
        count={count}
        navigate={navigate}
        pageNo={currentPage}
        pageSize={pageSize}
      />
    );
    await userEvent.click(getByTestId("right-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(currentPage + 1);
  });

  it("should invoke navigate callback when any page number is clicked.", async () => {
    const navigate = jest.fn();
    const { getByText } = render(
      <Pagination
        count={count}
        navigate={navigate}
        pageNo={currentPage}
        pageSize={pageSize}
      />
    );
    await userEvent.click(getByText("4"));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(4);
  });

  it("should not render anything when currentPage is 0", () => {
    const { container } = render(
      <Pagination count={count} pageNo={0} pageSize={pageSize} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("should render only left dots when there are more than 1 page between the extremes of left sibling and the page limit", () => {
    const { getByTestId } = render(
      <Pagination count={count} pageNo={7} pageSize={pageSize} />
    );
    const dots = getByTestId("dots");
    expect(dots).toBeInTheDocument();
  });

  it("should render only right dots when there are more than 1 page between the extremes of right sibling and the page limit", () => {
    const { getByTestId } = render(
      <Pagination count={count} pageNo={3} pageSize={pageSize} />
    );
    const dots = getByTestId("dots");
    expect(dots).toBeInTheDocument();
  });

  it("should render both left and right dots when there are more than 1 page between the extremes of both siblings and the page limit", () => {
    const { getAllByTestId } = render(
      <Pagination count={count} pageNo={5} pageSize={pageSize} />
    );
    const dots = getAllByTestId("dots");
    expect(dots.length).toBe(2);
  });

  it("should not render any dots if the number of pages is less than the page numbers we want to show ", () => {
    const { queryByTestId } = render(
      <Pagination count={500} pageNo={currentPage} pageSize={pageSize} />
    );
    const dots = queryByTestId("dots");
    expect(dots).toBeNull();
  });
});
