import React, { useEffect } from "react";

import { I18nextProvider } from "react-i18next";

import { initializeI18n } from "./i18n";

const TranslationProvider = ({ children, language }) => {
  const i18n = initializeI18n(language);

  useEffect(() => {
    if (!language || i18n.language === language) return;

    i18n.changeLanguage(language);
  }, [language]);

  return <I18nextProvider {...{ i18n }}>{children}</I18nextProvider>;
};

export default TranslationProvider;
