import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const FONT_WEIGHTS = {
  thin: "thin",
  extralight: "extralight",
  light: "light",
  normal: "normal",
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

const LINE_HEIGHTS = {
  none: "none",
  tight: "tight",
  snug: "snug",
  normal: "normal",
  relaxed: "relaxed",
  loose: "loose",
};

const TEXT_TRANSFORM = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
  fullwidth: "fullwidth",
  inherit: "inherit",
  initial: "initial",
  revert: "revert",
  unset: "unset",
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
  span: "span",
  b: "b",
  strong: "strong",
  i: "i",
  em: "em",
  mark: "mark",
  del: "del",
  s: "s",
  ins: "ins",
  sub: "sub",
  sup: "sup",
  u: "u",
  code: "code",
  blockquote: "blockquote"
};

const Typography = ({
  style = "body1",
  weight,
  lineHeight,
  component,
  children,
  textTransform,
  className = "",
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
        "nui-text-h1": style === STYLES.h1,
        "nui-text-h2": style === STYLES.h2,
        "nui-text-h3": style === STYLES.h3,
        "nui-text-h4": style === STYLES.h4,
        "nui-text-h5": style === STYLES.h5,
        "nui-text-h6": style === STYLES.h6,
        "nui-text-body1": style === STYLES.body1,
        "nui-text-body2": style === STYLES.body2,
        "nui-text-body3": style === STYLES.body3,
        "nui-text-transform-none": textTransform === TEXT_TRANSFORM.none,
        "nui-text-transform-capitalize": textTransform === TEXT_TRANSFORM.capitalize,
        "nui-text-transform-uppercase": textTransform === TEXT_TRANSFORM.uppercase,
        "nui-text-transform-lowercase": textTransform === TEXT_TRANSFORM.lowercase,
        "nui-text-transform-fullwidth": textTransform === TEXT_TRANSFORM.fullwidth,
        "nui-text-transform-inherit": textTransform === TEXT_TRANSFORM.inherit,
        "nui-text-transform-initial": textTransform === TEXT_TRANSFORM.initial,
        "nui-text-transform-revert": textTransform === TEXT_TRANSFORM.revert,
        "nui-text-transform-unset": textTransform === TEXT_TRANSFORM.unset,
        "nui-font-thin": weight === FONT_WEIGHTS.thin,
        "nui-font-extralight": weight === FONT_WEIGHTS.extralight,
        "nui-font-light": weight === FONT_WEIGHTS.light,
        "nui-font-normal": weight === FONT_WEIGHTS.normal,
        "nui-font-medium": weight === FONT_WEIGHTS.medium,
        "nui-font-semibold": weight === FONT_WEIGHTS.semibold,
        "nui-font-bold": weight === FONT_WEIGHTS.bold,
        "nui-font-extrabold": weight === FONT_WEIGHTS.extrabold,
        "nui-font-black": weight === FONT_WEIGHTS.black,
        "nui-leading-none": lineHeight === LINE_HEIGHTS.none,
        "nui-leading-tight": lineHeight === LINE_HEIGHTS.tight,
        "nui-leading-snug": lineHeight === LINE_HEIGHTS.snug,
        "nui-leading-normal": lineHeight === LINE_HEIGHTS.normal,
        "nui-leading-relaxed": lineHeight === LINE_HEIGHTS.relaxed,
        "nui-leading-loose": lineHeight === LINE_HEIGHTS.loose,
        [className]: className,
      })}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  style: PropTypes.oneOf(Object.values(STYLES)),
  weight: PropTypes.oneOf(Object.values(FONT_WEIGHTS)),
  component: PropTypes.oneOf(Object.values(COMPONENTS)),
  textTransform: PropTypes.oneOf(Object.values(TEXT_TRANSFORM)),
  lineHeight: PropTypes.oneOf(Object.values(LINE_HEIGHTS)),
  otherProps: PropTypes.object,
};

export default Typography;
