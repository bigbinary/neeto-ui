## Props

```table
rows:
  - Prop: '**isOpen**'
    Definition: 'To specify whether the modal is open or not.'
    Type: 'Boolean'
  - Prop: '**onClose**'
    Definition: 'To specify the callback which will be invoked when the modal is closed.'
    Type: 'Function'
  - Prop: '**size**'
    Definition: 'To specify the size of the modal.'
    Type: 'One of ["small", "medium", "large"]'
    Default: "large"
  - Prop: '**className**'
    Definition: 'To provide external classNames to the modal.'
    Type: 'String'
  - Prop: '**autoHeight**'
    Definition: 'To specify whether the height of the modal should be set to auto.'
    Type: 'Boolean'
  - Prop: '**autoWidth**'
    Definition: 'To specify whether the width of the modal should be set to auto.'
    Type: 'Boolean'
  - Prop: '**showCloseButton**'
    Definition: 'To specify whether the close button of the modal should be displayed or not.'
    Type: 'Boolean'
  - Prop: '**showFooter**'
    Definition: 'To specify whether the footer of the modal should be displayed or not.'
    Type: 'Boolean'
  - Prop: '**submitButtonProps**'
    Definition: 'To specify the props to be passed to the submit button in the footer.'
    Type: 'Object'
  - Prop: '**cancelButtonProps**'
    Definition: 'To specify the props to be passed to the cancel button in the footer. By default the value of onClick in Cancel button will be the value of the `onClose` prop.'
    Type: 'Object'
  - Prop: '**otherProps**'
    Definition: 'To specify any other props to be passed on to the modal.'
    Type: 'Object'
  - Prop: '**<Modal.Title/>**'
    Definition: 'To render the header to be displayed in the modal. Use Modal.Title inside the modal compoent. And example is given below.'
    Type: 'Component'
```

Please refer [Dialog Component in Blueprint](https://blueprintjs.com/docs/#core/components/dialog) for more details.

## Preview

```react
plain: true
state: {open: false}
showSource: true
---
<div className="p-4">
  <button type="primary" onClick={() => setState({open: state.open = true})}>
    Click here to Open Modal
  </button>
  <Modal
    isOpen={state.open}
    size='small'
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
    autoHeight
    showCloseButton
  >
    <Modal.Title>Modal Title</Modal.Title>
    Modal Content
  </Modal>
</div>
```
