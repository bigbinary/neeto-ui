## Props

### Tab

```table
rows:
  - Prop: '**children**'
    Definition: 'To add content inside Tab'
    Type: 'String'
  - Prop: '**className**'
    Definition: 'Extra classes can be provided to the Tab'
    Type: 'String'
```

### Tab.Item

```table
rows:
  - Prop: '**active**'
    Definition: 'To set the Active Tab'
    Type: 'Boolean'
  - Prop: '**className**'
    Definition: 'Extra classes can be provided to the Tab Item'
    Type: 'String'
  - Prop: '**icon**'
    Definition: 'To add icons to Tab Item'
    Type: 'String'
  - Prop: '**onClick**'
    Definition: 'Callback to be triggered when user clicks on the Tab Item'
    Type: 'Function'
  - Prop: '**children**'
    Definition: 'To add content inside Tab Item'
    Type: 'JSX'
  - Prop: '**...otherProps**'
    Definition: 'Refers to any extra props that are passed to this component. These props will be forwarded to the internal HTML `<button>` element of the Tab Item.'
    Type: '...any'
```

## Preview

```react
showSource: true
plain: true
---
<div className="p-4">
  <Tab>
    <Tab.Item
      active
    >
      Tab 1
    </Tab.Item>
    <Tab.Item
    >
      Tab 2
    </Tab.Item>
  </Tab>
</div>
```

#### With Icon

```react
plain: true
showSource: true
---
<div className="p-4">
  <Tab>
    <Tab.Item
      icon="ri-user-line"
      active
    >
      Tab 1
    </Tab.Item>
    <Tab.Item
      icon="ri-account-circle-line"
    >
      Tab 2
    </Tab.Item>
  </Tab>
</div>
```

#### With Tab Click callback

```react
plain: true
showSource: true
---
<div className="p-4">
  <Tab>
    <Tab.Item
      onClick={() => alert('Tab 1 Clicked')}
    >
      Tab 1
    </Tab.Item>
    <Tab.Item
      onClick={() => alert('Tab 2 Clicked')}
      active
    >
      Tab 2
    </Tab.Item>
  </Tab>
</div>
```
