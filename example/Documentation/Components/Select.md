## Props

```table
rows:
  - Prop: '**label**'
    Definition: 'To specify the text to be displayed above the select component.'
    Type: 'String'
  - Prop: '**placeholder**'
    Definition: 'To specify the text to be displayed as placeholder.'
    Type: 'String'
  - Prop: '**labelProps**'
    Definition: 'To specify the properties to be passed to the label component.'
    Type: 'Object'
  - Prop: '**required**'
    Definition: 'To specify whether the select field is required or not.'
    Type: 'Boolean'
  - Prop: '**error**'
    Definition: 'To specify the error message to be displayed in the select component.'
    Type: 'String'
  - Prop: '**infoText**'
    Definition: 'To specify info text that appears beside the label.'
    Type: 'String'
  - Prop: '**helpText**'
    Definition: 'To specify the help text that appears below the select component.'
    Type: 'String'
  - Prop: '**className**'
    Definition: 'To specify external classnames as overrides to the select component.'
    Type: 'String'
  - Prop: '**isCreateable**'
    Definition: 'To specify whether the select component is a creatable select component.'
    Type: 'Boolean'
    Default: 'false'
  - Prop: '**isMulti**'
    Definition: 'To specify whether multiple values can be selected.'
    Type: 'Boolean'
```

## Preview

#### Single

Allows to select a single value from the list

```react
plain: true
showSource: true
---
<div className="p-4 mb-2">
  <Select
    label="Select"
    defaultValue={{ value: "value3", label: "Value Three" }}
    placeholder="Select an Option"
    isDisabled={false}
    isClearable={true}
    isSearchable={true}
    name="ValueList"
    options={[
      { value: "value1", label: "Value One" },
      { value: "value2", label: "Value Two" },
      { value: "value3", label: "Value Three" },
      { value: "value4", label: "Value Four" },
      { value: "value5", label: "Value Five" },
    ]}
  />
</div>;

```

#### Multi

Allows to select a multiple values from the list

```react
plain: true
showSource: true
---
<div className="p-4 mb-2">
  <Select
    label="Multi Select"
    isMulti
    defaultValue={[
      { value: "value3", label: "Value Three" },
      { value: "value5", label: "Value Five" },
    ]}
    placeholder="Select an Option"
    name="ValueList"
    options={[
      { value: "value1", label: "Value One" },
      { value: "value2", label: "Value Two" },
      { value: "value3", label: "Value Three" },
      { value: "value4", label: "Value Four" },
      { value: "value5", label: "Value Five" },
    ]}
  />
</div>;

```

#### Grouped

By passing the options in the nested manner, we can created a grouped list of values as seen below.

```react
plain: true
showSource: true
---
<div className="p-4 mb-2">
  <Select
    label="Grouped Select"
    isMulti
    defaultValue={[
      { value: "value3", label: "Value Three" },
      { value: "value7", label: "Value Seven" },
    ]}
    placeholder="Select an Option"
    name="ValueList"
    options={[
      {
        label: "Group A",
        options: [
          { value: "value1", label: "Value One" },
          { value: "value2", label: "Value Two" },
          { value: "value3", label: "Value Three" },
          { value: "value4", label: "Value Four" },
          { value: "value5", label: "Value Five" },
        ],
      },
      {
        label: "Group B",
        options: [
          { value: "value6", label: "Value Six" },
          { value: "value7", label: "Value Seven" },
          { value: "value8", label: "Value Eight" },
          { value: "value9", label: "Value Nine" },
          { value: "value10", label: "Value Ten" },
        ],
      },
    ]}
  />
</div>;

```

#### Creatable

The Creatable component enables users to create new options along with choosing existing options.

```react
plain: true
state: {
  options: [
        { value: "value1", label: "Value One" },
        { value: "value2", label: "Value Two" },
        { value: "value3", label: "Value Three" },
        { value: "value4", label: "Value Four" },
        { value: "value5", label: "Value Five" },
    ]
  }
showSource: true
---
<div className="p-4 mb-2">
  <Select
    label="Grouped Select"
    isCreateable
    defaultValue={[
      { value: "value3", label: "Value Three" },
    ]}
    placeholder="Select an Option"
    onCreateOption={inputValue =>
      setState(
        {
          options: state.options = [...state.options, {label: inputValue, value: inputValue}]
        }
        )
    }
    name="ValueList"
    defaultOptions={state.options}
  />
</div>;

```

> To get the entire list of props, visit [React-Select](https://react-select.com/home)
