The `Tag` component can be used in places like articles to
highlight keywords, denote categories etc in our pages.

## Props

```table
rows:
  - Prop: '**children**'
    Definition: 'Instances of `Accordion.Item` components to be grouped together so that only one of them remains opened at a time.'
    Type: '`Accordion.Item`s'
  - Prop: '**className**'
    Definition: 'The css classNames to be applied to the wrapper component'
    Type: 'String'
  - Prop: '**defaultActiveKey**'
    Definition: 'The index of the `Accordion.Item` component to be shown expanded by default.'
    Type: 'Integer'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4 flex space-x-4">
  <Tag content="Small" />
  <Tag type="large" content="Large" />
  <Tag type="solid" content="Small Solid" />
  <Tag type="largeSolid" content="Large Solid" />
</div>
```