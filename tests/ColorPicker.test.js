import React from "react";
import { render, screen } from "@testing-library/react";
import { ColorPicker } from "../lib/components";
import userEvent from "@testing-library/user-event";

describe("ColorPicker", () => {
  it("should render without error", () => {
    render(<ColorPicker color="#ffffff" />);
    expect(screen.getByText("#ffffff")).toBeInTheDocument();
  });

  it("should trigger onChange when color is changed", () => {
    const hex = "#000000";
    const hsl = { a: 1, h: 0, l: 0, s: 0 };
    const hsv = { a: 1, h: 0, v: 0, s: 0 };
    const rgb = { a: 1, b: 0, g: 0, r: 0 };
    const onChange = jest.fn((color) => {
      expect(color.hex).toEqual(hex);
      expect(color.hsl).toEqual(hsl);
      expect(color.hsv).toEqual(hsv);
      expect(color.rgb).toEqual(rgb);
    });

    render(<ColorPicker color="#ffffff" onChange={onChange} />);
    userEvent.click(screen.getByText("#ffffff"));
    userEvent.paste(screen.getByRole("textbox"), "000000");
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should display color palette when colorPaletteProps is provided", () => {
    render(<ColorPicker color="#ffffff" colorPaletteProps={{}} />);
    userEvent.click(screen.getByText("#ffffff"));
    expect(screen.getByTestId("color-palette")).toBeInTheDocument();
  });

  it("should trigger onChange when a color is selected from palette", () => {
    const selectedColor = "#ffffff";
    const DEFAULT_COLORS = {
      "red-500": "#f56a58",
      "yellow-500": "#f3cd82",
      "green-500": "#00ba88",
      "blue-500": "#276ef1",
    };
    const onChange = jest.fn();
    render(
      <ColorPicker
        color={selectedColor}
        colorPaletteProps={{
          color: selectedColor,
          colorList: Object.keys(DEFAULT_COLORS).map((key) => ({
            from: key,
            to: key,
          })),
          onChange,
        }}
      />
    );
    userEvent.click(screen.getByText("#ffffff"));
    const paletteItems = screen.getAllByTestId("color-palette-item");
    userEvent.click(paletteItems[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("red-500", "red-500");
  });
});
