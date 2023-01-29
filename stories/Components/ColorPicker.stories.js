import React, { useEffect, useState } from "react";
import ColorPicker from "../../lib/components/ColorPicker";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
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

export const Default = ({ color, ...args }) => {
  const [currentColor, setCurrentColor] = useState("#4558F9");

  const onChange = (value) => {
    action("onChange")(value);
    setCurrentColor(value.hex);
  };

  useEffect(() => {
    setCurrentColor(color || "#4558F9");
  }, [color]);

  return (
    <div className="w-40 h-60">
      <ColorPicker color={currentColor} onChange={onChange} {...args} />
    </div>
  );
};

Default.args = {
  color: "#4558F9",
};

export const Sizes = (args) => {
  const [color, setColor] = useState("#4558F9");

  const onChange = (value) => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9");
  }, [args.color]);

  return (
    <div className="flex flex-col w-40 gap-4 h-60">
      <div className="flex flex-col gap-2">
        <span>Small</span>
        <ColorPicker color={color} size="small" onChange={onChange} />
      </div>
      <div className="flex flex-col gap-2">
        <span>Medium</span>
        <ColorPicker color={color} size="medium" onChange={onChange} />
      </div>
      <div className="flex flex-col gap-2">
        <span>Large</span>
        <ColorPicker color={color} size="large" onChange={onChange} />
      </div>
    </div>
  );
};

Sizes.storyName = "Sizes";
Sizes.args = {
  color: "#4558F9",
};

export const WithColorPalette = (args) => {
  const [color, setColor] = useState("#4558F9");

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
    setColor(args.color || "#4558F9");
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
WithColorPalette.storyName = "With color palette";
WithColorPalette.args = {
  color: "#4558F9",
};

export const WithEyeDropper = (args) => {
  const [color, setColor] = useState("#4558F9");

  const onChange = (value) => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9");
  }, [args.color]);

  return (
    <div className="w-40 h-60">
      <ColorPicker color={color} onChange={onChange} showEyeDropper />
    </div>
  );
};
WithEyeDropper.storyName = "With eye dropper";
WithEyeDropper.args = {
  color: "#4558F9",
};

export const ShowHexValue = (args) => {
  const [color, setColor] = useState("#4558F9");

  const onChange = (value) => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9");
  }, [args.color]);

  return (
    <div className="w-40 h-60">
      <ColorPicker color={color} onChange={onChange} showHexValue={true} />
    </div>
  );
};
ShowHexValue.storyName = "Show hex value";
ShowHexValue.args = {
  color: "#4558F9",
};

export const ShowTransparencyControl = (args) => {
  const [color, setColor] = useState("#4558F9");

  const onChange = (value) => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9c9");
  }, [args.color]);

  return (
    <div className="w-40 h-60">
      <ColorPicker color={color} onChange={onChange} showTransparencyControl />
    </div>
  );
};
ShowTransparencyControl.storyName = "Show transparency control";
ShowTransparencyControl.args = {
  color: "#4558F9c9",
};
