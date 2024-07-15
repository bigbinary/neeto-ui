/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */
/* eslint-disable import/extensions */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deTranslations from "src/translations/de.json";
import enTranslations from "src/translations/en.json";
import esTranslations from "src/translations/es.json";
import frTranslations from "src/translations/fr.json";
import nlTranslations from "src/translations/nl.json";
import plTranslations from "src/translations/pl.json";
import ptTranslations from "src/translations/pt.json";

export const initializeI18n = () => {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations },
      de: { translation: deTranslations },
      nl: { translation: nlTranslations },
      pl: { translation: plTranslations },
      pt: { translation: ptTranslations },
    },
    lang: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  return i18n;
};
