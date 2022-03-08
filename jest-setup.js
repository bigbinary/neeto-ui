import "@testing-library/jest-dom";


// Refer: https://github.com/framer/motion/issues/204
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}