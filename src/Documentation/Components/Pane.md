## Props

```table
rows:
  - Prop: '**title**'
    Definition: 'To specify the title of the pane component.'
    Type: 'String'
  - Prop: '**isOpen**'
    Definition: 'To specify whether the pane component is open or not.'
    Type: 'Boolean'
  - Prop: '**onClose**'
    Definition: 'To specify the callback which will be invoked when the pane is closed.'
    Type: 'Function'
  - Prop: '**children**'
    Definition: 'To specify the content to be rendered inside the pane component.'
    Type: 'valid JSX'
  - Prop: '**className**'
    Definition: 'To provide external classname to the pane component.'
    Type: 'String'
  - Prop: '**showFooter**'
    Definition: 'To specify whether the footer of the pane needs to be shown or not.'
    Type: 'Boolean'
  - Prop: '**submitButtonProps**'
    Definition: 'To specify the props to be passed to the submit button in the footer.'
    Type: 'Object'
  - Prop: '**cancelButtonProps**'
    Definition: 'To specify the props to be passed to the cancel button in the footer. By default the value of onClick for Cancel button will be the value of the `onClose` prop.'
    Type: 'Object'
  - Prop: '**otherProps**'
    Definition: 'To specify any other properties that need to be passed to the pane component.'
    Type: 'Object'
```

## Preview

```react
plain: true
state: {open: false}
showSource: true
---
<div className="p-4">
  <button type="primary" onClick={() => setState({open: state.open = true})}>
    Click here to Open Pane
  </button>
  <Pane
    title="Pane Title"
    isOpen={state.open}
    onClose={() => setState({open: state.open = false})}
    cancelButtonProps={{
      label: 'Cancel',
      onClick: () => setState({open: state.open = false})
    }}
    submitButtonProps={{
      label: 'Submit',
      onClick: () => setState({open: state.open = false})
    }}
    showFooter
  >
    <div className="px-6">
     Pane Content
    </div>
  </Pane>
</div>
```

## Pane with custom footer

```react
plain: true
state: {open: false}
showSource: true
---
<div className="p-4">
  <button type="primary" onClick={() => setState({open: state.open = true})}>
    Click here to Open Pane
  </button>
  <Pane
    title="Pane Title"
    isOpen={state.open}
    onClose={() => setState({open: state.open = false})}
    cancelButtonProps={{
      label: 'Cancel',
      onClick: () => setState({open: state.open = false})
    }}
    submitButtonProps={{
      label: 'Submit',
      onClick: () => setState({open: state.open = false})
    }}
  >
    <div className="px-6">
     Pane Content
      <div className="nui-pane__footer nui-pane__footer--absolute">
        <button className="nui-btn nui-btn--text ml-0 mr-auto">Delete</button>
        <button className="nui-btn nui-btn--secondary mr-2">Cancel</button>
        <button className="nui-btn nui-btn--primary">Submit</button>
      </div>
    </div>
  </Pane>
</div>
```
