Accordion is a vertical list of expandable dropdown components. NeetoUI's `Accordion` component is a wrapper of several `Accordion.Item` JSX elements (or dropdowns). `Accordion.Item` elements are to be wrapped inside the `Accordion` to group them together and ensure that only one of those can be expanded at a time.

`Accordion.Item` can also work as a standalone expandable component, which can be managed by external state. Opening or closing of other `Accordion.Item`s won't affect the standalone ones. [See this example](#standalone-use-of-accordionitem) for better insight.

## Props

### Accordion

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

### Accordion.Item

```table
rows:
  - Prop: '**title**'
    Definition: 'The title of the dropdown component'
    Type: 'String'
  - Prop: '**isOpen**'
    Definition: 'Boolean flag determining whether this component is opened or closed.

    **Note:** This has effect only in standalone use cases.'
    Type: 'Boolean'
  - Prop: '**onClick**'
    Definition: 'The callback to be invoked when the component is clicked for expanding or collapsing. When wrapped inside an Accordion, the component will expand or collapse after completing execution of this method. This method can be used to control state to expand/collapse the item in standalone mode.'
    Type: 'Function'
  - Prop: '**children**'
    Definition: 'The components to be rendered when this item is expanded.'
    Type: 'JSX'
  - Prop: '**labelProps**'
    Definition: 'An object holding props to be forwarded to the [Label](https://neeto-ui.netlify.app/#/label) sub-component (title) of the item.'
    Type: 'Object holding [Label](https://neeto-ui.netlify.app/#/label)''s props'
  - Prop: '**iconProps**'
    Definition: 'An object holding props to be forwarded to the `<i>` tag, which is rendered as the dropdown icon.'
    Type: 'Object'
```

## Preview

### Basic usage

```react
plain: true
showSource: true
state: {largeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
---
<div className="p-4">
  <Accordion>
    <Accordion.Item title="Simple one liner content">
      A simple body
    </Accordion.Item>

    <Accordion.Item title="Large text content">
      {state.largeText}
    </Accordion.Item>

    <Accordion.Item title="JSX content">
      <div className="text-center items-center justify-center space-y-3">
        <h3 className="font-bold">Heading 3</h3>
        <div className="shadow-md rounded-md p-3 m-3">A styled block</div>
        <input type="text" value="Input fields" className="rounded-md" />
      </div>
    </Accordion.Item>
  </Accordion>
</div>
```

### Rendering Arrays

```react
plain: true
showSource: true
state: {
  articleBody: {
    "Lorem ipsum": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    "Sed ut perspiciatis": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",

    "At vero eos": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  }
}
---
const articles = ["Lorem ipsum", "Sed ut perspiciatis", "At vero eos"];

<div className="p-4">
  <Accordion defaultActiveKey={1}>
    {articles.map(title => (
      <Accordion.Item title={title} key={title}>
        {state.articleBody[title]}
      </Accordion.Item>
    ))}
  </Accordion>
</div>;
```

### Additional customizations

```react
plain: true
showSource: true
---
<div className="p-4">
  <Accordion>
    <Accordion.Item
      title="With an information ToolTip"
      labelProps={{
        infoText: "This is the 'infoText' prop of the Label component",
      }}
    >
      A simple body
    </Accordion.Item>

    <Accordion.Item
      title="With custom dropdown icon"
      iconProps={{ className: "ri-send-plane-2-line" }}
    >
      A simple body
    </Accordion.Item>

    <Accordion.Item
      title="With click handler"
      onClick={() => alert("You clicked on the accordion item")}
    >
      A simple body
    </Accordion.Item>
  </Accordion>
</div>
```

### Standalone use of Accordion.Item

```react
plain: true
showSource: true
state: {expanded1: false, expanded2: false}
---
<div className="p-4">
  <Accordion.Item
    title="I am a standalone, independant Accordion.Item"
    onClick={() => setState({ expanded1: !state.expanded1 })}
    isOpen={state.expanded1}
  >
    Note that you can use multiple "Accordion.Item" elements
    anywhere. If they aren't wrapped inside an Accordion component,
    expanding one of the "Accordion.Item" won't close any other
    "Accordion.Item"s
  </Accordion.Item>
  <Accordion.Item
    title="I have no connection with the above one"
    onClick={() => setState({ expanded2: !state.expanded2 })}
    isOpen={state.expanded2}
  >
    As explained in the content of the above "Accordion.Item", this
    "Accordion.Item" has no relation with the above one. Therefore, opening and
    closing of this item won't affect the other one. They are both managed by
    independant state variables.
  </Accordion.Item>
</div>
```
