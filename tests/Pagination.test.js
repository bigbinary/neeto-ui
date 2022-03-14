import React from "react";
import { Pagination } from "../lib/components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const currentPage = 3
const count = 500
const pageSize = 100

describe("Pagination", () => {
  it("should render current page number without error", () => {
    const { getByText } = render(
      <Pagination
        count={count}
        pageNo={currentPage}
        pageSize={pageSize}
      />
    );
    expect(getByText(currentPage)).toBeInTheDocument();
  });

  it("should invoke navigate callback when the left navigate button is clicked.", () => {
    const navigate = jest.fn()
    const { getByTestId } = render(
      <Pagination
        count={count}
        pageNo={currentPage}
        pageSize={pageSize}
        navigate={navigate}
      />
    );
    userEvent.click(getByTestId("left-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  it("should invoke navigate callback when the right navigate button is clicked.", () => {
    const navigate = jest.fn()
    const { getByTestId } = render(
      <Pagination
        count={count}
        pageNo={currentPage}
        pageSize={pageSize}
        navigate={navigate}
      />
    );
    userEvent.click(getByTestId("right-navigate-button"));
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  it("should not render anything when currentPage is 0", () => {
    const { container } = render(
      <Pagination
        count={count}
        pageNo={0}
        pageSize={pageSize}
      />
    )
    expect(container.firstChild).toBeNull();
  });
});
