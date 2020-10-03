import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

export default class Link extends Component {
  render() {
    const { label, url, to } = this.props;
    let Parent, attributes;
    if (to) {
      Parent = RouterLink;
      attributes = { label, to };
    } else {
      Parent = `a`;
      attributes = { label, href: url };
    }
    return (
      <Parent
        {...attributes}
        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
      >
        {label}
      </Parent>
    );
  }
}
