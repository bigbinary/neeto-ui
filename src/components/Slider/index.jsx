import React from "react";

import { Slider as AntdSlider, ConfigProvider } from "antd";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { ANTD_LOCALE } from "components/constants";
import Label from "components/Label";
import { useId } from "hooks";
import { ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES, hyphenize, noop } from "utils";

const Slider = ({
  min = 0,
  max = 100,
  defaultValue = 0,
  onChange = noop,
  value = undefined,
  label,
  required = false,
  labelProps = {},
  error,
  helpText,
  ...otherProps
}) => {
  const id = useId(otherProps.id);
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;

  const { i18n } = useTranslation();

  return (
    <ConfigProvider
      locale={ANTD_LOCALE[i18n.language || "en"]}
      theme={{
        token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
        components: {
          Slider: {
            dotActiveBorderColor: "rgb(var(--neeto-ui-primary-500))",
            dotBorderColor: "rgb(var(--neeto-ui-gray-500))",
            handleActiveColor: "rgb(var(--neeto-ui-primary-600))",
            handleColor: "rgb(var(--neeto-ui-primary-500))",
            railBg: "rgb(var(--neeto-ui-gray-200))",
            railHoverBg: "rgb(var(--neeto-ui-gray-300))",
            trackBg: "rgb(var(--neeto-ui-primary-500))",
            trackBgDisabled: "rgb(var(--neeto-ui-gray-100))",
            trackHoverBg: "rgb(var(--neeto-ui-primary-600))",

            // Global overrides
            colorFillContentHover: "rgb(var(--neeto-ui-gray-600))",
          },
        },
      }}
    >
      <div className="neeto-ui-input__wrapper">
        <div className="neeto-ui-input__label-wrapper">
          {label && (
            <Label
              {...{ required }}
              data-cy={`${hyphenize(label)}-slider-label`}
              htmlFor={id}
              {...labelProps}
            >
              {label}
            </Label>
          )}
        </div>
        <AntdSlider
          className="neeto-ui-w-full"
          tooltip={{ formatter: null }}
          {...{ defaultValue, max, min, onChange, value, ...otherProps, id }}
        />
        {!!error && (
          <p
            className="neeto-ui-input__error"
            data-cy={`${hyphenize(label)}-input-error`}
            id={errorId}
          >
            {error}
          </p>
        )}
        {helpText && (
          <p
            className="neeto-ui-input__help-text"
            data-cy={`${hyphenize(label)}-input-help`}
            id={helpTextId}
          >
            {helpText}
          </p>
        )}
      </div>
    </ConfigProvider>
  );
};

Slider.propTypes = {
  /**
   * The minimum value the slider can slide to.
   */
  min: PropTypes.number,
  /**
   * The maximum value the slider can slide to.
   */
  max: PropTypes.number,
  /**
   * Callback function that is fired when the user changes the slider's value.
   */
  onChange: PropTypes.func,
  /**
   * The value of slider. When `range` is false, use number, otherwise, use [number, number]
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  /**
   * The value of slider. When `range` is false, use number, otherwise, use [number, number]
   *
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

export default Slider;
