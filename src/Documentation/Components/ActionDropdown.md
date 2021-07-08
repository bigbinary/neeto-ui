## Props

```table
rows:
  - Prop: '**style**'
    Definition: 'To apply a pre-defined style to the component.'
    Type: 'One of `["primary", "warning", "secondary", "text"]`'
  - Prop: '**buttonProps**'
    Definition: 'To pass down props to the inner [Button](https://neeto-ui.netlify.app/#/button) component. This field accepts an object and will be destructured as Button''s props.'
    Type: 'Object holding [Button](https://neeto-ui.netlify.app/#/button)''s props'
  - Prop: '**dropdownProps**'
    Definition: 'To pass down props to the inner [Dropdown](https://neeto-ui.netlify.app/#/dropdown) component. This field accepts an object and will be destructured as Dropdown''s props.'
    Type: 'Object holding [Dropdown](https://neeto-ui.netlify.app/#/dropdown)''s props'
  - Prop: '**className**'
    Definition: 'To apply custom style classes to the component'
    Type: 'Space separated string of css classes'
  - Prop: '**children**'
    Definition: 'To specify the list to be rendered when Dropdown is toggled.'
    Type: '`<li>` elements with valid JSX content'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4">
  {/* Simple drop down */}
  <ActionDropdown
    buttonProps={{ label: "Click here" }}
  >
    <li>Option 1</li>
    <li>Option 2</li>
  </ActionDropdown>

  {/* Custom styling */}
  <ActionDropdown
    buttonProps={{ label: "Click here" }}
    style="secondary"
    className="ml-4 mr-4"
  >
    <li>Option 1</li>
    <li>Option 2</li>
  </ActionDropdown>

  {/* Custom Dropdown */}
  <ActionDropdown
    buttonProps={{ label: "Click here" }}
    dropdownProps={{ position: "bottom-right", icon: "ri-send-plane-line" }}
  >
    <li>Option 1</li>
    <li>Option 2</li>
  </ActionDropdown>
</div>
```
