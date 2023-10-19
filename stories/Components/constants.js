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
