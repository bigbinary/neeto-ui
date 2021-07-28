An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

## Props

```table
rows:
  - Prop: '**icon**'
    Definition: 'To pass custom icons to the Component.'
    Type: 'String'
  - Prop: '**style**'
    Definition: 'Specify the style for Alert component.'
    Type: 'One of ["danger", "info", "warning"]'
  - Prop: '**isOpen**'
    Definition: 'To render the Alert Component.'
    Type: 'Boolean'
  - Prop: '**onClose**'
    Definition: 'To close the Alert Component.'
    Type: 'Function'
  - Prop: '**title**'
    Definition: 'To add Title to Alert Component.'
    Type: 'String'
  - Prop: '**message**'
    Definition: 'To add alert message the Alert Component.'
    Type: 'String'
  - Prop: '**hideConfirmation**'
    Definition: 'To hide the confirmation text at the end of the alert component.'
    Type: 'Boolean'
  - Prop: '**confirmationText**'
    Definition: 'Use custom text as confirmation text at the end of the alert component.'
    Type: 'String'
  - Prop: '**submitButtonProps**'
    Definition: 'To provide submit button handler to Footer in the Modal.'
    Type: 'Object'
  - Prop: '**cancelButtonProps**'
    Definition: 'To provide cancel button handler to Footer in the Modal. By default the value of onClick in cancelButtonProps will be the value of the onClose prop.'
    Type: 'Object'
  - Prop: '**otherProps**'
    Definition: 'Pass any other properties to alert component.'
    Type: 'Object'
```

## Preview

```react
plain: true
showSource: true
state: {open: false}
---
<div className="p-4">
  <button type="primary" onClick={() => setState({isopen: state.open = true})}>
    Click here to open Alert Component
  </button>
  <Alert
    isOpen={state.open}
    title="Alert Title"
    message="This is an alert message"
    onClose={() => setState({open: state.open = false})}
   cancelButtonProps={{
      onClick: () => setState({open: state.open = false})
    }}
    submitButtonProps={{
      onClick: () => setState({open: state.open = false})
    }}
  />
</div>
```
