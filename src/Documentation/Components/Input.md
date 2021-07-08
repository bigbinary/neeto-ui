```table
rows:
  - Prop: '**label**'
    Definition: 'To specify the text to be displayed above the input.'
    Type: 'String'
  - Prop: '**type**'
    Definition: 'To specify the type of input field.'
    Type: 'String'
    Default: "text"
  - Prop: '**placeholder**'
    Definition: 'To specify the text to be displayed as placeholder.'
    Type: 'String'
  - Prop: '**value**'
    Definition: 'To specify the value to be provided to input.'
    Type: 'String'
  - Prop: '**className**'
    Definition: 'To specify external classNames that can be provided as overrides to the main wrapper.'
    Type: 'String'
  - Prop: '**inputWrapperClassName**'
    Definition: 'To specify external classNames that can be provided as overrides to input `div` wrapper.'
    Type: 'String'
  - Prop: '**inputClassName**'
    Definition: 'To specify external classNames that can be provided as overrides to `div` wrapping the input.'
    Type: 'String'
  - Prop: '**size**'
    Definition: 'To specify the size of input.'
    Type: 'One of ["small", "large"]'
    Default: "large"
  - Prop: '**required**'
    Definition: 'To specify whether the input field is required or not.'
    Type: 'Boolean'
  - Prop: '**disabled**'
    Definition: 'To specify whether the input field is disabled or not.'
    Type: 'Boolean'
  - Prop: '**error**'
    Definition: 'To specify the error message to be shown in the input field.'
    Type: 'String'
  - Prop: '**prefix**'
    Definition: 'To specify the content to be added at the beginning of the input field.'
    Type: 'Valid JSX'
  - Prop: '**suffix**'
    Definition: 'To specify the content to be added at the end of the input field.'
    Type: 'Valid JSX'
  - Prop: '**infoText**'
    Definition: 'To specify the text that appears as tooltip beside the label.'
    Type: 'String'
  - Prop: '**helpText**'
    Definition: 'To specify the text that appears below the input field.'
    Type: 'String'
  - Prop: '**maxLength**'
    Definition: 'To specify the maximum length of characters that can be provided in the input field. If maxLength is provided, the character count will be displayed on top-right of the input field.'
    Type: 'Integer'
  - Prop: '**labelProps**'
    Definition: 'To specify other properties that can be passed to label.'
    Type: 'Object'
  - Prop: '**nakedInput**'
    Definition: 'To create an input field without any borders.'
    Type: 'Boolean'
  - Prop: '**contentSize**'
    Definition: 'To specify the value to be passed as `size` attribute to the input field.'
    Type: 'Integer'
  - Prop: '**hideCharacterCount**'
    Definition: 'To specify whether the character count needs to be hidden or not when `maxLength` prop is provided.'
    Type: 'Boolean'
  - Prop: '**otherProps**'
    Definition: 'To specify other properties that can be passed to the input component.'
    Type: 'Object'
```

## Preview

```react
showSource: true
---
<div className="flex flex-col space-y-4">
  <Input label="Input" placeholder="Enter Name" className="mb-2"/>
  <Input label="Controlled Input" value="BigBinary" className="mb-2"/>
  <Input label="Small Input" size="small" className="mb-2"/>
  <Input label="Required Input" required={true} className="mb-2"/>
  <Input label="Disabled Input" disabled={true} className="mb-2"/>
  <Input
    label="Search"
    prefix={<i className="ri-search-line pr-2" />}
    suffix=".neetohelp.com"
  />
  <Input label="Error" error="Provide valid email"/>
  <Input label="Name" infoText="This is info text props to the component." helpText="This is help text props to the component."/>
  <Input label="Input Field with maxLength" maxLength={50} hideCharacterCount={false} value="Input Field with a character count."/>
  <Input label="Naked Input Field" nakedInput/>
</div>
```
