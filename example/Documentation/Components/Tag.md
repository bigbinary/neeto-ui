The `Tag` component can be used in places like articles to
highlight keywords, denote categories etc in our pages.

## Props

```table
rows:
  - Prop: '**content**'
    Definition: 'Content that should be shown in the tag'
    Type: 'String'
  - Prop: '**type**'
    Definition: 'The type of the tag needed'
    Type: 'String'
  - Prop: '**className**'
    Definition: 'Additional classes that we may want to add to the token.'
    Type: 'String'
  - Prop: '**Icon**'
    Definition: 'The icon that needs to be shown in tags with an icon. This is a string which is the icon name'
    Type: 'String'
  - Prop: '**showClearOption**'
    Definition: 'Boolean to enable or disable clear option.'
    Type: 'Boolean'
  - Prop: '**onClick**'
    Definition: 'The action that needs to happen on clicking the close icon.'
    Type: 'Function'
  - Prop: '**disabled**'
    Definition: 'Boolean to enable or disable click action.'
    Type: 'Boolean'
  - Prop: '**otherProps**'
    Definition: 'Any additional props that needs to be passed to the tag.'
    Type: 'Object'
```

## Preview

```react
plain: true
showSource: true
---
<div className="flex flex-col space-y-4 p-2">
  <div className="flex flex-wrap space-x-4">
    <Tag content="Small" />
    <Tag type="large" content="Large" />
    <Tag type="solid" content="Small Solid" />
    <Tag type="largeSolid" content="Large Solid" />
  </div>
  <div className="flex flex-wrap space-x-4">
    <Tag icon="ri-pencil-line" content="Small" />
    <Tag icon="ri-pencil-line" type="large" content="Large" />
    <Tag icon="ri-pencil-line" showClearOption type="solid" content="Small Solid" />
    <Tag icon="ri-pencil-line" showClearOption type="largeSolid" content="Large Solid" />
  </div>
</div>
```