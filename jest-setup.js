/* eslint-disable no-undef */
import "@testing-library/jest-dom";

import { initializeI18n } from "components/TranslationProvider/i18n";

// Fixes element.getTotalLength is not a function. Refer: https://github.com/framer/motion/issues/204
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}

//Fixes ReferenceError: ResizeObserver is not defined
global.ResizeObserver = require("resize-observer-polyfill");

//Fixes TypeError: window.matchMedia is not a function
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
  })),
});

//Fixes TypeError: errorFormElement?.scrollIntoView is not a function
Element.prototype.scrollIntoView = jest.fn();

Element.prototype.scrollTo = jest.fn();
HTMLCanvasElement.prototype.getContext = jest.fn();
window.scrollTo = jest.fn();

const ignoredWarnings = [
  "Note: Not match any format. Please help to fire a issue about this",
];

const captureConsoleErrors = () => {
  // eslint-disable-next-line no-console
  const error = console.error;
  // eslint-disable-next-line no-console
  const warn = console.warn;

  // eslint-disable-next-line no-console
  console.error = message => {
    error.apply(console, arguments);
    if (!ignoredWarnings.includes(message)) {
      throw new Error(
        "Test failed because of an error message in the console, please fix.",
        { cause: message }
      );
    }
  };

  // eslint-disable-next-line no-console
  console.warn = message => {
    warn.apply(console, arguments);
    if (!ignoredWarnings.includes(message)) {
      throw new Error(
        "Test failed because of a warning message in the console, please fix.",
        { cause: message }
      );
    }
  };
};

beforeAll(() => {
  initializeI18n();
  captureConsoleErrors();
});
