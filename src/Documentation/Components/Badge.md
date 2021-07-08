## Props

```table
rows:
  - Prop: '**children**'
    Definition: 'The content to be rendered in the badge.'
    Type: 'Valid JSX'
  - Prop: '**className**'
    Definition: 'Provide external classnames to badge component.'
    Type: 'String'
  - Prop: '**color**'
    Definition: 'Specify the color of badge component. Use any valid tailwind colors.'
    Type: 'String'
  - Prop: '**size**'
    Definition: 'To specify the size of the badge component.'
    Type: 'One of ["small", "large"]'
    Default: "small"
  - Prop: '**type**'
    Definition: 'Specify the type of badge component.'
    Type: 'One of ["rounded", "squared"]'
    Default: "rounded"
  - Prop: '**onClose**'
    Definition: "To specify the event to be trigger on clicking the close icon inside the badge. The icon won't be rendered if the event is not provided."
    Type: 'Function'
  - Prop: '**otherProps**'
    Definition: 'Provide any other properties to badge component.'
    Type: 'Object'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4 flex space-x-4">
  <Badge color="red">Red</Badge>
  <Badge color="green">Green</Badge>
  <Badge color="blue" size="large">Blue and large</Badge>
  <Badge color="gray" type="squared">Square Badge</Badge>
  <Badge color="yellow" type="squared" onClose={() => alert("You clicked close icon.")}>Badge with onClose</Badge>
</div>
```
