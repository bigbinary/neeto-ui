An auto-validating input field that accepts time in different formats from user. Apart from manual input, this component supports incrementing and decrementing time fields using arrow keys on keyboard too.

## Props

```table
rows:
  - Prop: '**value**'
    Definition: 'An instance of [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) whose time part will be used as the value of this component. The time displayed in the component will be in the browser''s time zone, regardless of what the date object is initialized with.'
    Type: 'Date'
  - Prop: '**label**'
    Definition: 'The label text for the input element.'
    Type: 'String'
  - Prop: '**labelProps**'
    Definition: 'The object to be destructured to the TimeInput''s [Label](https://neeto-ui.netlify.app/#/label) sub-component.'
    Type: 'Object holding [Label](https://neeto-ui.netlify.app/#/label)''s props'
  - Prop: '**required**'
    Definition: 'The label text will be appended with a `*` if this flag is true'
    Type: 'Boolean'
  - Prop: '**useAmPm**'
    Definition: 'If this flag is set false, the 24-hour format will be chosen for the TimeInput. By default its value is true and TimeInput shows an AM/PM dropdown alongside the input fields.'
    Type: 'Boolean'
  - Prop: '**error**'
    Definition: 'The error message to be shown below the TimeInput component.'
    Type: 'JSX or String'
  - Prop: '**infoText**'
    Definition: 'A brief help description that should be shown in a Tooltip when hovered over the information icon.'
    Type: 'String'
  - Prop: '**helpText**'
    Definition: 'The help message to be shown below the TimeInput component.'
    Type: 'JSX or String'
  - Prop: '**precision**'
    Definition: 'Maximum allowed precision in the TimeInput field. Default value is `"minute"`.'
    Type: 'One of`["minute", "second", "millisecond"]`'
  - Prop: '**onChange**'
    Definition: 'The callback that will be triggered when user alters the TimeInput value.'
    Type: 'function (newTime: Date) => any'
  - Prop: '**className**'
    Definition: 'To apply custom style classes to the component''s wrapper div.'
    Type: 'Space separated string of css classes'
  - Prop: '**···otherProps**'
    Definition: 'Any other props passed to this component will be directly forwarded to the inner [BlueprintJS TimePicker](https://blueprintjs.com/docs/#datetime/timepicker) component as its props. Refer [its available props](https://blueprintjs.com/docs/#datetime/timepicker.props) for better insight.'
    Type: '...any'
```

## Preview

```react
plain: true
showSource: true
state: {time: new Date()}
---
<div className="p-4 space-y-6">
  <TimeInput
    value={state.time}
    label="Basic usage"
    onChange={newTime => setState({ time: newTime })}
  />

  <TimeInput
    value={state.time}
    label="24 hour mode"
    useAmPm={false}
    onChange={newTime => setState({ time: newTime })}
  />

  <TimeInput
    value={state.time}
    label="With error message"
    onChange={newTime => setState({ time: newTime })}
    error="Sample error message"
  />

  <TimeInput
    value={state.time}
    label="With help and info"
    onChange={newTime => setState({ time: newTime })}
    helpText="Sample help message"
    infoText="Sample information popup"
  />

  <TimeInput
    value={state.time}
    label="With millisecond precision"
    onChange={newTime => setState({ time: newTime })}
    precision="millisecond"
  />
</div>
```
