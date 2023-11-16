import { addons } from "@storybook/addons";
import neetoTheme from "./neetoTheme";

addons.setConfig({
  theme: neetoTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", "./favicon_light.ico");
document.head.appendChild(link);
