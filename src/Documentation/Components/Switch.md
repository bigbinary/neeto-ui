Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.

## Props

```table
rows:
  - Prop: '**name**'
    Definition: 'Name attribute for component'
    Type: 'String'
  - Prop: '**checked**'
    Definition: 'Checks whether the switch is checked or not'
    Type: 'Boolean'
  - Prop: '**label**'
    Definition: 'Text to be displayed above the component'
    Type: 'String'
  - Prop: '**disabled**'
    Definition: 'To disable the component'
    Type: 'Boolean'
  - Prop: '**onChange**'
    Definition: 'Callback that gets triggered when the switch is toggled.'
    Type: 'Function (ChangeEvent) => any'
  - Prop: '**labelProps**'
    Definition: 'The props to be forwarded to the Switch''s Label sub-component.'
    Type: 'Object holding [Label](https://neeto-ui.netlify.app/#/label)''s props'
  - Prop: '**...otherProps**'
    Definition: 'Refers to any extra props that are passed to this component. These props will be forwarded to the internal HTML `<input type="checkbox">` element of the switch component.'
    Type: '...any'
```

## Preview

#### Checked State

```react
plain: true
showSource: true
---
<div className="p-4">
  <Switch
    checked={true}
  />
</div>
```

#### Unchecked State

```react
showSource: true
plain: true
---
<div className="p-4">
  <Switch
    checked={false}
  />
</div>
```

#### Disabled State

```react
plain: true
showSource: true
---
<div className="p-4">
  <Switch
    disabled
  />
</div>
```

#### With Label

```react
plain: true
showSource: true
---
<div className="p-4">
  <Switch
    label="Switch Label Example"
  />
</div>
```

#### With Custom Label

```react
plain: true
showSource: true
---
<div className="p-4">
  <Switch
    label="Switch Label Example"
    labelProps={{ className: "ml-3 shadow-md" }}
  />
</div>
```

#### With Change Listener

```react
plain: true
showSource: true
---
<div className="p-4">
  <Switch
    onChange={e => alert('Callback invoked')}
  />
</div>
```
