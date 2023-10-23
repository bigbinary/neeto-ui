import React, { useEffect, useState } from "react";

import { action } from "@storybook/addon-actions";

import ColorPicker from "components/ColorPicker";

import { PALETTE_PICKER_CODE } from "./constants";

import ColorPickerStoriesDocs from "!raw-loader!./ColorPickerStoriesDocs.mdx";

const DEFAULT_COLORS = {
  "red-500": "#f22d2d",
  "yellow-500": "#f57c00",
  "green-500": "#00ba88",
  "blue-500": "#276ef1",
  "indigo-500": "#4c6ef5",
  "purple-500": "#7c3aed",
  "pink-500": "#f22d9e",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
};

const metadata = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: ColorPickerStoriesDocs } },
  },
  argTypes: {
    onChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const Default = ({ color, ...args }) => {
  const [currentColor, setCurrentColor] = useState("#4558F9");

  const onChange = value => {
    action("onChange")(value);
    setCurrentColor(value.hex);
  };

  useEffect(() => {
    setCurrentColor(color || "#4558F9");
  }, [color]);

  return (
    <div className="h-60 w-40">
      <ColorPicker color={currentColor} onChange={onChange} {...args} />
    </div>
  );
};

Default.args = { color: "#4558F9" };

const Sizes = args => {
  const [color, setColor] = useState("#4558F9");

  const onChange = value => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9");
  }, [args.color]);

  return (
    <div className="flex h-60 w-40 flex-col gap-4">
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
Sizes.args = { color: "#4558F9" };

const WithColorPalette = args => {
  const [color, setColor] = useState("#4558F9");

  const onChange = value => {
    action("onChange")(value);
    setColor(value.hex);
  };

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
    onChange({ hex: fromColor });
  };

  useEffect(() => {
    setColor(args.color || "#4558F9");
  }, [args.color]);

  return (
    <div className="h-60 w-40">
      <ColorPicker
        color={color}
        colorPaletteProps={{
          color: selectedColor,
          colorList,
          onChange: handleColorChange,
        }}
        onChange={onChange}
      />
    </div>
  );
};
WithColorPalette.storyName = "With color palette";
WithColorPalette.args = { color: "#4558F9" };

const WithEyeDropper = args => {
  const [color, setColor] = useState("#4558F9");

  const onChange = value => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9");
  }, [args.color]);

  return (
    <div className="h-60 w-40">
      <ColorPicker showEyeDropper color={color} onChange={onChange} />
    </div>
  );
};
WithEyeDropper.storyName = "With eye dropper";
WithEyeDropper.args = { color: "#4558F9" };

const ShowHexValue = args => {
  const [color, setColor] = useState("#4558F9");

  const onChange = value => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9");
  }, [args.color]);

  return (
    <div className="h-60 w-40">
      <ColorPicker showHexValue color={color} onChange={onChange} />
    </div>
  );
};
ShowHexValue.storyName = "Show hex value";
ShowHexValue.args = { color: "#4558F9" };

const ShowTransparencyControl = args => {
  const [color, setColor] = useState("#4558F9");

  const onChange = value => {
    action("onChange")(value);
    setColor(value.hex);
  };

  useEffect(() => {
    setColor(args.color || "#4558F9c9");
  }, [args.color]);

  return (
    <div className="h-60 w-40">
      <ColorPicker showTransparencyControl color={color} onChange={onChange} />
    </div>
  );
};
ShowTransparencyControl.storyName = "Show transparency control";
ShowTransparencyControl.args = { color: "#4558F9c9" };

const OnlyPalettePicker = args => {
  const [color, setColor] = useState("#4558F9");

  useEffect(() => {
    setColor(args.color || "#4558F9c9");
  }, [args.color]);

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
};

OnlyPalettePicker.storyName = "Show only palette picker";
OnlyPalettePicker.args = { color: "#4558F9c9" };
OnlyPalettePicker.parameters = {
  docs: { source: { code: PALETTE_PICKER_CODE } },
};

export {
  Default,
  Sizes,
  WithColorPalette,
  WithEyeDropper,
  ShowHexValue,
  ShowTransparencyControl,
  OnlyPalettePicker,
};

export default metadata;
