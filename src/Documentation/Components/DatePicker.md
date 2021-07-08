A calendar like static date chooser component where users can pick a date from the calendar view.

## Props

```table
rows:
  - Prop: '**value**'
    Definition: 'An instance of [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to be used as the value of this component.'
    Type: 'Date'
  - Prop: '**minDate**'
    Definition: 'The least date that is considered to be valid. Any dates prior to this date will be disabled in the date picker.'
    Type: 'Date'
  - Prop: '**maxDate**'
    Definition: 'The maximum date that is considered to be valid. Any dates beyond this will be disabled in the date picker.'
    Type: 'Date'
  - Prop: '**onChange**'
    Definition: 'The callback that will be triggered when user alters the DateInput value.'
    Type: 'function (newDate: Date) => any'
  - Prop: '**ref**'
    Definition: 'The ref to be forwarded down to the DOM input element.'
    Type: 'RefObject<HTMLInputElement>'
  - Prop: '**···otherProps**'
    Definition: 'Any other props passed to this component will be directly forwarded to the inner [BlueprintJS DatePicker](https://blueprintjs.com/docs/#datetime/datepicker) component as its props. Refer [its available props](https://blueprintjs.com/docs/#datetime/datepicker.props) for better insight.'
    Type: '...any'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
  <div className="inline-block">
    <label className="font-bold">Basic usage</label>
    <DatePicker />
  </div>

  <div className="inline-block">
    <label className="font-bold">With a fixed value</label>
    <DatePicker value={new Date()} />
  </div>

  <div className="inline-block">
    <label className="font-bold">With change listener</label>
    <DatePicker onChange={e => alert("You selected " + e)} />
  </div>

  <div className="inline-block">
    <label className="font-bold">Only future is allowed</label>
    <DatePicker minDate={new Date()} />
  </div>

  <div className="inline-block">
    <label className="font-bold">Only past is allowed</label>
    <DatePicker maxDate={new Date()} />
  </div>

  <div className="inline-block">
    <label className="font-bold">Today is highlighted (otherProps)</label>
    <DatePicker highlightCurrentDay />
  </div>
</div>
```
