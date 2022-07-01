import { addons } from "@storybook/addons";
import neetoTheme from "./neetoTheme";
import Favicon from "./public/favicon_light.ico";

addons.setConfig({
  theme: neetoTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", Favicon);
document.head.appendChild(link);
