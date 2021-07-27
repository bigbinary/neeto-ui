## Props

```table
rows:
  - Prop: '**count**'
    Definition: 'To specify the total number of items.'
    Type: 'Integer'
  - Prop: '**pageNo**'
    Definition: 'To specify the current page number.'
    Type: 'Integer'
  - Prop: '**pageSize**'
    Definition: 'To specify the size of a single page.'
    Type: 'Integer'
  - Prop: '**navigate**'
    Definition: 'To specify the callback which will be invoked when the navigate buttons are clicked.'
    Type: 'Function'
  - Prop: '**className**'
    Definition: 'To provide external classname to the pagination component.'
    Type: 'String'
  - Prop: '**emptyPageMsg**'
    Definition: 'To specify the text to be shown on hover of the items range when the page is empty.'
    Type: 'String'
```

## Preview

### Basic usage

```react
plain: true
showSource: true
---
<div className="p-4">
  <Pagination
    count={500}
    pageNo={3}
    pageSize={100}
    navigate={(pageNumber) => {}}
  />
</div>
```
