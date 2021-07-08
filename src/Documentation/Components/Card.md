A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

## Props

```table
rows:
  - Prop: '**children**'
    Definition: 'To specify the content to be rendered inside the card.'
    Type: 'Valid JSX'
  - Prop: '**className**'
    Definition: 'To specify external classnames to the card.'
    Type: 'String'
  - Prop: '**rows**'
    Definition: 'To specify the number of rows to be rendered in the collapsed state. If no value is passed, all the rows will be rendered.'
    Type: 'Integer'
  - Prop: '**<Card.Title/>**'
    Definition: 'To render the header to be displayed in the card. Use Card.Title inside the card like the example given below.'
    Type: 'Component'
```

## Preview

```react
plain: true
showSource: true
---
<div className="p-4 flex flex-col space-y-4">
  <Card>
    <Card.Title>Card Title</Card.Title>
    <p>Card Content</p>
  </Card>
  <Card rows={2}>
    <Card.Title>Card with collapsed rows</Card.Title>
    <p>Card Content Row 1</p>
    <p>Card Content Row 2</p>
    <p>Card Content Row 3</p>
    <p>Card Content Row 4</p>
  </Card>
</div>
```
