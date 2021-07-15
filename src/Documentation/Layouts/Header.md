## Props

```table
rows:
  - Prop: '**title**'
    Definition: 'To set a title in the header section'
    Type: 'String'
  - Prop: '**subtitle**'
    Definition: 'To specify external classnames as overrides to the header.'
    Type: 'String'
  - Prop: '**className**'
    Definition: 'To set a subtitle in the header section.'
    Type: 'String'
  - Prop: '**actionBlock**'
    Definition: 'To specify the content to be rendered in the right side of the header component.'
    Type: 'Valid JSX'
  - Prop: '**showMenu**'
    Definition: 'To change the icon in the menu button on opening and closing of the menu'
    Type: 'Boolean'
  - Prop: '**toggleMenu**'
    Definition: 'To specify the callback which will be invoked when the menu button is clicked.'
    Type: 'Function'
  - Prop: '**breadcrumbs**'
    Definition: 'To show breadcrumbs in the header section'
    Type: 'Array of objects'
    Structure: '`[{text:"Main Section", link:"/main"}]`'
```

## Preview

### Basic usage

```react
plain: true
showSource: true

---
<div className="p-4">
  <Header title="Layouts" subtitle="Header" toggleMenu={()=>{}}/>
</div>
```

### With Beadcrumbs

```react
plain: true
showSource: true

---
const breadcrumbs = [{text:"Home",link:"/home"},{text:"Layouts",link:"/layouts"},{text:"Header",link:"/documentation#/header"}];

<div className="p-4">
  <Header breadcrumbs={breadcrumbs} toggleMenu={()=>{}}/>
</div>
```

### With actionBlock

```react
plain: true
showSource: true
---
<div className="p-4">
  <Header
    title="Layouts"
    toggleMenu={()=>{}}
    actionBlock={
      <button type="secondary">
        Add Layout
      </button>
    }
  />
</div>
```
