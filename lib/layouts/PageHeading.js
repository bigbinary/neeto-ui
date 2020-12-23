import React, { Component } from "react";
import classnames from "classnames";
import Badge from "../components/Badge";

class PageHeading extends Component {
  render() {
    const noop = () => {};
    const {
      customClass,
      preHeadingContent = noop,
      breadcrumbLinks = null,
      title,
      count,
      rightButton = noop,
    } = this.props;
    return (
      <div className={classnames(["nui-header", customClass])}>
        <div className="flex flex-row items-center justify-start">
          {preHeadingContent()}
          {breadcrumbLinks}
          <h1 className="text-xl font-semibold" data-test-id="heading">
            {title}
          </h1>
          {count > 0 && (
            <Badge
              color="white"
              type="squared"
              className="bg-purple-500 text-white py-1.5 px-2 ml-2"
            >
              {count}
            </Badge>
          )}
        </div>
        <div className="post-heading-content d-flex align-items-start">
          {this.props.search && (
            <span className="pl-3">{this.props.search()}</span>
          )}
        </div>
        <div className="flex flex-row items-center justify-end">
          {rightButton()}
        </div>
      </div>
    );
  }
}

export default PageHeading;
