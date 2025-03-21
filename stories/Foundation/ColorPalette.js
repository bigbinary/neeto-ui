export const colorPalette = {
  BASE: {
    colors: [
      {
        name: "neeto-ui-white",
        text: "black",
        value: { light: "255, 255, 255", dark: "0, 0, 0" },
        usage: "Use for default page background",
      },
      {
        name: "neeto-ui-black",
        value: { light: "12, 17, 29", dark: "224, 224, 224" },
        usage: "Use for headings",
      },
    ],
    title: "BASE",
  },
  GRAY: {
    colors: [
      {
        name: "neeto-ui-gray-800",
        value: { light: "16, 24, 40", dark: "200, 200, 200" },
        usage: "Use for default text",
      },
      {
        name: "neeto-ui-gray-700",
        value: { light: "29, 41, 57", dark: "162, 162, 162" },
        usage: "Use for secondary text",
      },
      {
        name: "neeto-ui-gray-600",
        value: { light: "52, 64, 84", dark: "124, 124, 124" },
        usage: "Use for default icon",
      },
      {
        name: "neeto-ui-gray-500",
        value: { light: "135, 146, 157", dark: "92, 92, 92" },
        usage: "Use for disabled state of input",
      },
      {
        name: "neeto-ui-gray-400",
        text: "black",
        value: { light: "194, 200, 204", dark: "73, 73, 73" },
        usage: "Use for strong border",
      },
      {
        name: "neeto-ui-gray-300",
        text: "black",
        value: { light: "216, 220, 222", dark: "57, 57, 57" },
        usage: "Use for default border",
      },
      {
        name: "neeto-ui-gray-200",
        text: "black",
        value: { light: "233, 235, 237", dark: "44, 44, 44" },
        usage: "Use for secondary button background",
      },
      {
        name: "neeto-ui-gray-100",
        text: "black",
        value: { light: "246, 247, 248", dark: "30, 30, 30" },
        usage: "Use for sidebar menu item hover, table row hover",
      },
      {
        name: "neeto-ui-gray-50",
        text: "black",
        value: { light: "250, 250, 250", dark: "10, 10, 10" },
        usage: "Use for metadata background, table header",
      },
    ],
    title: "GRAY",
  },
  PRIMARY: {
    colors: [
      {
        name: "neeto-ui-primary-800",
        value: { light: "0, 102, 83", dark: "0, 224, 183" },
        usage: "Use for link buttons",
      },
      {
        name: "neeto-ui-primary-600",
        value: { light: "0, 122, 100", dark: "6, 207, 156" },
        usage: "Use for primary button hover",
      },
      {
        name: "neeto-ui-primary-500",
        value: { light: "0, 128, 104", dark: "0, 168, 132" },
        usage:
          "Use for primary actions or elements that communicate the brand.",
      },
      {
        name: "neeto-ui-primary-100",
        text: "black",
        value: { light: "225, 243, 238", dark: "0, 61, 49" },
      },
      {
        name: "neeto-ui-primary-50",
        text: "black",
        value: { light: "240, 249, 247", dark: "0, 41, 33" },
      },
    ],
    title: "PRIMARY",
  },
  ACCENT: {
    colors: [
      {
        name: "neeto-ui-accent-800",
        value: { light: "9, 90, 186", dark: "142, 189, 245" },
      },
      {
        name: "neeto-ui-accent-600",
        value: { light: "13, 102, 208", dark: "105, 167, 242" },
      },
      {
        name: "neeto-ui-accent-500",
        value: { light: "20, 115, 230", dark: "67, 144, 239" },
        usage: "Use for information",
      },
      {
        name: "neeto-ui-accent-100",
        text: "black",
        value: { light: "230, 244, 255", dark: "17, 26, 44" },
      },
      {
        name: "neeto-ui-accent-50",
        text: "black",
        value: { light: "239, 248, 255", dark: "11, 17, 29" },
      },
    ],
    title: "ACCENT",
  },
  SUCCESS: {
    colors: [
      {
        name: "neeto-ui-success-800",
        value: { light: "1, 121, 93", dark: "0, 224, 183" },
      },
      {
        name: "neeto-ui-success-600",
        value: { light: "1, 141, 109", dark: "6, 207, 156" },
      },
      {
        name: "neeto-ui-success-500",
        value: { light: "2, 162, 124", dark: "0, 168, 132" },
        usage: "Use to emphasize a positive message",
      },
      {
        name: "neeto-ui-success-100",
        text: "black",
        value: { light: "235, 255, 250", dark: "0, 61, 49" },
      },
    ],
    title: "SUCCESS",
  },
  ERROR: {
    colors: [
      {
        name: "neeto-ui-error-800",
        value: { light: "187, 18, 26", dark: "247, 109, 116" },
      },
      {
        name: "neeto-ui-error-600",
        value: { light: "201, 37, 45", dark: "236, 91, 98" },
      },
      {
        name: "neeto-ui-error-500",
        value: { light: "215, 55, 63", dark: "227, 72, 80" },
        usage: "Use to emphasize an error or a blocking status",
      },
      {
        name: "neeto-ui-error-100",
        text: "black",
        value: { light: "254, 236, 240", dark: "129, 33, 38" },
      },
    ],
    title: "ERROR",
  },
  WARNING: {
    colors: [
      {
        name: "neeto-ui-warning-800",
        value: { light: "189, 100, 13", dark: "249, 164, 63" },
      },
      {
        name: "neeto-ui-warning-600",
        value: { light: "203, 111, 16", dark: "242, 148, 35" },
      },
      {
        name: "neeto-ui-warning-500",
        value: { light: "218, 123, 17", dark: "230, 134, 25" },
        usage: "Use to highlight elements that require a users attention",
      },
      {
        name: "neeto-ui-warning-100",
        text: "black",
        value: { light: "251, 242, 225", dark: "131, 74, 11" },
      },
    ],
    title: "WARNING",
  },
  INFO: {
    colors: [
      {
        name: "neeto-ui-info-800",
        value: { light: "9, 90, 186", dark: "142, 189, 245" },
      },
      {
        name: "neeto-ui-info-600",
        value: { light: "13, 102, 208", dark: "105, 167, 242" },
      },
      {
        name: "neeto-ui-info-500",
        value: { light: "20, 115, 230", dark: "67, 144, 239" },
        usage: "Use for information",
      },
      {
        name: "neeto-ui-info-100",
        text: "black",
        value: { light: "230, 244, 255", dark: "10, 56, 113" },
      },
    ],
    title: "INFO",
  },
  PASTEL: {
    colors: [
      {
        name: "neeto-ui-pastel-silver",
        text: "black",
        value: { light: "232, 233, 237", dark: "64, 66, 74" },
      },
      {
        name: "neeto-ui-pastel-red",
        text: "black",
        value: { light: "255, 229, 229", dark: "115, 45, 45" },
      },
      {
        name: "neeto-ui-pastel-yellow",
        text: "black",
        value: { light: "254, 243, 197", dark: "130, 100, 20" },
      },
      {
        name: "neeto-ui-pastel-green",
        text: "black",
        value: { light: "211, 249, 232", dark: "50, 125, 110" },
      },
      {
        name: "neeto-ui-pastel-blue",
        text: "black",
        value: { light: "236, 244, 255", dark: "45, 80, 120" },
      },
      {
        name: "neeto-ui-pastel-purple",
        text: "black",
        value: { light: "238, 235, 255", dark: "75, 60, 125" },
      },
      {
        name: "neeto-ui-pastel-pink",
        text: "black",
        value: { light: "253, 226, 241", dark: "125, 50, 90" },
      },
    ],
    title: "PASTEL",
  },
};

export const colorPaletteList = (theme = "light") =>
  Object.values(colorPalette).reduce((acc, colorItem) => {
    const newColors = colorItem.colors.map(color => ({
      name: `--${color.name}`,
      value: color.value[theme],
      text: color.text,
    }));

    return [...acc, ...newColors];
  }, []);

export const getColorPaletteList = colorItemNames => {
  const colorItems = colorItemNames.map(colorItemName => {
    const colorItem = colorPalette[colorItemName];
    if (!colorItem) {
      throw new Error(
        `Color item '${colorItemName}' not found in colorPalette.`
      );
    }

    return colorItem;
  });

  return colorItems.flatMap(colorItem =>
    colorItem.colors.map(color => ({
      name: `--${color.name}`,
      usage: color.usage,
    }))
  );
};
