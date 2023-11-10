import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import en from './locales/en.json';
import nl from './locales/nl.json';

export const resources = {
  nl: {
    translation: nl
  },
  en: {
    translation: en
  }
}

i18next.init({
  lng: 'en',
  resources: resources,
  interpolation: {
    escapeValue: false, // not needed for svelte as it escapes by default
  }
});

i18next.changeLanguage('nl');

export default () => createI18nStore(i18next);