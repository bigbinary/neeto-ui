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
  "red-500": "#f22d2d",
  "yellow-500": "#f57c00",
  "green-500": "#00ba88",
  "blue-500": "#276ef1",
};

export const ColorPickerStory = ({ color, ...args }) => {
  const [currentColor, setCurrentColor] = useState("#000000");

  const onChange = (value) => {
    action("onChange")(value);
    setCurrentColor(value.hex);
  };

  useEffect(() => {
    setCurrentColor(color || "#000000");
  }, [color]);

  return (
    <div className="w-40 h-60">
      <ColorPicker color={currentColor} onChange={onChange} {...args} />
    </div>
  );
};

ColorPickerStory.storyName = "ColorPicker";
ColorPickerStory.args = {
  color: "#000000",
};

export const Sizes = (args) => {
  const [color, setColor] = useState("#000000");

  const onChange = (value) => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#000000");
  }, [args.color]);

  return (
    <div className="flex flex-col w-40 gap-4 h-60">
      <ColorPicker color={color} size="small" onChange={onChange} />
      <ColorPicker color={color} size="medium" onChange={onChange} />
      <ColorPicker color={color} size="large" onChange={onChange} />
    </div>
  );
};

Sizes.storyName = "Sizes";
Sizes.args = {
  color: "#000000",
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

  return (
    <div className="w-40 h-60">
      <ColorPicker
        color={color}
        onChange={onChange}
        colorPaletteProps={{
          color: selectedColor,
          colorList,
          onChange: handleColorChange,
        }}
      />
    </div>
  );
};

ColorPickerWithColorPalette.storyName = "ColorPicker with Color Palette";
ColorPickerWithColorPalette.args = {
  color: "#000000",
};
