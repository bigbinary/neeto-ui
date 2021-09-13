import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const FONT_WEIGHTS = {
  thin: "thin",
  extralight: "extralight",
  light: "light",
  regular: "regular",
  medium: "medium",
  semibold: "semibold",
  bold: "bold",
  extrabold: "extrabold",
  black: "black",
};

const STYLES = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "body1",
  body2: "body2",
  body3: "body3",
};

const DEFAULT_COMPONENTS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  body3: "p",
};

const COMPONENTS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  b: "b",
  strong: "strong",
  i: "i",
  em: "em",
  mark: "mark",
  del: "del",
  ins: "ins",
  sub: "sub",
  sup: "sup",
};

const Typography = ({
  style = "body1",
  weight,
  component,
  children,
  ...otherProps
}) => {
  const Component = component
    ? COMPONENTS[component]
    : style
      ? DEFAULT_COMPONENTS[style]
      : "p";
  return (
    <Component
      className={classnames({
        "nui-typography": true,
        "nui-typography--style-h1": style === STYLES.h1,
        "nui-typography--style-h2": style === STYLES.h2,
        "nui-typography--style-h3": style === STYLES.h3,
        "nui-typography--style-h4": style === STYLES.h4,
        "nui-typography--style-h5": style === STYLES.h5,
        "nui-typography--style-h6": style === STYLES.h6,
        "nui-typography--style-body1": style === STYLES.body1,
        "nui-typography--style-body2": style === STYLES.body2,
        "nui-typography--style-body3": style === STYLES.body3,
        "nui-typography--weight-thin": weight === FONT_WEIGHTS.thin,
        "nui-typography--weight-extralight": weight === FONT_WEIGHTS.extralight,
        "nui-typography--weight-light": weight === FONT_WEIGHTS.light,
        "nui-typography--weight-regular": weight === FONT_WEIGHTS.regular,
        "nui-typography--weight-medium": weight === FONT_WEIGHTS.medium,
        "nui-typography--weight-semibold": weight === FONT_WEIGHTS.semibold,
        "nui-typography--weight-bold": weight === FONT_WEIGHTS.bold,
        "nui-typography--weight-extrabold": weight === FONT_WEIGHTS.extrabold,
        ["nui-typography--weight-black"]: weight === FONT_WEIGHTS.black,
      })}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  style: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
    "body3",
  ]),
  weight: PropTypes.oneOf([
    "thin",
    "extralight",
    "light",
    "regular",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black",
  ]),
  component: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "b",
    "strong",
    "i",
    "em",
    "mark",
    "del",
    "ins",
    "sub",
    "sup",
  ]),
  otherProps: PropTypes.object,
};

export default Typography;
