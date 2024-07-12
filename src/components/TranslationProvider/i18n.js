/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */
/* eslint-disable import/extensions */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "src/translations/en.json";
import esTranslations from "src/translations/es.json";
import frTranslations from "src/translations/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
    fr: { translation: frTranslations },
  },
  lang: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
