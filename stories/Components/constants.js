export const PALETTE_PICKER_CODE = `const OnlyPalettePicker = () => {
  const [color, setColor] = useState("#4558F9");

  const colorList = Object.keys(DEFAULT_COLORS).map(key => ({
    from: key,
    to: key,
  }));

  const findColorByHex = hex => {
    const colorClass = Object.keys(DEFAULT_COLORS).find(
      key => hex === DEFAULT_COLORS[key]
    );

    return { from: colorClass, to: colorClass };
  };

  const selectedColor = findColorByHex(color);

  const handleColorChange = (fromValue, toValue) => {
    action("colorPaletteProps.onChange")(fromValue, toValue);
    const fromColor = DEFAULT_COLORS[fromValue];
    setColor(fromColor);
  };

  return (
    <div className="h-60 w-40">
      <ColorPicker
        color={color}
        showPicker={false}
        colorPaletteProps={{
          color: selectedColor,
          colorList,
          onChange: handleColorChange,
        }}
      />
    </div>
  );
};`;


export const DRAGGABLE_TREE_CODE = `const DraggableTree = () => {
  const [treeData, setTreeData] = useState(TREE_DATA);
  const onDrop = info => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const data = [...treeData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 &&
      // Has children
      info.node.props.expanded &&
      // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar = [];
      let i;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setTreeData(data);
  };

  return <Tree blockNode draggable treeData={treeData} onDrop={onDrop} />;
};`;

export const SEARCHABLE_TREE_CODE = `const SearchableTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = newExpandedKeys => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = ({ target: { value } }) => {
    const newExpandedKeys = TREE_DATA_LIST.map(item => {
      if (item.title.indexOf(value) > -1) {
        return getParentKey(item.key, TREE_DATA);
      }

      return null;
    }).filter((item, i, self) => !!(item && self.indexOf(item) === i));
    setExpandedKeys(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const treeData = useMemo(() => {
    const loop = data =>
      data.map(item => {
        const strTitle = item.title;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);

        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return {
            title,
            key: item.key,
            children: loop(item.children),
          };
        }

        return { title, key: item.key };
      });

    return loop(TREE_DATA);
  }, [searchValue]);

  return (
    <div>
      <Input
        className="my-3"
        label="Search"
        placeholder="Input search text"
        prefix={<Search />}
        type="search"
        value={searchValue}
        onChange={onChange}
      />
      <Tree
        autoExpandParent={autoExpandParent}
        expandedKeys={expandedKeys}
        treeData={treeData}
        onExpand={onExpand}
      />
    </div>
  );
};`;

export const TREE_DATA = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      { title: "0-0-2", key: "0-0-2" },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      {
        title: "0-1-0",
        key: "0-1-0",
        children: [
          { title: "0-1-0-0", key: "0-1-0-0" },
          { title: "0-1-0-1", key: "0-1-0-1" },
          { title: "0-1-0-2", key: "0-1-0-2" },
        ],
      },
      {
        title: "0-1-1",
        key: "0-1-1",
        children: [
          { title: "0-1-1-0", key: "0-1-1-0" },
          { title: "0-1-1-1", key: "0-1-1-1" },
          { title: "0-1-1-2", key: "0-1-1-2" },
        ],
      },
      { title: "0-1-2", key: "0-1-2" },
    ],
  },
  { title: "0-2", key: "0-2" },
];

export const TREE_DATA_LIST = [
  { key: "0-0", title: "0-0" },
  { key: "0-0-0", title: "0-0-0" },
  { key: "0-0-0-0", title: "0-0-0-0" },
  { key: "0-0-0-1", title: "0-0-0-1" },
  { key: "0-0-0-2", title: "0-0-0-2" },
  { key: "0-0-1", title: "0-0-1" },
  { key: "0-0-1-0", title: "0-0-1-0" },
  { key: "0-0-1-1", title: "0-0-1-1" },
  { key: "0-0-1-2", title: "0-0-1-2" },
  { key: "0-0-2", title: "0-0-2" },
  { key: "0-1", title: "0-1" },
  { key: "0-1-0", title: "0-1-0" },
  { key: "0-1-0-0", title: "0-1-0-0" },
  { key: "0-1-0-1", title: "0-1-0-1" },
  { key: "0-1-0-2", title: "0-1-0-2" },
  { key: "0-1-1", title: "0-1-1" },
  { key: "0-1-1-0", title: "0-1-1-0" },
  { key: "0-1-1-1", title: "0-1-1-1" },
  { key: "0-1-1-2", title: "0-1-1-2" },
  { key: "0-1-2", title: "0-1-2" },
  { key: "0-2", title: "0-2" },
];

export const EVENT_BUBBLING_CAPTURING = `const EventBubblingAndCapturing = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div
    className="neeto-ui-rounded neeto-ui-shadow-md h-40 w-1/2 cursor-pointer border-2 border-solid p-5"
    onClick={() => alert("Clicked on the card")}
  >
    <div className="w-10" onClick={event => event.stopPropagation()}>
      <Dropdown label="Dropdown" {...args}>
        <Menu>
          <MenuItem.Button isActive>Active</MenuItem.Button>
          <MenuItem.Button>Disabled</MenuItem.Button>
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  </div>
  );
};`;

