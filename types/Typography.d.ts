import React from "react";

export type TypographyProps = {
  style?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "body3"
    | "nano";
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  lineHeight?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "b"
    | "strong"
    | "i"
    | "em"
    | "mark"
    | "del"
    | "s"
    | "ins"
    | "sub"
    | "sup"
    | "u"
    | "code"
    | "blockquote";
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "fullwidth"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    [key: string]: any;
  };

const Typography: React.ForwardRefExoticComponent<TypographyProps>;
export default Typography;
