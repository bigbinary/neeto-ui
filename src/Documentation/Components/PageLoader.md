PageLoader is a page loading status indicator. A typical use-case will be to hide the page (avoid rendering) until necessary values are loaded from API. If the webpage can be rendered sanely and only a specific sub-component need to be shown loading, use [Spinner](https://neeto-ui.netlify.app/#/spinner)

## Props

```table
rows:
  - Prop: '**text**'
    Definition: 'Text to indicate loading status (optional).'
    Type: 'String'
  - Prop: '**color**'
    Definition: 'A valid HTML color in which loading component should be rendered.

    Example: "red", "#232486"'
    Type: 'String'
  - Prop: '**...otherProps**'
    Definition: 'Any other props passed to this component will be directly forwarded

    to the PageLoader''s wrapper container `<div>` element as its props.'
    Type: '...any'
```

## Preview

#### Basic usage

```react
plain: true
showSource: true
---
<div className="p-5">
  <PageLoader />
</div>
```

#### Loading text

```react
plain: true
showSource: true
state: { value: 1 }
---
setTimeout(() => setState({ value: state.value + 1 }), 1000);
<div className="pt-10 pb-10">
  <PageLoader text={`Please wait ${5 - (state.value % 5)} seconds`} />
</div>
```

#### Custom color

```react
plain: true
showSource: true
state: {value: 1}
---
<div className="p-5">
  <PageLoader color="red" />
</div>
```
