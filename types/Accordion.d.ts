import React from "react";

export interface AccordionProps {
  className?: string;
  defaultActiveKey?: number;
  padded?: boolean;
  style?: "primary" | "secondary";
}

export interface AccordionItemProps {
  id?: string;
  title?: string;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
  titleProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { [key: string]: any };
  iconProps?: React.SVGProps<SVGSVGElement>;
}

export const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
};
