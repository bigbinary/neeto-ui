import "@testing-library/jest-dom";

// Fixes element.getTotalLength is not a function. Refer: https://github.com/framer/motion/issues/204
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}

//Fixes ReferenceError: ResizeObserver is not defined
global.ResizeObserver = require('resize-observer-polyfill')

//Fixes TypeError: window.matchMedia is not a function
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
    }
  )),
});