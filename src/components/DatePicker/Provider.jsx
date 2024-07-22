import React from "react";

import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";

import { ANTD_LOCALE } from "components/constants";
import { ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES } from "utils";

const Provider = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <ConfigProvider
      locale={ANTD_LOCALE[i18n.language || "en"]}
      theme={{
        token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
        components: {
          DatePicker: {
            activeBg: "rgb(var(--neeto-ui-white))",
            activeBorderColor: "rgb(var(--neeto-ui-primary-500))",
            addonBg: "rgb(var(--neeto-ui-gray-100))",
            cellActiveWithRangeBg: "rgb(var(--neeto-ui-primary-100))",
            cellBgDisabled: "rgb(var(--neeto-ui-gray-100))",
            cellHoverBg: "rgb(var(--neeto-ui-gray-200))",
            cellHoverWithRangeBg: "rgb(var(--neeto-ui-primary-100))",
            cellRangeBorderColor: "rgb(var(--neeto-ui-primary-100))",
            hoverBg: "rgb(var(--neeto-ui-white))",
            hoverBorderColor: "rgb(var(--neeto-ui-primary-500))",

            // Global overrides
            colorBgContainer: "rgb(var(--neeto-ui-white))",
            colorBgElevated: "rgb(var(--neeto-ui-white))",
            colorPrimary: "rgb(var(--neeto-ui-primary-500))",
            colorPrimaryBorder: "rgb(var(--neeto-ui-primary-100))",
            colorPrimaryHover: "rgb(var(--neeto-ui-primary-600))",
            colorBorder: "rgb(var(--neeto-ui-gray-300))",
            colorError: "rgb(var(--neeto-ui-error-500))",
            colorErrorHover: "rgb(var(--neeto-ui-error-600))",
            colorErrorOutline: "rgb(var(--neeto-ui-error-100))",
            colorFillAlter: "rgb(var(--neeto-ui-gray-100))",
            colorIcon: "rgb(var(--neeto-ui-gray-700))",
            colorIconHover: "rgb(var(--neeto-ui-gray-800))",
            colorLink: "rgb(var(--neeto-ui-primary-500))",
            colorLinkHover: "rgb(var(--neeto-ui-primary-600))",
            colorLinkActive: "rgb(var(--neeto-ui-primary-800))",
            colorSplit: "rgb(var(--neeto-ui-gray-200))",
            colorText: "rgb(var(--neeto-ui-gray-800))",
            colorTextDescription: "rgb(var(--neeto-ui-gray-700))",
            colorTextDisabled: "rgb(var(--neeto-ui-gray-500))",
            colorTextHeading: "rgb(var(--neeto-ui-black))",
            colorTextLightSolid: "rgb(var(--neeto-ui-white))",
            colorTextPlaceholder: "rgb(var(--neeto-ui-gray-400))",
            colorTextQuaternary: "rgb(var(--neeto-ui-gray-400))",
            colorWarning: "rgb(var(--neeto-ui-warning-500))",
            colorWarningHover: "rgb(var(--neeto-ui-warning-600))",
            colorWarningOutline: "rgb(var(--neeto-ui-warning-100))",
            controlItemBgActive: "rgb(var(--neeto-ui-pastel-purple))",
            controlItemBgHover: "rgb(var(--neeto-ui-gray-100))",
            controlOutline: "rgb(var(--neeto-ui-gray-300))",

            // Sizes
            cellHeight: 32,
            padding: 22,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Provider;
