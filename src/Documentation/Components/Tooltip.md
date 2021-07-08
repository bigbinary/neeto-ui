Tooltips are used to show simple information popups when mouse is hovered over their child components. It is typically used for showing a short description for icon buttons.

## Props

```table
rows:
  - Prop: '**theme**'
    Definition: 'To display Tooltip in dark or light theme. By default the theme is dark.'
    Type: '"dark" or "light"'
  - Prop: '**content**'
    Definition: 'The component to be rendered inside the popup.'
    Type: 'JSX'
  - Prop: '**children**'
    Definition: 'Tooltip popup will be shown when mouse is hovered over this component.'
    Type: 'JSX'
  - Prop: '**minimal**'
    Definition: 'This boolean field determines whether the popup should be rendered with minimum additional styling. This might come useful when using complex JSX as Tooltip popup content. By default, this is false.'
    Type: 'Boolean'
  - Prop: '**className**'
    Definition: 'CSS class names to be applied to the wrapper component.'
    Type: 'String'
  - Prop: '**···otherProps**'
    Definition: 'Any other props passed to this component will be directly forwarded to the inner [BlueprintJS Tooltip](https://blueprintjs.com/docs/#core/components/tooltip) component as its props. Refer [its available props](https://blueprintjs.com/docs/#core/components/tooltip.props) for better insight.'
    Type: '...any'
```

## Preview

#### Basic usage

```react
plain: true
showSource: true
---
const basicPopup = <span>Hello world</span>;
const complexPopup = (
  <span className="text-red-200">
    <b>This</b> <i>is a</i> <s>bit complex</s> <u>JSX block</u> popup
  </span>
);

<div className="p-5 space-y-3">
  <Tooltip content={basicPopup}>Basic usage</Tooltip>

  <Tooltip content={complexPopup}>With complex popup JSX</Tooltip>

  <Tooltip content={basicPopup} theme="light">
    Light theme
  </Tooltip>

  <Tooltip content={basicPopup} minimal>
    Minimal popup styling
  </Tooltip>

  <Tooltip content={basicPopup}>
    <div className="rounded-md shadow-md p-3 text-center">
      Over a custom <br />
      JSX element
    </div>
  </Tooltip>

  <Tooltip content={basicPopup} position="bottom">
    Extra props (position) forwarded to BlueprintJS Tooltip
  </Tooltip>
</div>;
```
