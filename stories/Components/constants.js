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

export const EVENT_BUBBLING_CAPTURING = `const EventBubblingAndCapturing = () => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40" onClick={event => event.stopPropagation()}>
      <Dropdown label="Dropdown">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <MenuItem.Button isActive>Active</MenuItem.Button>
          <MenuItem.Button isDisabled>Disabled</MenuItem.Button>
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};`;
