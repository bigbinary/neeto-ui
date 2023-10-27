import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tree from "components/Tree";

const TREE_DATA = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      { title: "0-0-2", key: "0-0-2" },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      {
        title: "0-1-0",
        key: "0-1-0",
        children: [
          { title: "0-1-0-0", key: "0-1-0-0" },
          { title: "0-1-0-1", key: "0-1-0-1" },
          { title: "0-1-0-2", key: "0-1-0-2" },
        ],
      },
      {
        title: "0-1-1",
        key: "0-1-1",
        children: [
          { title: "0-1-1-0", key: "0-1-1-0" },
          { title: "0-1-1-1", key: "0-1-1-1" },
          { title: "0-1-1-2", key: "0-1-1-2" },
        ],
      },
      { title: "0-1-2", key: "0-1-2" },
    ],
  },
  { title: "0-2", key: "0-2" },
];

describe("Tree", () => {
  it("should render without error", () => {
    render(<Tree treeData={TREE_DATA} />);
    const treeNode = screen.getByText("0-0");
    expect(treeNode).toBeInTheDocument();
    const treeNodeOne = screen.getByText("0-1");
    expect(treeNodeOne).toBeInTheDocument();
  });

  it("should render child node when parent node is clicked", () => {
    const { container } = render(<Tree treeData={[TREE_DATA[0]]} />);
    const parentNode = container.querySelector(".ant-tree-switcher");
    userEvent.click(parentNode);
    expect(screen.getByText("0-0-0")).toBeInTheDocument();
  });
});
