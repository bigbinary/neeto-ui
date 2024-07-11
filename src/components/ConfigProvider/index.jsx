import React, { useEffect } from "react";

import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";

const ConfigProvider = ({ children, language, translationResources }) => {
  useEffect(() => {
    translationResources &&
      language &&
      i18n.addResourceBundle(
        language,
        "translation",
        translationResources,
        true,
        true
      );
    language && i18n.changeLanguage(language);
  }, [language, translationResources]);

  return <I18nextProvider {...{ i18n }}>{children}</I18nextProvider>;
};

export default ConfigProvider;
