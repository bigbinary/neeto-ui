import "@testing-library/jest-dom";


// Fixes element.getTotalLength is not a function. Refer: https://github.com/framer/motion/issues/204
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}