```table
rows:
  - Prop: '**label**'
    Definition: 'Text to be displayed inside the button.'
    Type: 'String'
  - Prop: '**loading**'
    Definition: 'Indicates if a button is in loading state and shows spinner if true.'
    Type: 'Boolean'
  - Prop: '**style**'
    Definition: 'Specifies the style of the button.'
    Type: 'One of ["primary", "secondary", "danger", "text", "link", "icon"]'
  - Prop: '**size**'
    Definition: 'Set the size of the button.'
    Type: '["large"]'
  - Prop: '**fullWidth**'
    Definition: 'Button will be of full width of the container.'
    Type: 'Boolean'
  - Prop: '**type**'
    Definition: 'Sepcify the type of button.'
    Type: '["button", "reset", "submit"]'
  - Prop: '**icon**'
    Definition: 'Icon to be shown in the button.'
    Type: 'Valid JSX'
  - Prop: '**iconPosition**'
    Definition: 'Specifies the position of the icon.'
    Type: 'One of ["left", "right"]'
  - Prop: '**className**'
    Definition: 'Use external classnames as override to neetoUI button.'
    Type: 'String'
  - Prop: '**disabled**'
    Definition: 'Set button as disabled.'
    Type: 'Boolean'
  - Prop: '**href**'
    Definition: 'Specify an exernal link to which the button points to.'
    Type: 'String'
  - Prop: '**to**'
    Definition: 'Specifies an internal route to which the button points to.'
    Type: 'String'
  - Prop: '**otherProps**'
    Definition: 'Pass any other property to the button'
    Type: 'Object'
```

## Preview

```react
showSource: true
---
<div className="space-y-4">
  <div className="flex flex-row space-x-4 items-center">
    <h1 className="text-base text-gray-700">Button Styles</h1>
    <Button label="Primary Button"/>
    <Button label="Large Button" size="large"/>
    <Button style="secondary" label="Secondary Button"/>
    <Button style="text" label="Text Button"/>
    <Button style="danger" label="Danger Button"/>
  </div>
  <Button  label="Disabled Button" disabled/>
  <Button label="Full Width Button" fullWidth/>
  <div className="flex flex-row space-x-4 items-center">
    <h1 className="text-base text-gray-700">Link Buttons</h1>
    <Button type="link" label="Button with external link" style="text" href="https://www.bigbinary.com"/>
    <Button type="link" label="Button with external classnames" style="text" href="https://www.bigbinary.com" className="text-blue-600 hover:underline"/>
  </div>
  <div className="flex flex-row space-x-4 items-center">
    <h1 className="text-base text-gray-700">Loading state</h1>
    <Button loading label="Loading" className="mr-2"/>
  </div>
  <div className="flex flex-row space-x-4 items-center">
    <h1 className="text-base text-gray-700">Buttons with icons</h1>
    <Button style="primary" label="Submit" icon="ri-save-fill"/>
    <Button style="primary" label="Download" icon="ri-download-2-line" iconPosition="right"/>
  </div>
  <div className="flex flex-row space-x-4 items-center">
    <h1 className="text-base text-gray-700">Icon Buttons</h1>
    <Button style="icon" icon="ri-pencil-line"/>
    <Button style="icon" icon="ri-delete-bin-line"/>
  </div>
</div>
```
