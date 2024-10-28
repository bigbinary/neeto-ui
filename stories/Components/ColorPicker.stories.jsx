import React, { useEffect, useState } from "react";

import { action } from "@storybook/addon-actions";

import ColorPicker from "components/ColorPicker";

import { PALETTE_PICKER_CODE } from "./constants";

import ColorPickerCSSCustomization from "!raw-loader!./ColorPickerStoriesDocs/ColorPickerCSSCustomization.mdx";
import ColorPickerDocs from "!raw-loader!./ColorPickerStoriesDocs/ColorPickerDocs.mdx";

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
    docs: { description: { component: ColorPickerDocs } },
  },
  argTypes: {
    color: {
      description: "To specify the color value.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    size: {
      description: "To set the size of the target.",
      control: "radio",
      options: Object.values({
        large: "large",
        medium: "medium",
        small: "small",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "large" },
        category: "New",
      },
    },
    colorPaletteProps: {
      description:
        "To specify the props to be passed to the Palette component.",
      control: "object",
      table: {
        type: {
          summary: "shape",
          detail: `{
  color: {
    from: string,
    to: string
  },
  colorList: Array<{
    from: string,
    to: string
  }>,
  onChange: func
}`,
        },
      },
    },
    showEyeDropper: {
      description: "Shows eye dropper to pick color.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    showHexValue: {
      description:
        "To show hex value near to the color in the dropdown. By default it will be hidden.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    showTransparencyControl: {
      description:
        "To show transparency control. By default it will be hidden.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    showPicker: {
      description:
        "To show the color picker. Used to hide the picker in cases where only palette is required. By default it will be true.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    portalProps: {
      description: "To specify the props to be passed to the dropdown portal.",
      control: "object",
      table: { type: { summary: "object" } },
    },
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
      <ColorPicker {...{ onChange }} color={currentColor} {...args} />
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
        <ColorPicker {...{ color, onChange }} size="small" />
      </div>
      <div className="flex flex-col gap-2">
        <span>Medium</span>
        <ColorPicker {...{ color, onChange }} size="medium" />
      </div>
      <div className="flex flex-col gap-2">
        <span>Large</span>
        <ColorPicker {...{ color, onChange }} size="large" />
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
        {...{ color, onChange }}
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
      <ColorPicker {...{ color, onChange }} showEyeDropper />
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
      <ColorPicker {...{ color, onChange }} showHexValue />
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
      <ColorPicker {...{ color, onChange }} showTransparencyControl />
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
        {...{ color }}
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

const CSSCustomization = ({ color, ...args }) => {
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
      <div className="neetix-colorpicker">
        <ColorPicker {...{ onChange }} color={currentColor} {...args} />
      </div>
    </div>
  );
};

CSSCustomization.storyName = "ColorPicker CSS Customization";

CSSCustomization.args = {
  color: "#4558F9",
  className: "neetix-colorpicker",
};

CSSCustomization.parameters = {
  docs: { description: { story: ColorPickerCSSCustomization } },
};

const PortalCustomClassName = ({ color, ...args }) => {
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
      <ColorPicker {...{ onChange }} color={currentColor} {...args} />
    </div>
  );
};

PortalCustomClassName.storyName =
  "ColorPicker with custom classname for the dropdown menu";

PortalCustomClassName.args = {
  color: "#4558F9",
  portalProps: { classNames: "neeto-ui__color-pallette-wrapper" },
};

export {
  Default,
  Sizes,
  WithColorPalette,
  WithEyeDropper,
  ShowHexValue,
  ShowTransparencyControl,
  OnlyPalettePicker,
  CSSCustomization,
  PortalCustomClassName,
};

export default metadata;
