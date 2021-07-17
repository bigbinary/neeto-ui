## Props

```table
rows:
  - Prop: '**searchProps**'
    Definition: 'To add a search field to the subheader section.'
    Type: 'Object'
  - Prop: '**sortProps**'
    Definition: 'To add sort options button to the subheader section.'
    Type: 'Object'
  - Prop: '**tabsProps**'
    Definition: 'To add [Tabs](https://neeto-ui.netlify.app/#/tab) to the subheader section.'
    Type: 'Object'
  - Prop: '**deleteButtonProps**'
    Definition: 'To add delete button to the subheader section.'
    Type: 'Object'
  - Prop: '**paginationProps**'
    Definition: 'To add the pagination component to the subheader section. It contain the current page number, total number of items, items per page and navigation buttons'
    Type: 'Object'
  - Prop: '**columnFilterProps**'
    Definition: 'To add the column filter button to the subheader section. It contains the list of columns with checkboxes.'
    Type: 'Object'
  - Prop: '**changeStateProps**'
    Definition: 'To specify the change state options either as buttons or dropdown. For eg: blocking/unblocking of users.'
    Type: 'Object'
  - Prop: '**useChangeStateButtons**'
    Definition: 'To specify whether the changeState option should be displayed as a dropdown or buttons.'
    Type: 'Boolean'
  - Prop: '**className**'
    Definition: 'To specify external classnames as overrides to the header.'
    Type: 'String'
  - Prop: '**actionBlock**'
    Definition: 'To specify the content to be rendered in the right side of the header section.'
    Type: 'Valid JSX'
  - Prop: '**toggleFilter**'
    Definition: 'To specify the callback which will be invoked when the filter button is clicked. Filter button will be displayed if this function is provided'
    Type: 'Function'
```

## Preview

### Basic usage

```react
plain: true
showSource: true

---
const setSearchString = (value) => {};
const SORT_BY_OPTIONS = [
  { label: "Name", value: "name" },
  { label: "Age", value: "age" },
  { label: "Created Date", value: "created_at" },
];
<div className="p-4">
  <SubHeader
    searchProps={{
      value: 'Search String',
      onChange: (e) => setSearchString(e.target.value),
      clear: () => setSearchString(""),
    }}
    sortProps={{
      options: SORT_BY_OPTIONS,
      onClick: () => {},
      sortBy:{
        column:SORT_BY_OPTIONS[2].value,
        direction:"desc"
      }
    }}
  />
</div>
```

### With `columnFilterProps` and `toggleFilter`

```react
plain: true
showSource: true

---
const COLUMN_FILTERS = {
  email: { show: true, label: "Email" },
  phone: { show: false, label: "Phone" },
  address: { show: true, label: "Address",
  },
};

<div className="p-4">
  <SubHeader
    searchProps={{
      value: 'Search String',
      onChange: (e) => setSearchString(e.target.value),
      clear: () => setSearchString(""),
    }}
    columnFilterProps={{
      columnFilters: COLUMN_FILTERS,
      handleColumnFiltering: () => {},
    }}
    toggleFilter={() => {}}
  />
</div>
```

### With `tabProps`

```react
plain: true
showSource: true

---
const onTabClick = (tabValue) => {}
const TAB_PROPS = {
  tabs:[
    { label: "Tab 1", icon: "ri-user-fill", value: 1 },
    { label: "Tab 2",icon: "ri-group-line",value: 2 }
    ],
  onClick:() => onTabClick(tabValue)
};

<div className="p-4">
  <SubHeader
    tabsProps={TAB_PROPS}
  />
</div>
```

### With `paginationProps`

```react
plain: true
showSource: true
---
const handlePageChange = () => { };
<div className="p-4">
  <SubHeader
    searchProps={{
      value: 'Search String',
      onChange: (e) => setSearchString(e.target.value),
      clear: () => setSearchString(""),
    }}
    paginationProps={{
      count: 100,
      pageNo: 2,
      pageSize: 25,
      navigate: handlePageChange,
    }}
  />
</div>
```

### With `deleteButtonProps`

```react
plain: true
showSource: true
---
const setShowDeleteAlert = () => {};
<div className="p-4">
  <SubHeader
    searchProps={{
      value: 'Search String',
      onChange: (e) => setSearchString(e.target.value),
      clear: () => setSearchString(""),
    }}
    deleteButtonProps={{
      onClick: () => setShowDeleteAlert(true),
      disabled: false,
    }}
  />
</div>
```

### With `changeStateProps`

```react
plain: true
showSource: true
---
<div className="p-4">
  <SubHeader
    toggleFilter={()=>{}}
    searchProps={{
      value: 'Search String',
      onChange: (e) => setSearchString(e.target.value),
      clear: () => setSearchString(""),
    }}
    changeStateProps={{
      options:[{ label: 'Button 1', icon: 'ri-lock-line', value: 1 },
               { label: 'Button 2',  value: 1 }],
      onClick:()=>{},
      disabled:false
      }}
    useChangeStateButtons={true}
  />
</div>
```
