## Props

```table
rows:
  - Prop: '**children**'
    Definition: 'To specify the content to be rendered inside the Callout.'
    Type: 'Valid JSX'
  - Prop: '**className**'
    Definition: 'Provide external classnames to callout component.'
    Type: 'String'
  - Prop: '**style**'
    Definition: 'Specify the style of callout component.'
    Type: 'One of ["info", "warning", "danger"]'
    Default: "info"
  - Prop: '**icon**'
    Definition: "Specify the icon to be used in callout component. By default, icons are based on the style of the callout component. Passing false will hide the icon."
    Type: 'String/Boolean'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4 flex flex-col space-y-4">
  <Callout style="info">This is an info callout!</Callout>
  <Callout style="warning">This is a warning callout!</Callout>
  <Callout style="danger">This is a danger callout!</Callout>
</div>
```
