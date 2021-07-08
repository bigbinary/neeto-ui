Spinner component is an indeterminate loading status indicator. This can be used to indicate that the processing is still going on while performing time consuming tasks (For example: an API call).

## Props

```table
rows:
  - Prop: '**size**'
    Definition: 'The width and height of the component.

    **Note:** Both width and height will always be equal for this component.'
    Type: 'Integer OR

    A string of value and unit (eg: "1rem")'
  - Prop: '**color**'
    Definition: 'A valid HTML color. Example: "red", "#232486"'
    Type: 'String'
  - Prop: '**className**'
    Definition: 'To apply custom style classes to the component'
    Type: 'Space separated string of css classes'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4 space-y-4">
  <div>
    <h3>Size in integers</h3>
    <Spinner size={30} />
  </div>

  <div>
    <h3>Size with units</h3>
    <Spinner size="1rem" />
  </div>

  <div>
    <h3>Custom color</h3>
    <Spinner size={30} color="red" />
  </div>

  <div>
    <h3>Custom classes</h3>
    <Spinner size="2rem" className="ml-4 shadow rounded-full" />
  </div>
</div>
```
