import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ColorPicker } from "components";

describe("ColorPicker", () => {
  it("should render without error", () => {
    render(<ColorPicker color="#ffffff" />);
    expect(screen.getByTestId("neeto-color-picker")).toBeInTheDocument();
  });

  it("should trigger onChange when color is changed", async () => {
    const hex = "#000000";
    const rgb = { a: 1, b: 0, g: 0, r: 0 };
    const onChange = jest.fn(color => {
      expect(color.hex).toEqual(hex);
      expect(color.rgb).toEqual(rgb);
    });

    render(<ColorPicker {...{ onChange }} />);
    expect(screen.getByTestId("neeto-color-picker")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("neeto-color-picker"));
    await (await screen.findByRole("textbox")).focus();
    await userEvent.paste("#000000");
    await expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should display color palette", async () => {
    render(<ColorPicker color="#ffffff" />);
    await userEvent.click(screen.getByTestId("neeto-color-picker"));
    expect(await screen.findByTestId("color-palette")).toBeInTheDocument();
  });

  it("should display transparency control when showTransparencyControl is provided", async () => {
    render(<ColorPicker showTransparencyControl color="#ffffff" />);
    await userEvent.click(screen.getByTestId("neeto-color-picker"));
    expect(await screen.findByLabelText("Alpha")).toBeInTheDocument();
  });

  it("should trigger onChange when a color is selected from palette", async () => {
    const selectedColor = "#ffffff";
    const DEFAULT_COLORS = [
      { hex: "#f22d2d" },
      { hex: "#f57c00" },
      { hex: "#00ba88" },
      { hex: "#276ef1" },
    ];
    const onChange = jest.fn();
    render(
      <ColorPicker
        {...{ onChange }}
        color={selectedColor}
        colorPalette={DEFAULT_COLORS}
      />
    );
    await userEvent.click(screen.getByTestId("neeto-color-picker"));
    const paletteItems = await screen.findAllByTestId("color-palette-item");
    await userEvent.click(paletteItems[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      hex: "#f22d2d",
      rgb: { a: 1, r: 242, g: 45, b: 45 },
    });
  });

  it("should call onChange when user touches Hue slider", async () => {
    const onChange = jest.fn();
    render(<ColorPicker {...{ onChange }} color="#ffffff" />);
    await userEvent.click(screen.getByTestId("neeto-color-picker"));
    const hueSlider = await screen.findByLabelText("Hue");
    await userEvent.click(hueSlider, { clientX: 0 });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when user touches Saturation slider", async () => {
    const touchStart = [{ pageX: 1, pageY: 1 }];

    // black color
    const hex = "#000000";
    const rgb = { a: 1, b: 0, g: 0, r: 0 };
    const onChange = jest.fn(color => {
      expect(color.hex).toEqual(hex);
      expect(color.rgb).toEqual(rgb);
    });

    render(<ColorPicker {...{ onChange }} color="#ffffff" />);
    await userEvent.click(screen.getByTestId("neeto-color-picker"));

    await waitFor(() =>
      expect(screen.getByLabelText("Color")).toBeInTheDocument()
    );

    fireEvent.touchStart(screen.getByLabelText("Color"), {
      touches: touchStart,
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should hide picker when showPicker is false", () => {
    render(<ColorPicker showPicker={false} />);
    expect(
      screen.queryByTestId("neeto-color-picker-section")
    ).not.toBeInTheDocument();
  });

  it("should display recently used colors", async () => {
    localStorage.removeItem("recently-used-colors");

    render(<ColorPicker />);

    await userEvent.click(screen.getByTestId("neeto-color-picker"));
    const paletteItems = await screen.findAllByTestId("color-palette-item");
    await userEvent.click(paletteItems[0]);
    await userEvent.click(document.body);
    await userEvent.click(screen.getByTestId("neeto-color-picker"));

    expect(
      screen.getByTestId("color-palette-recently-used")
    ).toBeInTheDocument();
  });

  it("should not display recently used colors if showPicker is false", async () => {
    render(<ColorPicker showPicker={false} />);

    await userEvent.click(screen.getByTestId("neeto-color-picker"));
    const paletteItems = await screen.findAllByTestId("color-palette-item");
    await userEvent.click(paletteItems[0]);
    await userEvent.click(document.body);
    await userEvent.click(screen.getByTestId("neeto-color-picker"));

    expect(
      screen.queryByTestId("color-palette-recently-used")
    ).not.toBeInTheDocument();
  });

  it("should not display recently used colors if there are no recently used colors", () => {
    localStorage.removeItem("recently-used-colors");

    render(<ColorPicker />);

    expect(
      screen.queryByTestId("color-palette-recently-used")
    ).not.toBeInTheDocument();
  });
});
