# Props

### Radio Component

```table
rows:
  - Prop: '**label**'
    Definition: 'To specify the label to be displayed for radio component.'
    Type: 'String'
  - Prop: '**stacked**'
    Definition: 'To specify whether the radio items should be stacked vertically or not.'
    Type: 'Boolean'
    Default: "false"
  - Prop: '**className**'
    Definition: 'To specify external classnames as overrides to the radio component.'
    Type: 'String'
  - Prop: '**children**'
    Definition: 'To specify the content to be rendered inside the radio component.'
    Type: 'Valid JSX'
  - Prop: '**childClassName**'
    Definition: 'To specify the external classnames as overrides to the child wrapper class.'
    Type: 'String'
```

### Radio Options Component

```table
rows:
  - Prop: '**label**'
    Definition: 'To specify the label to be displayed for the radio item component.'
    Type: 'String'
  - Prop: '**name**'
    Definition: 'To specify the name of the radio item component.'
    Type: 'String'
  - Prop: '**className**'
    Definition: 'To provide external classnames as overrides to the radio option component.'
    Type: 'String'
  - Prop: '**disabled**'
    Definition: 'To specify whether the radio item is disabled or not.'
    Type: 'Boolean'
  - Prop: '**checked**'
    Definition: 'To specify whether the radio item is checked or not.'
    Type: 'Boolean'
  - Prop: '**otherProps**'
    Definition: 'To specify other properties to be passed to radio item component.'
    Type: 'Object'
```

## Preview

```react
showSource: true
---
<div className="space-y-4">
  <Radio
    label="Radio Options"
  >
  <Radio.Item label="option1" value="option1"/>
  <Radio.Item label="option2" value="option2"/>
  </Radio>
  <Radio
    label="Radio Options Stacked"
    stacked
  >
  <Radio.Item label="option1" value="option1"/>
  <Radio.Item label="option2" value="option2"/>
  </Radio>
</div>
```
