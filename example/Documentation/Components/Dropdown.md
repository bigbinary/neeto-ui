## Props

```table
rows:
  - Prop: '**buttonStyle**'
    Definition: 'To specify the style of the button to be rendered as the dropdown target.'
    Type: 'One of["primary", "secondary", "text"]'
  - Prop: '**buttonProps**'
    Definition: 'To specify the props to be passed to the dropdown target button.'
    Type: 'Object'
  - Prop: '**label**'
    Definition: 'To specify the label for dropdown target button.'
    Type: 'String'
  - Prop: '**customTarget**'
    Definition: 'To provide a custom target to be rendered instead of the default button target.'
    Type: 'Valid JSX'
  - Prop: '**children**'
    Definition: 'To specify the content to be rendered inside the Dropdown.'
    Type: 'Valid JSX'
  - Prop: '**autoWidth**'
    Definition: 'To specify whether the dropdown menu width needs to be set to auto or not.'
    Type: 'Boolean'
  - Prop: '**className**'
    Definition: 'To specify the classes to be passed to the dropdown target wrapper.'
    Type: 'Boolean'
  - Prop: '**icon**'
    Definition: 'To specify the icon to be rendered in the dropdown target.'
    Type: 'String'
    Default: "ri-arrow-down-s-line"
  - Prop: '**closeOnSelect**'
    Definition: 'To specify whether the dropdown should close on selecting an option.'
    Type: 'Boolean'
  - Prop: '**disabled**'
    Definition: 'To specify whether the dropdown is disabled or not.'
    Type: 'Boolean'
  - Prop: '**popoverClassName**'
    Definition: 'To specify the classes to be passed to the dropdown menu wrapper.'
    Type: 'String'
  - Prop: '**childClassName**'
    Definition: 'To specify the classes to be passed to the dropdown menu container.'
    Type: 'String'
  - Prop: '**ulProps**'
    Definition: 'To specify the classes to be passed to the dropdown menu.'
    Type: 'Object'
  - Prop: '**actionButtonProps**'
    Definition: 'To specify the props which need to be passed to action button which will be displatyed at the bottom of the dropdown list.'
    Type: 'Object'
  - Prop: '**otherProps**'
    Definition: 'To specify any other props which need to be passed to the dropdown component.'
    Type: 'Object'
```

## Preview

### Button Types

```react
plain: true
showSource: true
---
const listItems = ["Option 1", "Option 2", "Option 3"];
<div className="p-4 h-32 flex flex-row flex-wrap items-center justify-between">
    <Dropdown
      label="Primary Dropdown"
      buttonStyle="primary"
      className="ml-3"
      popoverClassName="pb-2"
      position="bottom-right"
      closeOnSelect
    >
      {
        listItems.map((item, idx) =>
          <li key={idx}>{item}</li>
        )
      }
    </Dropdown>
    <Dropdown
      label="Secondary Dropdown"
      buttonStyle="secondary"
      className="ml-3"
      popoverClassName="pb-2"
      position="bottom-right"
      closeOnSelect
    >
      {
        listItems.map((item, idx) =>
          <li key={idx}>{item}</li>
        )
      }
    </Dropdown>
    <Dropdown
      label="Text Dropdown"
      buttonStyle="text"
      className="ml-3"
      popoverClassName="pb-2"
      position="bottom-right"
      closeOnSelect
    >
      {
        listItems.map((item, idx) =>
          <li key={idx}>{item}</li>
        )
      }
    </Dropdown>
    <Dropdown
      label="Dropdown with custom icon"
      buttonStyle="primary"
      className="ml-3"
      popoverClassName="pb-2"
      position="bottom-right"
      icon="ri-send-plane-line"
      closeOnSelect
    >
      {
        listItems.map((item, idx) =>
          <li key={idx}>{item}</li>
        )
      }
    </Dropdown>
     <Dropdown
      label="Dropdown with Action Button"
      actionButtonProps={{
        label: "Add New Item",
        style: "seconary",
        icon: "ri-add-line",
        onClick: () => alert("You clicked on action button in dropdown")
      }}
      buttonStyle="secondary"
      className="ml-3"
      position="bottom-right"
      closeOnSelect
    >
      {
        listItems.map((item, idx) =>
          <li key={idx}>{item}</li>
        )
      }
    </Dropdown>
</div>
```
