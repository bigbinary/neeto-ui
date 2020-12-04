import React from "react";
import classnames from "classnames";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

const noop = () => { };

const Button = React.forwardRef((props, ref) => {
  const {
    icon = null,
    iconPosition = null,
    label = "",
    loading = false,
    onClick = noop,
    to = null,
    type = "button",
    style = "",
    fullWidth = null,
    className = "",
    disabled = false,
    dataTestId,
    size = null,
    href = null,
    ...otherProps
  } = props;

  let innerContent = label;

  if (icon) {
    if (iconPosition === "right") {
      innerContent = (
        <>
          {label} <i className={classnames([icon], { "ml-1": label })} />
        </>
      );
    } else {
      innerContent = (
        <>
          <i className={classnames([icon], { "mr-2": label })} /> {label}
        </>
      );
    }
  }

  const handleClick = e => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  let Parent = "button";
  if (to) {
    Parent = Link;
  }
  if (href) {
    Parent = `a`;
  }

  return (
    <Parent
      ref={ref}
      to={to}
      href={href}
      onClick={handleClick}
      type={Parent === "button" ? type : null}
      className={classnames(
        [`nui-btn nui-btn--${style || "primary"}`, className],
        {
          "px-4 py-2": size === "large",
          "w-full justify-center py-2.5": fullWidth,
          disabled
        }
      )}
      data-test-id={dataTestId}
      disabled={disabled}
      {...otherProps}
    >
      {loading && <Loader />}
      {innerContent}
    </Parent>
  );
});

const Loader = () => {
  return (
    <div className="nui-btn--loader">
      <BeatLoader size={8} />
    </div>
  );
};

export default Button;
