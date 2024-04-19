import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import "styles/common";

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
  nano: "nano",
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
  nano: "span",
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
  blockquote: "blockquote",
};

const Typography = React.forwardRef(
  (
    {
      style = "body1",
      weight,
      lineHeight,
      component,
      children,
      textTransform,
      className = "",
      ...otherProps
    },
    ref
  ) => {
    const Component = component
      ? COMPONENTS[component]
      : style
      ? DEFAULT_COMPONENTS[style]
      : "p";

    return (
      <Component
        {...{ ref }}
        className={classnames({
          "neeto-ui-typography": true,
          "neeto-ui-text-h1": style === STYLES.h1,
          "neeto-ui-text-h2": style === STYLES.h2,
          "neeto-ui-text-h3": style === STYLES.h3,
          "neeto-ui-text-h4": style === STYLES.h4,
          "neeto-ui-text-h5": style === STYLES.h5,
          "neeto-ui-text-h6": style === STYLES.h6,
          "neeto-ui-text-body1": style === STYLES.body1,
          "neeto-ui-text-body2": style === STYLES.body2,
          "neeto-ui-text-body3": style === STYLES.body3,
          "neeto-ui-text-nano": style === STYLES.nano,
          "neeto-ui-text-transform-none": textTransform === TEXT_TRANSFORM.none,
          "neeto-ui-text-transform-capitalize":
            textTransform === TEXT_TRANSFORM.capitalize,
          "neeto-ui-text-transform-uppercase":
            textTransform === TEXT_TRANSFORM.uppercase,
          "neeto-ui-text-transform-lowercase":
            textTransform === TEXT_TRANSFORM.lowercase,
          "neeto-ui-text-transform-fullwidth":
            textTransform === TEXT_TRANSFORM.fullwidth,
          "neeto-ui-text-transform-inherit":
            textTransform === TEXT_TRANSFORM.inherit,
          "neeto-ui-text-transform-initial":
            textTransform === TEXT_TRANSFORM.initial,
          "neeto-ui-text-transform-revert":
            textTransform === TEXT_TRANSFORM.revert,
          "neeto-ui-text-transform-unset":
            textTransform === TEXT_TRANSFORM.unset,
          "neeto-ui-font-thin": weight === FONT_WEIGHTS.thin,
          "neeto-ui-font-extralight": weight === FONT_WEIGHTS.extralight,
          "neeto-ui-font-light": weight === FONT_WEIGHTS.light,
          "neeto-ui-font-normal": weight === FONT_WEIGHTS.normal,
          "neeto-ui-font-medium": weight === FONT_WEIGHTS.medium,
          "neeto-ui-font-semibold": weight === FONT_WEIGHTS.semibold,
          "neeto-ui-font-bold": weight === FONT_WEIGHTS.bold,
          "neeto-ui-font-extrabold": weight === FONT_WEIGHTS.extrabold,
          "neeto-ui-font-black": weight === FONT_WEIGHTS.black,
          "neeto-ui-leading-none": lineHeight === LINE_HEIGHTS.none,
          "neeto-ui-leading-tight": lineHeight === LINE_HEIGHTS.tight,
          "neeto-ui-leading-snug": lineHeight === LINE_HEIGHTS.snug,
          "neeto-ui-leading-normal": lineHeight === LINE_HEIGHTS.normal,
          "neeto-ui-leading-relaxed": lineHeight === LINE_HEIGHTS.relaxed,
          "neeto-ui-leading-loose": lineHeight === LINE_HEIGHTS.loose,
          [className]: className,
        })}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

Typography.propTypes = {
  style: PropTypes.oneOf(Object.values(STYLES)),
  weight: PropTypes.oneOf(Object.values(FONT_WEIGHTS)),
  component: PropTypes.oneOf(Object.values(COMPONENTS)),
  textTransform: PropTypes.oneOf(Object.values(TEXT_TRANSFORM)),
  lineHeight: PropTypes.oneOf(Object.values(LINE_HEIGHTS)),
  otherProps: PropTypes.object,
};

export default Typography;
