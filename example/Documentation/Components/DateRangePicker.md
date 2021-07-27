A calendar like static date range chooser component where users can select required start and end dates from the calendar view.

## Props

```table
rows:
  - Prop: '**value**'
    Definition: 'A list holding instances of start and end [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)s to be used as the value of this component.'
    Type: '[startDate, endDate] as Date[]'
  - Prop: '**minDate**'
    Definition: 'The least date that is considered to be valid. Any dates prior to this date will be disabled in the date picker.'
    Type: 'Date'
  - Prop: '**maxDate**'
    Definition: 'The maximum date that is considered to be valid. Any dates beyond this will be disabled in the date picker.'
    Type: 'Date'
  - Prop: '**onChange**'
    Definition: 'The callback that will be triggered when user chooses a date or a date range from the component. This function will receive start date and end date as parameters inside a 2 element array. The elements are nullable, but the array will always contain 2 elements.'
    Type: 'function ([startDate, endDate]: Date[]) => any'
  - Prop: '**ref**'
    Definition: 'The ref to be forwarded down to the DOM input element.'
    Type: 'RefObject<HTMLInputElement>'
  - Prop: '**···otherProps**'
    Definition: 'Any other props passed to this component will be directly forwarded to the inner [BlueprintJS DateRangePicker](https://blueprintjs.com/docs/#datetime/daterangepicker) component as its props. Refer [its available props](https://blueprintjs.com/docs/#datetime/daterangepicker.props) for better insight.'
    Type: '...any'
```

## Preview

```react
plain: true
showSource: true
---
const today = new Date();
const fortyDaysAgo = new Date();
fortyDaysAgo.setDate(today.getDate() - 40);

<div className="p-4 space-y-6">
  <div>
    <label className="font-bold">Basic usage</label>
    <DateRangePicker value={[fortyDaysAgo, today]} />
  </div>

  <div>
    <label className="font-bold">With max and min dates</label>
    <DateRangePicker minDate={fortyDaysAgo} maxDate={today} />
  </div>

  <div>
    <label className="font-bold">With event callback</label>
    <DateRangePicker onChange={e => alert(JSON.stringify(e))} />
  </div>
</div>
```
