import React, { useEffect, useState } from "react";

import { action } from "@storybook/addon-actions";

import ColorPicker from "components/ColorPicker";

import { PALETTE_PICKER_CODE } from "./constants";

import ColorPickerCSSCustomization from "!raw-loader!./ColorPickerStoriesDocs/ColorPickerCSSCustomization.mdx";
import ColorPickerDocs from "!raw-loader!./ColorPickerStoriesDocs/ColorPickerDocs.mdx";

const DEFAULT_COLORS = [
  { hex: "#f22d2d" },
  { hex: "#f57c00" },
  { hex: "#00ba88" },
  { hex: "#276ef1" },
  { hex: "#4c6ef5" },
  { hex: "#7c3aed" },
  { hex: "#4558F9" },
  { hex: "#f22d9e" },
  { hex: "#6b7280" },
  { hex: "#4b5563" },
  { hex: "#374151" },
  { hex: "#1f2937" },
  { hex: "#111827" },
];

const metadata = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: ColorPickerDocs } },
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
    <div className="h-96 w-40">
      <ColorPicker {...{ ...args, onChange }} color={currentColor} />
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

const WithCustomColorPalette = args => {
  const [activeColor] = DEFAULT_COLORS;
  const [selectedColor, setSelectedColor] = useState(activeColor);

  const onChange = value => {
    action("onChange")(value);
    setSelectedColor(value);
  };

  useEffect(() => {
    setSelectedColor({ hex: args.color });
  }, [args.color]);

  return (
    <div className="h-60 w-40">
      <ColorPicker
        {...{ onChange }}
        color={selectedColor.hex}
        colorPalette={DEFAULT_COLORS}
      />
    </div>
  );
};
WithCustomColorPalette.storyName = "With custom color palette";
WithCustomColorPalette.args = { color: "#4558F9" };

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
  const [selectedColor, setSelectedColor] = useState("#00ba88");

  useEffect(() => {
    setSelectedColor(args.color ?? "#00ba88");
  }, [args.color]);

  const onChange = value => {
    action("onChange")(value);
    setSelectedColor(value.hex);
  };

  return (
    <div className="h-60 w-40">
      <ColorPicker
        {...{ onChange }}
        color={selectedColor}
        colorPalette={DEFAULT_COLORS}
        showPicker={false}
      />
    </div>
  );
};

OnlyPalettePicker.storyName = "Show only palette picker";
OnlyPalettePicker.args = { color: "#00ba88" };
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
        <ColorPicker {...{ ...args, onChange }} color={currentColor} />
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
    setCurrentColor(color ?? "#4558F9");
  }, [color]);

  return (
    <div className="h-60 w-40">
      <ColorPicker {...{ ...args, onChange }} color={currentColor} />
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
  WithCustomColorPalette,
  WithEyeDropper,
  ShowHexValue,
  ShowTransparencyControl,
  OnlyPalettePicker,
  CSSCustomization,
  PortalCustomClassName,
};

export default metadata;
