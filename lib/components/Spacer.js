import React, { Component } from "react";

export default class Spacer extends Component {
  render() {
    const { size = 1 } = this.props;
    return <div className={`my-${size}`} />;
  }
}
