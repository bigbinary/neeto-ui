import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ColorPicker } from "../lib/components";
import userEvent from "@testing-library/user-event";

describe("ColorPicker", () => {
  it("should render without error", () => {
    render(<ColorPicker color="#ffffff" />);
    expect(screen.getByTestId("neeto-color-picker")).toBeInTheDocument();
  });

  it("should trigger onChange when color is changed", async () => {
    const hex = "#000000";
    const rgb = { a: 1, b: 0, g: 0, r: 0 };
    const onChange = jest.fn((color) => {
      expect(color.hex).toEqual(hex);
      expect(color.rgb).toEqual(rgb);
    });

    render(<ColorPicker onChange={onChange} />);
    expect(screen.getByTestId("neeto-color-picker")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("neeto-color-picker"));
    userEvent.paste(await screen.findByRole("textbox"), "#000000");
    await expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should display color palette when colorPaletteProps is provided", async () => {
    render(<ColorPicker color="#ffffff" colorPaletteProps={{}} />);
    userEvent.click(screen.getByTestId("neeto-color-picker"));
    expect(await screen.findByTestId("color-palette")).toBeInTheDocument();
  });

  it("should trigger onChange when a color is selected from palette", async () => {
    const selectedColor = "#ffffff";
    const DEFAULT_COLORS = {
      "red-500": "#f22d2d",
      "yellow-500": "#f57c00",
      "green-500": "#00ba88",
      "blue-500": "#276ef1",
    };
    const onChange = jest.fn();
    render(
      <ColorPicker
        color={selectedColor}
        colorPaletteProps={{
          color: {
            from: "red-500",
            to: "red-500",
          },
          colorList: Object.keys(DEFAULT_COLORS).map((key) => ({
            from: key,
            to: key,
          })),
          onChange,
        }}
      />
    );
    userEvent.click(screen.getByTestId("neeto-color-picker"));
    const paletteItems = await screen.findAllByTestId("color-palette-item");
    userEvent.click(paletteItems[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("red-500", "red-500");
  });

  it("should call onChange when user touches Hue slider", async () => {
    const onChange = jest.fn();
    render(<ColorPicker color="#ffffff" onChange={onChange} />);
    userEvent.click(screen.getByTestId("neeto-color-picker"));
    const hueSlider = await screen.findByLabelText("Hue");
    userEvent.click(hueSlider, { clientX: 0 });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when user touches Saturation slider", async () => {
    const touchStart = [{ pageX: 1, pageY: 1 }];

    // black color
    const hex = "#000000";
    const rgb = { a: 1, b: 0, g: 0, r: 0 };
    const onChange = jest.fn((color) => {
      expect(color.hex).toEqual(hex);
      expect(color.rgb).toEqual(rgb);
    });

    render(<ColorPicker color="#ffffff" onChange={onChange} />);
    userEvent.click(screen.getByTestId("neeto-color-picker"));

    await waitFor(() =>
      expect(screen.getByLabelText("Color")).toBeInTheDocument()
    );

    fireEvent.touchStart(screen.getByLabelText("Color"), {
      touches: touchStart,
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
