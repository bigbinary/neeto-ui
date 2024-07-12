/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "src/translations/en.json";

i18n.use(initReactI18next).init({
  resources: { en: { translation: enTranslations } },
  lang: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
