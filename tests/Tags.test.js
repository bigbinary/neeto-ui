import React from 'react';
import Tags from '../lib/molecules/Tags';
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const allTags = [{
  label: 'Tag1',
  value: 'tag1'
},{
  label: 'Tag2',
  value: 'tag2'
},{
  label: 'Tag3',
  value: 'tag3'
}];

const selectedTags = [{
  label: 'Tag1',
  value: 'tag1'
}];

describe("Tags", () => {
  it("should render without error", () => {
    const { getByText } = render(<Tags
      allTags={allTags}
      selectedTags={selectedTags} />);
    expect(getByText("Tags")).toBeInTheDocument();
    expect(getByText("Tag1")).toBeInTheDocument();
    expect(getByText("New Tag")).toBeInTheDocument();
  });

  it("should show select control on button click", () => {
    const { getByText } = render(<Tags
      allTags={allTags}
      selectedTags={selectedTags} />);
    const button = getByText("New Tag");
    userEvent.click(button);
    expect(getByText("Select or Create tag")).toBeInTheDocument();
  })

  it("should show options on click of select", () => {
    const { getByRole, getByText } = render(<Tags
      allTags={allTags}
      selectedTags={selectedTags} />);
    const button = getByText("New Tag");
    userEvent.click(button);
    const select = getByRole("combobox");
    userEvent.click(select);
    expect(getByText("Tag2")).toBeInTheDocument();
    expect(getByText("Tag3")).toBeInTheDocument();
  })

  it("should call onTagSelect on select option", () => {
    const onTagSelect = jest.fn();
    const { getByRole, getByText } = render(<Tags
      allTags={allTags}
      selectedTags={selectedTags}
      onTagSelect={onTagSelect} />
    );
    const button = getByText("New Tag");
    userEvent.click(button);
    const select = getByRole("combobox");
    userEvent.click(select);
    userEvent.click(getByText("Tag2"));
    expect(onTagSelect).toHaveBeenCalledTimes(1);
  })

  it("should call onTagCreate on select option", () => {
    const onTagCreate = jest.fn();
    const { getByRole, getByText } = render(<Tags
      allTags={allTags}
      selectedTags={selectedTags}
      onTagCreate={onTagCreate} />
    );
    const button = getByText("New Tag");
    userEvent.click(button);
    const select = getByRole("combobox");
    userEvent.type(select, "hello");
    userEvent.type(select, "{enter}");
    expect(onTagCreate).toHaveBeenCalledTimes(1);
  })
})