import React, { useEffect, useState } from "react";
import ColorPicker, {
  ColorPickerComponent,
} from "../../lib/components/ColorPicker";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ColorPicker",
  component: ColorPickerComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { ColorPicker } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const DEFAULT_COLORS = {
  "red-500": "#f56a58",
  "yellow-500": "#f3cd82",
  "green-500": "#00ba88",
  "blue-500": "#276ef1",
};

export const ColorPickerStory = (args) => {
  const [color, setColor] = useState("#000000");

  const onChange = (value) => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#000000");
  }, [args.color]);

  return <ColorPicker color={color} onChange={onChange} />;
};

ColorPickerStory.storyName = "ColorPicker";
ColorPickerStory.args = {
  color: "#ffffff",
};

export const ColorPickerWithColorPalette = (args) => {
  const [color, setColor] = useState("#000000");

  const onChange = (value) => {
    action("onChange")(value);
    setColor(value.hex);
  };

  const colorList = Object.keys(DEFAULT_COLORS).map((key) => ({
    from: key,
    to: key,
  }));
  const findColorByHex = (hex) => {
    const colorClass = Object.keys(DEFAULT_COLORS).find(
      (key) => hex === DEFAULT_COLORS[key]
    );
    return { from: colorClass, to: colorClass };
  };

  const selectedColor = findColorByHex(color);

  const handleColorChange = (fromValue, toValue) => {
    action("colorPaletteProps.onChange")(fromValue, toValue);
    const fromColor = DEFAULT_COLORS[fromValue];
    onChange({ hex: fromColor });
  };

  useEffect(() => {
    setColor(args.color || "#000000");
  }, [args.color]);
  console.log('colorList', colorList)
  return (
    <ColorPicker
      color={color}
      onChange={onChange}
      colorPaletteProps={{
        color: selectedColor,
        colorList,

        onChange: handleColorChange,
      }}
    />
  );
};

ColorPickerWithColorPalette.storyName = "ColorPicker with Color Palette";
ColorPickerWithColorPalette.args = {
  color: "#ffffff",
};
