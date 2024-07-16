/* eslint-disable @bigbinary/neeto/file-name-and-export-name-standards */
/* eslint-disable import/extensions */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "src/translations";

export const initializeI18n = (language = "en") => {
  i18n.use(initReactI18next).init({
    resources,
    lang: language,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  return i18n;
};
