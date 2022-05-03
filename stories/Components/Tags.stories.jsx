import React, { useState } from 'react';

import Tags from '../../lib/Molecules/Tags';

export default {
  title: "Components/Tags",
  component: Tags,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tags } from "@bigbinary/neetoui";`',
      },
    },
  },
}

const Template = (args) => {
  const [allTags,setAllTags] = useState(args.allTags);
  const [selectedTags, setSelectedTags] = useState(args.selectedTags);

  const onTagCreate = tag => {
    setAllTags([...allTags, { label: tag, value: tag }]);
    setSelectedTags([...selectedTags, { label: tag, value: tag }]);
  }

  const onTagSelect = tag =>
    setSelectedTags([...selectedTags, tag]);


  const onTagDelete = tag => setSelectedTags(selectedTags.filter(ele => ele.value !== tag.value));

  return <Tags
    allTags={allTags}
    selectedTags={selectedTags}
    onTagCreate={onTagCreate}
    onTagSelect={onTagSelect}
    onTagDelete={onTagDelete}
    tagProps={args.tagProps}
    buttonProps={args.buttonProps}
    selectProps={args.selectProps}
  />
}

export const Default = Template.bind();
Default.args = {
  allTags: [{
    label: 'Tag1',
    value: 'tag1'
  },{
    label: 'Tag2',
    value: 'tag2'
  },{
    label: 'Tag3',
    value: 'tag3'
  }],
  selectedTags: [{
    label: 'Tag1',
    value: 'tag1'
  }]
}

export const TagWithColor = Template.bind();
TagWithColor.args = {
  allTags: [{
    label: 'Tag1',
    value: 'tag1'
  },{
    label: 'Tag2',
    value: 'tag2'
  },{
    label: 'Tag3',
    value: 'tag3'
  }],
  selectedTags: [{
    label: 'Tag1',
    value: 'tag1'
  }],
  tagProps: {
    color: "gray",
    style: "outline"
  },
  buttonProps: {
    style: "secondary"
  }
}