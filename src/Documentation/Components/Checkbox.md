The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

## Props

```table
rows:
  - Prop: '**id**'
    Definition: 'To specify a unique ID to the checkbox component.'
    Type: 'String'
  - Prop: '**name**'
    Definition:  'To specify a unique name to the checkbox component.'
    Type: 'String'
  - Prop: '**label**'
    Definition: 'To specify the text to be displayed next to the checkbox.'
    Type: 'String'
  - Prop: '**checked**'
    Definition: 'To specify whether the checkbox is checked or not.'
    Type: 'Boolean'
  - Prop: '**disabled**'
    Definition: 'To specify whether the checkbox is disabled or not.'
    Type: 'Boolean'
  - Prop: '**required**'
    Definition: 'To specify whether the checkbox is a required field or not.'
    Type: 'Boolean'
  - Prop: '**className**'
    Definition: 'To provide external classnames to checkbox component.'
    Type: 'String'
  - Prop: '**error**'
    Definition: 'To specify the error message to be shown.'
    Type: 'String'
  - Prop: '**otherProps**'
    Definition: 'To provide any other props to be passed on to the checkbox.'
    Type: 'Object'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4 flex flex-col space-y-4">
  <Checkbox
    name="checkbox_name"
    label="This is a Checkbox"
    checked
  />
  <Checkbox
    name="checkbox_name"
    label="This Checkbox is disabled"
    disabled
  />
  <Checkbox
    label="This Checkbox is required"
    required
  />
  <Checkbox
    label="Checkbox with error"
    error="Error message"
  />
  <Checkbox
    label="This checkbox is checked by default"
    checked
  />
</div>
```
