An auto-validating input field that accepts a start date and end date in different formats from user. This component will show a date chooser popup when clicked on. It also allows user to manually enter date range in the format specified in the component's props.

## Props

```table
rows:
  - Prop: '**value**'
    Definition: 'A list holding instances of start and end [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)s to be used as the value of this component.'
    Type: '[startDate, endDate] as Date[]'
  - Prop: '**label**'
    Definition: 'The label text for the input element.'
    Type: 'String'
  - Prop: '**labelProps**'
    Definition: 'The object to be destructured to the DateRangeInput''s [Label](https://neeto-ui.netlify.app/#/label) sub-component.'
    Type: 'Object holding [Label](https://neeto-ui.netlify.app/#/label)''s props'
  - Prop: '**required**'
    Definition: 'The label text will be appended with a `*` if this flag is true'
    Type: 'Boolean'
  - Prop: '**format**'
    Definition: 'The format in which the selected date should be rendered in the input field. It should be a [date format recognized by dayjs](https://day.js.org/docs/en/display/format). **Note:** Even though you can use time placeholders in the format string to render time, the date chooser popup won''t include time fields.'
    Type: 'String'
  - Prop: '**error**'
    Definition: 'The error message to be shown below the DateRangeInput component.'
    Type: 'JSX or String'
  - Prop: '**infoText**'
    Definition: 'A brief help description that should be shown in a Tooltip when hovered over the information icon.'
    Type: 'String'
  - Prop: '**helpText**'
    Definition: 'The help message to be shown below the DateRangeInput component.'
    Type: 'JSX or String'
  - Prop: '**minDate**'
    Definition: 'The least date that is considered to be valid. Any dates prior to this date will be disabled in the date picker.'
    Type: 'Date'
  - Prop: '**maxDate**'
    Definition: 'The maximum date that is considered to be valid. Any dates beyond this will be disabled in the date picker.'
    Type: 'Date'
  - Prop: '**onChange**'
    Definition: 'The callback that will be triggered when user chooses a date or a date range from the component. This function will receive start date and end date inside a 2 element array as parameter. The elements are nullable, but the array will always contain 2 elements.'
    Type: 'function ([startDate, endDate]: Date[]) => any'
  - Prop: '**className**'
    Definition: 'To apply custom style classes to the component''s wrapper div.'
    Type: 'Space separated string of css classes'
  - Prop: '**ref**'
    Definition: 'The ref to be forwarded down to the DOM input element.'
    Type: 'React.RefObject<HTMLInputElement>'
  - Prop: '**···otherProps**'
    Definition: 'Any other props passed to this component will be directly forwarded to the inner [BlueprintJS DateRangeInput](https://blueprintjs.com/docs/#datetime/daterangeinput) component as its props. Refer [its available props](https://blueprintjs.com/docs/#datetime/daterangeinput.props) for better insight.'
    Type: '...any'
```

## Preview

```react
plain: true
showSource: true
state: {dateRange: null}
---
const today = new Date();
const fortyDaysAgo = new Date();
fortyDaysAgo.setDate(today.getDate() - 40);

const selectedRange = state.dateRange || [fortyDaysAgo, today];

<div className="p-4 space-y-6">
  <DateRangeInput
    value={selectedRange}
    label="Basic usage"
    onChange={newRange => setState({ dateRange: newRange })}
  />

  <DateRangeInput
    value={selectedRange}
    label="Custom date format"
    format="MMM DD, YYYY"
    onChange={newRange => setState({ dateRange: newRange })}
  />

  <DateRangeInput
    value={selectedRange}
    label="Required field with an error message"
    onChange={newRange => setState({ dateRange: newRange })}
    error="Sample error message"
    required
  />

  <DateRangeInput
    value={selectedRange}
    label="With help and info texts"
    onChange={newRange => setState({ dateRange: newRange })}
    helpText="Sample help message"
    infoText="Sample information popup"
  />

  <DateRangeInput
    value={selectedRange}
    label="Allow only past dates"
    onChange={newRange => setState({ dateRange: newRange })}
    maxDate={today}
  />
</div>
```
