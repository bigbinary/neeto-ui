import React, { useState, useMemo } from "react";
import PropTypes, { object } from "prop-types";

import Tag from "../../components/Tag";
import Select from "../../components/Select";
import Button from "../../components/Button";

import { Plus } from "@bigbinary/neeto-icons";

const Tags = ({
  allTags,
  selectedTags,
  onTagSelect,
  onTagCreate,
  onTagDelete,
  tagProps,
  selectProps,
  buttonProps
}) => {
  const [addTag, setAddTag] = useState(false);
  const tags = useMemo(() => {
    if (!allTags) return [];

    if (!selectedTags) return allTags;

    const selectedTagValues = selectedTags.map(({ value }) => value);

    return allTags.filter(({ value }) => !selectedTagValues.includes(value));
  });

  return <div className="mb-6 rounded-md bg-white p-5 shadow">
    <div
      className="mb-5 text-xs font-bold uppercase tracking-wider text-gray-400"
      data-cy="card-title"
    >
      Tags
    </div>
    <div className="mb-2.5 flex flex-row flex-wrap items-start justify-start">
      {selectedTags?.map((tag, index) => (
        <Tag
          key={`${index}-${tag.label}`}
          label={tag.label}
          color="blue"
          onClose={() => onTagDelete(tag)}
          className="mb-2 mr-2"
          {...tagProps}
        />
      ))}
    </div>
    {addTag ? (
      <Select
        isCreateable
        placeholder="Select or Create tag"
        defaultOptions={tags}
        onChange={e => {
          setAddTag(false);
          onTagSelect(e);
        }}
        onCreateOption={e => {
          setAddTag(false);
          onTagCreate(e);
        }}
        size="small"
        {...selectProps}
      />
    ) : (
      <Button
        style="link"
        label="New Tag"
        icon={Plus}
        onClick={() => setAddTag(true)}
        {...buttonProps}
      />)}
  </div>;
};
Tags.propTypes = {
  /**
   * To specify all the tags for tags component.
   */
  allTags: PropTypes.arrayOf(object),
  /**
   * To specify all the selected tags for tags component.
   */
  selectedTags: PropTypes.arrayOf(object),
  /**
   * callback function when select tag is called.
   */
  onTagSelect: PropTypes.func,
  /**
   * callback function when create tag is called.
   */
  onTagCreate: PropTypes.func,
  /**
   * callback function when select delete is called.
   */
  onTagDelete: PropTypes.func,
  /**
   * To specify the props to be passed to the tags target tag.
   */
  tagProps: PropTypes.object,
  /**
   * To specify the props to be passed to the tags target button.
   */
  buttonProps: PropTypes.object,
  /**
   * To specify the props to be passed to the tags target Select.
   */
  selectProps: PropTypes.object,

};

export default Tags;