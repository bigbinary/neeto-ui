import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import { MenuBar } from "components/layouts";
import { Typography } from "components";
import { Search } from "neetoicons";

describe("Menubar", () => {
  it("should render without errors", () => {
    const { getByText } = render(<MenuBar showMenu title="Test" />);

    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should not be displayed when menu is hidden", () => {
    const { queryByText } = render(<MenuBar showMenu={false} title="Test" />);

    expect(queryByText("Test")).not.toBeInTheDocument();
  });

  it("should display className prop correctly", () => {
    const { container } = render(
      <MenuBar showMenu title="Test" className="test-class" />
    );

    expect(container.querySelector(".test-class")).toBeInTheDocument();
  });

  it("should render Menubar.Block correctly", () => {
    const { getByText, container } = render(
      <Router>
        <MenuBar showMenu title="Test">
          <MenuBar.Block label="Block" count={10} url="/users" />
        </MenuBar>
      </Router>
    );

    expect(getByText("Block")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(container.querySelector("a[href='/users']")).toBeInTheDocument();
  });

  it("should apply Menubar.Block props correctly", () => {
    const neetoClassPrefix = "neeto-ui-menubar__block--";
    const onEdit = jest.fn();
    const onClick = jest.fn();

    const { getByText, container } = render(
      <Router>
        <MenuBar showMenu title="Test">
          <MenuBar.Block
            active
            label="Block"
            count={10}
            onEdit={onEdit}
            onClick={onClick}
          />
        </MenuBar>
      </Router>
    );

    expect(
      container.querySelector(`.${neetoClassPrefix}active`)
    ).toBeInTheDocument();

    const blockContainer = getByText("Block");
    userEvent.click(blockContainer);
    expect(onClick).toHaveBeenCalled();

    const countElement = getByText("10");
    userEvent.click(countElement);
    expect(onEdit).toHaveBeenCalled();
  });

  it("should render Menubar.AddNew correctly", () => {
    const { getByText } = render(
      <MenuBar showMenu title="Title">
        <MenuBar.AddNew label="Test" />
      </MenuBar>
    );

    expect(getByText("Test")).toBeInTheDocument();
  });

  it("should render Menubar.SubTitle correctly", () => {
    const onClick = jest.fn();
    const { getByText, container } = render(
      <MenuBar showMenu title="Title">
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick,
            },
          ]}
        >
          <Typography style="h5">Search</Typography>
        </MenuBar.SubTitle>
      </MenuBar>
    );

    expect(getByText("Search")).toBeInTheDocument();

    const button = container.querySelector("button");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("should not render Menubar.Search when collapsed", () => {
    const { container } = render(
      <MenuBar showMenu title="Title" className="test-menu">
        <MenuBar.Search collapse />
      </MenuBar>
    );

    expect(container.querySelector("input")).not.toBeInTheDocument();
  });

  it("should render Menubar.Search when not collapsed", () => {
    const onCollapse = jest.fn();

    const { container } = render(
      <MenuBar showMenu title="Title">
        <MenuBar.Search collapse={false} onCollapse={onCollapse} />
      </MenuBar>
    );

    expect(container.querySelector("input")).toBeInTheDocument();

    const collapseButton = container.querySelector("button");
    userEvent.click(collapseButton);
    expect(onCollapse).toHaveBeenCalled();
  });

  it("should render Menubar.Item correctly", () => {
    const { container, getByText } = render(
      <MenuBar showMenu>
        <MenuBar.Item
          active
          className="test-item"
          description="Menu Item"
          label="Test"
        />
      </MenuBar>
    );

    const neetoUIClassPrefix = "neeto-ui-menubar__item--";

    expect(getByText("Test")).toBeInTheDocument();
    expect(getByText("Menu Item")).toBeInTheDocument();
    expect(container.querySelector(".test-item")).toBeInTheDocument();
    expect(
      container.querySelector(`.${neetoUIClassPrefix}active`)
    ).toBeInTheDocument();
  });
});
