import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esCommon from "@/i18n/locales/es/common.json";
import esLogin from "@/i18n/locales/es/login.json";

import enCommon from "@/i18n/locales/en/common.json";
import enLogin from "@/i18n/locales/en/login.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      common: esCommon,
      login: esLogin
    },
    en: {
      common: enCommon,
      login: enLogin
    }
  },

  lng: "es",
  fallbackLng: "es",

  defaultNS: "common",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
